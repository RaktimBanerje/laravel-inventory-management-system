import React from 'react'
import { useForm } from '@inertiajs/inertia-react'

const UpdateProfileInformationForm = (props) => {

    const { user } = props

    const [photoPreview, setPhotoPreview] = React.useState(null)
    
    const form = useForm({
        _method: 'PUT',
        name: user.name,
        email: user.email,
        photo: null,
    })

    const handleSubmit = (event) => {
        event.preventDefault()
        
        form.post(route('user-profile-information.update'), {
            errorBag: 'updateProfileInformation',
            preserveScroll: true,
            // onSuccess: () => (this.clearPhotoFileInput()),
        })
    }


    // const updateProfileInformation = () => {}

    // const selectNewPhoto = () => {}
    
    // const updatePhotoPreview = () => {}
    
    // const deletePhoto = () => {}

    // const clearPhotoFileInput = () => {}

    return (
        <div class="row my-4
            ">
            <div class="col-sm-4">
                <h3>Profile Information</h3>
                <p>Update your account's profile information and email address.</p>
            </div>
            <div class="col-sm-8 border border-secondary p-3" style={{backgroundColor: "#ffffff", boxShadow: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)"}}>
                <form onSubmit={handleSubmit}>
                    <div class="d-block">
                        <div class="form-outline mb-4">
                            <label class="form-label">Name</label>
                            <input 
                                type="text" 
                                id="name" 
                                name="name" 
                                class="form-control form-control-lg" 
                                value={form.data.name} 
                                onChange={e => form.setData("name", e.target.value)} 
                                autoComplete="name" 
                            />
                            <div class="invalid-feedback">{form.errors.name}</div>
                        </div>

                        <div class="form-outline mb-4">
                            <label class="form-label">Email</label>
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                class="form-control form-control-lg" 
                                value={form.data.email} 
                                onChange={e => form.setData("email", e.target.value)} 
                            />
                            <div class="invalid-feedback">{form.errors.email}</div>
                        </div>
                    </div>
                    <div class="d-flex justify-content-end">
                        { form.recentlySuccessful && <span style={{marginTop: "15px", marginRight: "15px"}}>Saved.</span> }
                        <button type="submit" class="btn btn-dark" disabled={form.processing}>Save</button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default UpdateProfileInformationForm