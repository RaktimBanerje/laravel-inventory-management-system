import React from 'react'
import { Link, useForm } from '@inertiajs/inertia-react'

const Register = (props) => {

  const { errors, status } = props
  
  const {processing, data, setData, post, reset} = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    terms: false,
  })

  const handleSubmit = (event) => {
    event.preventDefault()

    post(route('register'), {
      onFinish: () => reset('password', 'password_confirmation')
    })
  }
  
  return (
      <section className="vh-100 bg-image" style={{backgroundImage: `url(${'https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp'})`}}>
        <div className="mask d-flex align-items-center h-100 gradient-custom-3">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-9 col-lg-7 col-xl-8">
                <div className="card" style={{borderRadius: "15px"}}>
                  <div className="card-body p-5">
                    <div className="col d-flex flex-column align-items-center justify-content-center">
                      <img src="/assets/img/brand/logo.png" style={{height: "62px"}} alt="..." />
                      <h2 className="text-uppercase text-center my-5">Create an account</h2>
                    </div>
                    {
                      Object.keys(errors).length > 0
                      && (
                      <div class="alert alert-danger alert-dismissible fade show" role="alert">
                          <ul>
                            {Object.keys(errors).map(key => <li key={key}>{errors[key]}</li>)}
                          </ul>
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>)
                    }
                    
                    {
                      status && (
                      <div class="alert alert-success alert-dismissible fade show" role="alert">
                        {status}
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>)
                    }
                    
                    <form onSubmit={handleSubmit}>

                      <div class="form-outline mb-4">
                        <label class="form-label">Name</label>
                        <input 
                          type="text" 
                          id="name" 
                          name="name" 
                          class="form-control form-control-lg" 
                          value={data.name}
                          onChange={e => setData("name", e.target.value)}
                        />
                      </div>

                      <div class="form-outline mb-4">
                        <label class="form-label">Email</label>
                        <input 
                          type="email" 
                          id="email" 
                          name="email" 
                          class="form-control form-control-lg" 
                          value={data.email}
                          onChange={e => setData("email", e.target.value)} autoComplete="username" 
                        />
                      </div>

                      <div class="form-outline mb-4">
                        <label class="form-label">Password</label>
                        <input 
                          type="password" 
                          id="password" 
                          name="password" 
                          class="form-control form-control-lg" 
                          value={data.password}
                          onChange={e => setData("password", e.target.value)} autoComplete="new-password" 
                        />
                      </div>

                      <div class="form-outline mb-4">
                        <label class="form-label">Repeat password</label>
                        <input 
                          type="password" 
                          id="password_confirmation" 
                          name="password_confirmation" 
                          class="form-control form-control-lg"
                          value={data.password_confirmation} 
                          onChange={e => setData("password_confirmation", e.target.value)} autoComplete="new-password" 
                        />
                      </div>

                      <div class="d-flex justify-content-center">
                        <button 
                          type="submit" 
                          class="btn btn-success btn-block btn-lg gradient-custom-4 text-body" 
                          disabled={processing}>Register</button>
                      </div>

                      <p class="text-center text-muted mt-5 mb-0">Have already an account? <Link href={route("login")} class="fw-bold text-body"><u>Login here</u></Link></p>

                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Register