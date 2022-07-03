import React from 'react'
import { Link, useForm } from '@inertiajs/inertia-react'

const VerifyEmail = (props) => {

    const { status } = props

    const { processing, post } = useForm()
      
    const handleSubmit = (event) => {
        event.preventDefault()
    
        post(route('verification.send'))
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
                                        <h2 className="text-uppercase text-center my-5">Verify Email</h2>
                                        <p class="text-muted">Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another.</p>
                                    </div>

                                    {
                                        status == "verification-link-sent" && (
                                            <div class="alert alert-success alert-dismissible fade show" role="alert">
                                                A new verification link has been sent to the email address you provided during registration.

                                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                        )
                                    }

                                    <form onSubmit={handleSubmit}>

                                        <div class="d-flex justify-content-center">
                                            <button type="submit" class="btn btn-success btn-block btn-lg gradient-custom-4 text-body text-uppercase" disabled={processing}>Resend Verification Email</button>
                                        </div>

                                        <div class="mt-2 d-flex justify-content-center">
                                            <Link href={route('logout')} method="post" as="button" class="btn btn-secondary text-right text-muted mt-2">Log Out</Link>
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

export default VerifyEmail