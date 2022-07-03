import React from 'react'
import { useForm } from '@inertiajs/inertia-react'

const UpdatePasswordForm = (props) => {

  const password_ref = React.useRef(null)
  const current_password_ref = React.useRef(null)
  
  const form = useForm({
    current_password: '',
    password: '',
    password_confirmation: '',
  })

  const handleSubmit = (event) => {
      event.preventDefault()
      
      form.put(route('user-password.update'), {
        errorBag: 'updatePassword',
        preserveScroll: true,
        onSuccess: () => form.reset(),
        onError: () => {
            if (form.errors.password) {
                form.reset('password', 'password_confirmation')
                password_ref.current.focus()
            }

            if (form.errors.current_password) {
                form.reset('current_password')
                current_password_ref.current.focus()
            }
        }
    })
  }

  return (
    <div class="row my-4">
      <div class="col-sm-4">
          <h3>Update Password</h3>
          <p>Ensure your account is using a long, random password to stay secure.</p>
      </div>
      <div class="col-sm-8 border border-secondary p-3" style={{backgroundColor: "#ffffff", boxShadow: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)"}}>
          <form onSubmit={handleSubmit}>
              <div class="d-block">
                  <div class="form-outline mb-4">
                      <label class="form-label">Current Password</label>
                      <input 
                        type="password" id="current_password" 
                        name="current_password" 
                        class="form-control form-control-lg" 
                        ref={current_password_ref} 
                        value={form.data.current_password}  
                        onChange={e => form.setData("current_password", e.target.value)} 
                        autoComplete="current-password" 
                      />
                      <div class="d-block invalid-feedback">{form.errors.current_password}</div>
                  </div>

                  <div class="form-outline mb-4">
                      <label class="form-label">New Password</label>
                      <input 
                        type="password" 
                        id="password" 
                        name="password" 
                        class="form-control form-control-lg" 
                        ref={password_ref}
                        value={form.data.password}  
                        onChange={e => form.setData("password", e.target.value)} 
                        autoComplete="new-password" 
                      />
                      <div class="d-block invalid-feedback">{form.errors.password}</div>
                  </div>

                  <div class="form-outline mb-4">
                      <label class="form-label">Confirm Password</label>
                      <input 
                        type="password" 
                        id="password_confirmation" 
                        name="password_confirmation" 
                        class="form-control form-control-lg" 
                        value={form.data.password_confirmation} 
                        onChange={e => form.setData("password_confirmation", e.target.value)} 
                        autoComplete="new-password" 
                      />
                      <div class="d-block invalid-feedback">{form.errors.password_confirmation}</div>
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

export default UpdatePasswordForm