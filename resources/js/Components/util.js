import React from "react"
import html2canvas from "html2canvas"
import { jsPDF } from "jspdf"
import 'jspdf-autotable'
import { format , min as minDate, max as maxDate, toDate, subDays, addDays, parseISO  } from "date-fns"
import Select from 'react-select';
import Flatpickr from "react-flatpickr"

let f = (a, b) => [].concat(...a.map(a => b.map(b => [].concat(a, b))));
export let cartesian = (a, b, ...c) => b ? cartesian(f(a, b), ...c) : a;

export const regexp = {
    phone: /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
} 

export const formatDate = (date) => format(new Date(date), "dd-MM-yyyy")

export const options = {
    salutaionOptions: [
        {value: "", label: "--Select--"},
        {value: "Mr.", label: "Mr."},
        {value: "Ms.", label: "Ms."},
        {value: "Mrs.", label: "Mrs."}
    ],

    sexOptions: [
        {value: "", label: "--Select--"},
        {value: "Male", label: "Male"},
        {value: "Female", label: "Female"},
        {value: "Other", label: "Other"}
    ],

    gstTreatmentOptions: [
        {value: "", label: "--Select--"},
        {value: "Registered Business - Regular", label: "Registered Business - Regular Business that is registered under GST"},
        {value: "Registered Business - Composition", label: "Registered Business - Composition Business that is registered under GST"},
    ],

    priceListOptions: [
        {value: "", label: "--Select--"},        
        {value: "Price 0", label: "Price 0"},
        {value: "Price 1", label: "Price 1"},
        {value: "Price 2", label: "Price 2"},
        {value: "Price 3", label: "Price 3"}
    ],

    currencyOptions: [
        {value: "", label: "--Select--"},
        {value: "INR", label: "₹"},
        {value: "DOLLAR", label: "$"},       
    ],

    deliveryToOptions: [
        {value: "warehouse", label: "Warehouse"},
        {value: "customer", label: "Customer"},
    ]
}

export const renderCell = {
    addressCell: (row) => {
        const str1 = `${row.building_no} ${row.street}, ${row.area}, ${row.locality}`
        const str2 = row.land_mark ? `near ${row.land_mark}` : ""
        const str3 = `${row.zip} ${row.state}, ${row.country}`
        
        return str1 + str2 + str3
    }
}

export const numberFormatter = new Intl.NumberFormat("en-US", {maximumFractionDigits: 1})

const SI_SYMBOL = ["", "K", "M", "G", "T", "P", "E"]

export const abbreviateNumber = number => {  
    // what tier? (determines SI symbol)
    var tier = Math.log10(Math.abs(number)) / 3 | 0;

    // if zero, we don't need a suffix
    if(tier == 0) return numberFormatter.format(number);

    // get suffix and determine scale
    var suffix = SI_SYMBOL[tier];
    var scale = Math.pow(10, tier * 3);

    // scale the number
    var scaled = number / scale;
    
    return numberFormatter.format(scaled) + " " + suffix
}

export const print = () => {
   
    html2canvas(document.querySelector('#invoice #invoice-header'))
        .then(canvas => {
            var imgData = canvas.toDataURL('image/jpeg')

            const doc = new jsPDF('p', 'pt', 'a4', true)
            doc.addImage({imageData: imgData, x: 60, y: 20, compression: 'FAST'})
            doc.autoTable({ html: '#invoice table', startY: 420})

            var mywindow = window.open('', 'PRINT', 'height=650,width=900,top=100,left=150');                                            
            mywindow.document.write(`<iframe width='100%' height='100%' src="${doc.output('datauristring')}" />`);
            
            mywindow.document.close(); // necessary for IE >= 10
        })
}

// Define a default UI for filtering
export function DefaultColumnFilter({
    column: { filterValue, preFilteredRows, setFilter },
  }) {
    const count = preFilteredRows.length

    return (
      <>
        <input
          className="form-control my-2"
          value={filterValue || ''}
          onChange={e => {
            setFilter(e.target.value || undefined) // Set undefined to remove the filter entirely
          }}
          placeholder={`Search ${count} records...`}
          style={{
              width: '150px',
          }}
        />
        <span style={{cursor: "pointer"}} onClick={()=> setFilter([])}><u>Reset</u></span>
      </>
    )
  }

// This is a custom filter UI for selecting
// a unique option from a list
export function SelectColumnFilter({
    column: { filterValue, setFilter, preFilteredRows, id },
  }) {
    // Calculate the options for filtering
    // using the preFilteredRows
    let options = React.useMemo(() => {
      const options = new Set()
      preFilteredRows.forEach(row => {
        options.add(row.values[id])
      })
      return [...options.values()]
    }, [id, preFilteredRows])
    
    options = options.map(option => ({value: option, label: option}))

    // Render a multi-select box
    return (
      <>
        <Select
          className="basic-multi-select"
          classNamePrefix="select"
          options={options}
          onChange={options => {
            const newValues = options.map(option => option.value)
            setFilter(newValues.length > 0 ? newValues : undefined)
          }}
          isMulti
          isClearable
        />
      </>
    )
  }

// This is a custom filter UI that uses a
// slider to set the filter value between a column's
// min and max values
export function SliderColumnFilter({
    column: { filterValue, setFilter, preFilteredRows, id },
  }) {
    // Calculate the min and max
    // using the preFilteredRows

    const [min, max] = React.useMemo(() => {
      let min = preFilteredRows.length ? preFilteredRows[0].values[id] : 0
      let max = preFilteredRows.length ? preFilteredRows[0].values[id] : 0
      preFilteredRows.forEach(row => {
        min = Math.min(row.values[id], min)
        max = Math.max(row.values[id], max)
      })
      return [min, max]
    }, [id, preFilteredRows])


    return (
      <>
        <input
          className="form-control my-2"
          type="range"
          min={min}
          max={max}
          value={filterValue || min}
          onChange={e => {
            setFilter(parseInt(e.target.value, 10))
          }}
          style={{
            width: '150px',
          }}
        />
        <span style={{cursor: "pointer"}} onClick={()=> setFilter([])}><u>Reset</u></span>
      </>
    )
  }

