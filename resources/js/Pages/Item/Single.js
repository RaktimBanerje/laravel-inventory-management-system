import React from 'react';
import { Formik, Form } from "formik"
import FormControl from "../../Components/FormControl"

const Single = ({handleSubmit, savedData}) => {

    const initialValues = {
        name: "",
        description : "",
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
    
    return (
        <Formik
            initialValues={savedData || initialValues}
            onSubmit={handleSubmit}
        >
            {(props)=>(
                <Form>
                    <div className="row">
                        <div className="col-md-8">
                            <FormControl control="input" name="name" label="Name" />    
                            <FormControl control="input" name="description" label="Description" />
                            <FormControl control="input" name="sku" label="SKU" />
                            <FormControl control="input" name="unit" label="Unit" />
                            <FormControl control="input" type="number" name="cost_price" type="number" label="Price" />
                        </div>
                        <div className="col-md-4"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-8">
                            <FormControl control="input" name="dimensions" label="Dimensions (cm) (L X W X H)" />    
                            <FormControl control="input" type="number" name="weight" label="Weight" />
                            <FormControl control="input" name="manufacturer" label="Manufacturer" />
                            <FormControl control="input" name="brand" label="Brand" />
                        </div>
                        <div className="col-md-4">
                            <FormControl control="input" name="upc" label="UPC" />    
                            <FormControl control="input" name="ean" label="EAN" />
                            <FormControl control="input" name="mpn" label="MPN" />
                            <FormControl control="input" name="isbn" label="ISBN" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col text-center">
                            <input className="btn btn-success" type="submit" disabled={!props.isValid && props.isSubmitting} /> 
                        </div>
                    </div>
                </Form>
            )}
        </Formik>
    )
};

export default Single;
