import React from 'react'
import { useForm } from '@inertiajs/inertia-react'

const DeleteUserForm = (props) => {

    const password_ref = React.useRef(null)
    
    const form = useForm({password: ''})

    const handleSubmit = (event) => {
        event.preventDefault()

        form.delete(route('current-user.destroy'), {
            preserveScroll: true,
            onSuccess: () => document.getElementById("closeBtn").click(),
            onError: () =>  password_ref.current.focus(),
            onFinish: () => form.reset(),
        })
    }

    const closeModal = () => {
        form.reset()
        form.clearErrors()
    }
    
    return (
        <>
        <div class="row my-4">
        <div class="col-sm-4">
            <h3>Delete Account</h3>
            <p>Permanently delete your account.</p>
        </div>
        <div class="col-sm-8 border border-secondary p-3" style={{backgroundColor: "#ffffff", boxShadow: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)"}}>
            <p>Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain.</p>
            <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#deleteModal">Delete Account</button>
        </div>
        </div>

        <div class="modal fade" id="deleteModal" data-backdrop="static" data-keyboard="false">
            <form onSubmit={handleSubmit}>
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">

                    <div class="modal-header">
                        <h4 class="modal-title">Delete Account</h4>
                        <button type="button" class="close" data-dismiss="modal" onClick={closeModal}>&times;</button>
                    </div>

                    <div class="modal-body">
                        Are you sure you want to delete your account? Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account.
                        <div class="form-outline mt-4">
                            <input 
                                type="password" 
                                id="password"
                                name="password"
                                class="form-control form-control-lg"
                                placeholder="Password"
                                ref={password_ref}
                                value={form.data.password} 
                                onChange={e => form.setData("password", e.target.value)} 
                            />
                            <div class="invalid-feedback d-block">{form.errors.password}</div>
                        </div>
                    </div>

                    <div class="modal-footer">
                        <button type="button" id="closeBtn" class="btn btn-dark" data-dismiss="modal" onClick={closeModal}>Close</button>
                        <button type="submit" class="btn btn-danger">Delete Account</button>
                    </div>

                    </div>
                </div>
            </form>
        </div>
        </>
    )
}

export default DeleteUserForm