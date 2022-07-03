import React from 'react';
import { Formik, Form, FieldArray } from "formik";
import FormControl from "../../Components/FormControl";

const Group = ({handleSubmit, savedData}) => {
    
    const initialValues = {
        name: "",
        description : "",
        brand : "",
        attributes: [{
            name: "",
            options : "",
        }],
        variations: [{
            attribute: [{
                name: "",
                option : "",
            }],
            name: "",
            description: "",
            sku : "",
            unit : "",
            cost_price : "",
            dimensions : "",
            weight : "",
            manufacturer : "",
            upc : "",
            ean : "",
            mpn : "",
            isbn : "",
        }]
    }
    return (
            <Formik
                initialValues={savedData || initialValues}
                enableReinitialize = {true}
                onSubmit={handleSubmit}
            >
                {(props) => {

                    return( 
                        <Form>
                            <div className="row">
                                <div className="col-md-8">
                                    <FormControl control="input" name="name" label="Name" />    
                                    <FormControl control="input" name="description" label="Description" />
                                    <FormControl control="input" name="brand" label="Brand" />
                                </div>
                                <div className="col-md-4"></div>
                            </div>
                            <h4>Attribute(s)</h4>
                            <FieldArray name="attributes">
                                {({push, remove, form})=>(
                                    <React.Fragment>
                                        {form.values.attributes.map((attribute, index) => (
                                            <div className="row" key={index}>
                                                <div className="col-md-4">
                                                    <FormControl control="input" name={"attributes." + index + ".name"} label="Name" />
                                                </div>
                                                <div className="col-md-7">
                                                    <FormControl control="input" name={"attributes." + index + ".options"} label="Value(s)" />
                                                </div>
                                                <div className="col-md-1">
                                                    <button
                                                        type="button" 
                                                        className="btn btn-sm" 
                                                        style={{alignSelf: "base-line", padding: 0, marginTop: 4}} 
                                                        onClick={event => {
                                                            const index = event.target.id.split("-")[1]
                                                            form.setValues(values => {
                                                                values.attributes.splice(index, 1)
                                                                const totalAttributes = values.attributes.length
                                                                for(let i = 0 ; i < values.variations.length ; i++) {
                                                                    values.variations[i].attribute.splice(index, 1)
                                                                }
                                                                
                                                                return values
                                                            })
                                                        }} 
                                                        disabled={form.values.attributes.length === 1}
                                                    > <i id={`remove-${index}`} className="far fa-2x fa-trash-alt"></i> </button>
                                                </div>
                                            </div>
                                        ))}
                                        <div className="row">
                                            <div className="col">
                                                <button 
                                                    type="button" 
                                                    className="btn btn-sm btn-primary" 
                                                    onClick={() => {
                                                        form.setValues(values => {
                                                            values.attributes.push({name: "", options: ""})
                                                            for(let i = 0 ; i < values.variations.length ; i++) {
                                                                values.variations[i].attribute.push({name: "", option: ""})
                                                            }
                                                            
                                                            return values
                                                        })
                                                    }}>New Attribute</button>
                                            </div>
                                        </div>
                                    </React.Fragment>
                                )}
                            </FieldArray>
                            
                            <FieldArray name="variations">
                                {({push, remove, form}) => (
                                    <div className="accordion">
                                        {form.values.variations.map((variant, index)=> (
                                            <div className="card" key={index}>
                                                <div className="card-header">
                                                    <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target={`#variant-${index}`} aria-expanded="true">
                                                        <div className="row">
                                                            <div className="col-md-8">
                                                                <div className="row">
                                                                    {
                                                                        <FieldArray name={`variations.${index}.attribute`}>
                                                                            {({push, remove, form})=> {
                                                                                return form.values.attributes.map((attribute, idx) => {
                                                                                    const selectOptions = [
                                                                                        {value: "", label: "--Select--"}
                                                                                    ]
                                                                                    const temp = attribute.options.split(",")
                                                                                    temp.forEach(option => selectOptions.push({value: option.trim(), label: option.trim()}))
                                                                                    
                                                                                    return (
                                                                                        <div className="col-md-3" key={idx}>
                                                                                            <FormControl control="select" name={"variations." + index + ".attribute." + idx + ".option"} options={selectOptions} />
                                                                                        </div>
                                                                                    )
                                                                                })
                                                                            }}
                                                                        </FieldArray>
                                                                    }
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </button>
                                                </div>
                                            
                                                <div id={`variant-${index}`} className="collapse">
                                                    <div className="card-body">
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <FormControl control="input" name={`variations.${index}.name`} label="Name" />
                                                                <FormControl control="input" name={`variations.${index}.description`} label="Description" />
                                                                <FormControl control="input" name={`variations.${index}.dimensions`} label="Dimensions (cm) (L X W X H)" />
                                                                <FormControl control="input" name={`variations.${index}.manufacturer`} label="Manufacturer" />
                                                            </div>
                                                            <div className="col-md-6"></div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <FormControl control="input" name={`variations.${index}.sku`} label="SKU" />
                                                                <FormControl control="input" name={`variations.${index}.unit`} label="Unit" />
                                                                <FormControl control="input" type="number" name={`variations.${index}.cost_price`} label="Price" />  
                                                                <FormControl control="input" type="number" name={`variations.${index}.weight`} label="Weight" />
                                                            </div>
                                                            <div className="col-md-6">
                                                                <FormControl control="input" name={`variations.${index}.upc`} label="UPC" />    
                                                                <FormControl control="input" name={`variations.${index}.ean`} label="EAN" />
                                                                <FormControl control="input" name={`variations.${index}.mpn`} label="MPN" />
                                                                <FormControl control="input" name={`variations.${index}.isbn`} label="ISBN" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                        
                                        <div className="row my-2">
                                            <div className="col">
                                                <button 
                                                    type="button" 
                                                    className="btn btn-sm btn-primary" 
                                                    onClick={() => {
                                                        form.setValues(values => {
                                                            const obj = {            
                                                                attribute: [{
                                                                    name: "",
                                                                    option : "",
                                                                }],
                                                                sku : "",
                                                                unit : "",
                                                                cost_price : "",
                                                                dimensions : "",
                                                                weight : "",
                                                                manufacturer : "",
                                                                brand : "",
                                                                upc : "",
                                                                ean : "",
                                                                mpn : "",
                                                                isbn : "",
                                                            }
                                                            const totalAttributes = values.attributes.length
                                                    
                                                            for(let i = 0 ; i < totalAttributes - 1; i++){
                                                                obj.attribute.push({name: "", option: ""})
                                                            }

                                                            values.variations.push(obj)
                                                            
                                                            return values
                                                        })
                                                    }}>New Variant</button>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </FieldArray>
                            <div className="row">
                                <div className="col text-center">
                                    <input className="btn btn-success" type="submit" disabled={!props.isValid && props.isSubmitting} /> 
                                </div>
                            </div>
                        </Form>
                    )
                }}
            </Formik>
    )
};

export default Group;
