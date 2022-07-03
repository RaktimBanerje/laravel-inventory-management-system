import React from "react"

const AddressAutocomplete = ({setValues}) => {

    const setup = () => {
        const autoCompleteField = document.getElementById("street")

        const autoComplete = new google.maps.places.Autocomplete(autoCompleteField, {
            componentRestrictions: { country: ["IN"] },
            fields: ["address_components", "geometry"],
            types: ["address"]
        })
    
        $(`#street`).keydown(function (e) {
            if (e.which == 13 && $('.pac-container:visible').length) return false;
        });
    
        autoComplete.addListener("place_changed", function () {
            let street = ""
            let country = ""
            let state = ""
            let locality = ""
            let area = ""
            let zip = ""
            const place = autoComplete.getPlace()
    
            for (const component of place.address_components) {
                const componentType = component.types[0];
    
                switch (componentType) {
                    case "country": {
                        country = component.long_name;
                        break;
                    }
                    case "administrative_area_level_1": {
                        state = component.long_name;
                        break;
                    }
                    case "locality": {
                        locality = component.long_name;
                        break;
                    }
                    case "sublocality_level_2": {
                        area = component.long_name
                        break;
                    }
                    case "street_number": {
                        street = `${component.long_name} ${street}`;
                        break;
                    }
                    case "route": {
                        street += component.long_name;
                        break;
                    }
                    case "sublocality_level_1": {
                        street = `${street}, ${component.long_name}`;
                        break;
                    }
                    case "postal_code": {
                        zip = `${component.long_name}`;
                        break;
                    }
                    case "postal_code_suffix": {
                        zip = `${zip}-${component.long_name}`;
                        break;
                    }
                }
            }
    
            setValues(values => ({...values, street, country, state, locality, area, zip, 
                latitude: place.geometry.location.lat(),
                longitude: place.geometry.location.lng()
            }))
        })
    }

    React.useEffect(()=>{
        window.google && setup()
    }, [window.google])
    
    return (
        null
    )
}

export default AddressAutocomplete