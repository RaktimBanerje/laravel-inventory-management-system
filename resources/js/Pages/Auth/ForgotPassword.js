import React from 'react'
import { useForm } from '@inertiajs/inertia-react'

const ForgotPassword = (props) => {

    const { errors, status } = props

    const { processing, data, setData, post } = useForm({email: ''})
    
    const handleSubmit = (event) => {
        event.preventDefault()

        post(route('password.email'))
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
                                        <h2 className="text-uppercase text-center my-5">Forgot Pasword</h2>
                                        <p class="text-muted">Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one.</p>
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
                                            </div>
                                        )
                                    }

                                    {
                                        status && (
                                            <div class="alert alert-success alert-dismissible fade show" role="alert">
                                                {status}
                                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                        )
                                    }

                                    <form onSubmit={handleSubmit}>

                                        <div class="form-outline mb-4">
                                            <label class="form-label">Email</label>
                                            <input 
                                                type="email" 
                                                id="email" 
                                                name="email" 
                                                class="form-control form-control-lg"
                                                value={data.email} 
                                                onChange={e => setData("email", e.target.value)} 
                                                autofocus 
                                            />
                                        </div>

                                        <div class="d-flex justify-content-center">
                                            <button type="submit" class="btn btn-success btn-block btn-lg gradient-custom-4 text-body text-uppercase" disabled={processing}>Email Password Reset Link</button>
                                        </div>

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

export default ForgotPassword