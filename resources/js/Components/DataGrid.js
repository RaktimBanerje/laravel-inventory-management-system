import React from 'react'
import { useTable, useSortBy, useFilters, useGlobalFilter,  useAsyncDebounce } from 'react-table'
import { CSVLink } from "react-csv";
import { formatDate, DefaultColumnFilter, includesFilterFn, fuzzyTextFilterFn, dateBetweenFilterFn } from './util';

const DataGrid = ({
  name,
  heading,
  columns,
  data,
  handleExportCurrentView
}) => {

  const [exportCurrentView, setExportCurrentView] = React.useState({filename: undefined, headers: [], data: []})
  
  const exportView = () => {
    const headers = headerGroups.map(headerGroup => headerGroup.headers.map(column => column.render("Header")))[0]

    const data = rows.map((row, i) => {
      prepareRow(row)
      return (
          row.cells.map(cell => {
            const reactElement = cell.render("Cell")
            return reactElement.props.value
          })
      )
    })         

    setExportCurrentView(prev => ({...prev, filename: `${name} - Report - ${formatDate(new Date())}`, headers, data}))
  }

  const filterTypes = React.useMemo(
    () => ({
      // Add a new fuzzyTextFilterFn filter type.
      fuzzyText: fuzzyTextFilterFn,
      // Or, override the default text filter to use
      // "startWith"
      includes: includesFilterFn,
      dateBetween: dateBetweenFilterFn,

      text: (rows, id, filterValue) => {
        return rows.filter(row => {
          const rowValue = row.values[id]
          return rowValue !== undefined
            ? String(rowValue)
                .toLowerCase()
                .startsWith(String(filterValue).toLowerCase())
            : true
        })
      },

      // date: (rows, id, filterValue) => {
      //   console.log(filterValue[0])
      //   let start = subDays(filterValue[0], 1)
      //   let end = addDays(filterValue[0], 1)
      //   return rows.filter(val => 
      //    moment(val.original[id],dateFormat).isBetween(start, end)
      //   )
      // },

    }),
    []
  )

  const defaultColumn = React.useMemo(
    () => ({
      // Let's set up our default Filter UI
      Filter: DefaultColumnFilter,
    }),
    []
  )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    visibleColumns,
    preGlobalFilteredRows,
    setGlobalFilter,
    setAllFilters
  } = useTable(
    {
      columns,
      data,
      defaultColumn, // Be sure to pass the defaultColumn option
      filterTypes,
    },
    useFilters, // useFilters!
    useGlobalFilter, // useGlobalFilter!
    useSortBy
  )
  
  const { globalFilter } = state

  return (
    <div className="card">
      <div className="card-header d-flex flex-row align-items-center justify-content-end" style={{backgroundColor: "#f1f2f6"}}>
          <h4 className="m-0 font-weight-bold text-primary">{heading}</h4>

          <div className="row align-items-center mr-4">
              <div className="input-group my-2">
                  <input className="form-control border-end-0 border border-dark rounded" type="search" placeholder="Search..." value={globalFilter} onChange={e=>setGlobalFilter(e.target.value)} />
              </div>
              <span className="text-right" style={{cursor: "pointer"}} onClick={()=> setAllFilters([])}><u>RESET</u></span>
          </div>

          <div class="dropdown no-arrow">
            <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
            </a>
            <div class="dropdown-menu dropdown-menu-right shadow animated--fade-in" aria-labelledby="dropdownMenuLink">
                <div className="dropdown-item">
                  <button className="dropdown-item">
                    <i class="fa fa-download mr-2" aria-hidden="true"></i>
                    Import
                  </button>
                </div>

                <div className="dropdown-item">
                  <CSVLink className="dropdown-item" onClick={handleExportCurrentView || exportView} {... exportCurrentView}>
                    <i class="fa fa-upload mr-2" aria-hidden="true"></i>
                    Export
                  </CSVLink>
                </div>
            </div>
          </div>
      </div>

      <div className="card-body">
        <div className="table-responsive">
          <table {...getTableProps()} className="table align-items-center" id="table">
            <thead className="thead-light">
              {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column, index) => (
                      <th className="th" key={index}>
                          <div {...column.getHeaderProps(column.getSortByToggleProps())}>
                            {column.render("Header")}
                            {column.isSorted? column.isSortedDesc? "  ▼" : "  ▲" : null}
                          </div>

                          <div>{column.canFilter ? column.render('Filter') : null}</div>
                      </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {rows.map((row, i) => {
                prepareRow(row)
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map(cell => {
                      return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                    })}
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default DataGrid