// This is a custom UI for our 'between' or number range
// filter. It uses two number boxes and filters rows to
// ones that have values between the two
export  function NumberRangeColumnFilter({
    column: { filterValue = [], preFilteredRows, setFilter, id },
  }) {
    const [min, max] = React.useMemo(() => {
      let min = preFilteredRows.length ? preFilteredRows[0].values[id] : 0
      let max = preFilteredRows.length ? preFilteredRows[0].values[id] : 0
      preFilteredRows.forEach(row => {
        min = Math.min(row.values[id], min)
        max = Math.max(row.values[id], max)
      })
      return [min, max]
    }, [id, preFilteredRows])

    return (
      <>
        <div
          className="my-2"
          style={{
            display: 'flex',
          }}
        >
          <input
            className="form-control"
            value={filterValue[0] || ''}
            type="number"
            onChange={e => {
              const val = e.target.value
              setFilter((old = []) => [val ? parseInt(val, 10) : undefined, old[1]])
            }}
            placeholder={`Min (${min})`}
            style={{
              width: '150px',
              marginRight: '0.5rem',
            }}
          />
          to
          <input
            className="form-control"
            value={filterValue[1] || ''}
            type="number"
            onChange={e => {
              const val = e.target.value
              setFilter((old = []) => [old[0], val ? parseInt(val, 10) : undefined])
            }}
            placeholder={`Max (${max})`}
            style={{
              width: '150px',
              marginLeft: '0.5rem',
              marginRight: '0.5rem',
            }}
          />
        </div>
        <span style={{cursor: "pointer"}} onClick={()=> setFilter([])}><u>Reset</u></span>
      </>
    )
  }

export function DateRangeColumnFilter ({
    column: {
      filterValue = [],
      setFilter,
      preFilteredRows,
      id,
    },
    rows
  }) {
    const dates = preFilteredRows.map(val => new Date(val.original[id]))
    const min = subDays(minDate(dates), 1)
    const max = maxDate(dates)
    const fp = React.useRef(null);

    return (
      <>
        <Flatpickr
          ref={fp}
          className="form-control my-2"
          onChange={(date) => {
            if (date.length === 2) {
              setFilter([date[0],date[1]])
            }
          }}
          options={{
            enable: [
              {
                from: min,
                to : max
              }
            ],
            mode : 'range'
          }}
          style={{
            width: '200px',
            marginRight: '0.5rem',
          }}
        />
        <span style={{cursor: "pointer"}} onClick={()=> {setFilter([]); fp.current.flatpickr.clear()}}><u>Reset</u></span>
    </>
  ) 
}
  
// export function DateRangeColumnFilter({
//     column: { filterValue = [], preFilteredRows, setFilter, id }}) 
//   {
//     const [min, max] = React.useMemo(() => {
//         let min = new Date(preFilteredRows[0].values[id])
//         let max = new Date(preFilteredRows[0].values[id])
//         preFilteredRows.forEach(row => {
//             min = new Date(row.values[id]) <= min ? new Date(row.values[id]) : min
//             max = new Date(row.values[id]) >= max ? new Date(row.values[id]) : max
//         });
//         return [min, max];
//     }, [id, preFilteredRows]);
//     return (
//         <div
//             style={{
//                 display: "flex"
//             }}
//         >
//             <input
//                 value={filterValue[0] || ""}
//                 type="date"
//                 min={min.toISOString().slice(0, 10)}
//                 onChange={e => {
//                     const val = e.target.value;
//                     setFilter((old = []) => [val ? (val) : undefined, old[1]]);
//                 }}
//                 style={{
//                     width: "170px",
//                     marginRight: "0.5rem"
//                 }}
//             />
//             to
//       <input
//                 value={filterValue[1] || ""}
//                 type="date"
//                 max={max.toISOString().slice(0, 10)}
//                 onChange={e => {
//                     const val = e.target.value;
//                     console.log(val)
//                     setFilter((old = []) => [old[0], val ? (val) : undefined]);
//                 }}
//                 style={{
//                     width: "170px",
//                     marginLeft: "0.5rem"
//                 }}
//             />
//         </div>
//     );
// }  

export  function fuzzyTextFilterFn(rows, id, filterValue) {
    return matchSorter(rows, filterValue, { keys: [row => row.values[id]] })
}

export  function filterGreaterThan(rows, id, filterValue) {
    return rows.filter(row => {
      const rowValue = row.values[id]
      return rowValue >= filterValue
    })
}
  
// This is an autoRemove method on the filter function that
// when given the new filter value and returns true, the filter
// will be automatically removed. Normally this is just an undefined
// check, but here, we want to remove the filter if it's not a number
filterGreaterThan.autoRemove = val => typeof val !== 'number'

export function dateBetweenFilterFn(rows, id, filterValues) {
    let sd = subDays(new Date(filterValues[0]), 1);
    let ed = addDays(new Date(filterValues[1]), 1);

    return rows.filter(row => {
      var time = new Date(row.original[id[0]])
      if (filterValues.length === 0) return rows;
      return (time >= sd && time <= ed);
    });
}

dateBetweenFilterFn.autoRemove = val => !val;
  
export function includesFilterFn(rows, id, filterValues) {
  return rows.filter(row => filterValues.includes(row.original[id[0]]))
}

includesFilterFn.autoRemove = val => !val
