import React from "react"
import { Link } from "@inertiajs/inertia-react"

const Navbar = () => {
    return (
        <nav className="navbar navbar-top navbar-expand-md navbar-dark" id="navbar-main" style={{position: "sticky", backgroundColor: "#00000054", backdropFilter: "blur(11px)"}}>
            <div className="container-fluid">
                <a className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block" href="{{ route('home') }}">Dashboard</a>
                {/* <form className="navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto">
                    <div className="form-group mb-0">
                        <div className="input-group input-group-alternative">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i className="fas fa-search"></i></span>
                            </div>
                            <input className="form-control" placeholder="Search" type="text" />
                        </div>
                    </div>
                </form> */}
                <ul className="navbar-nav align-items-center d-none d-md-flex">
                    <li className="nav-item dropdown">
                        <a className="nav-link pr-0" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <div className="media align-items-center">
                                <span className="avatar avatar-sm rounded-circle">
                                    <img alt="Image placeholder" src="/assets/img/theme/team-4-800x800.jpg" />
                                </span>
                                <div className="media-body ml-2 d-none d-lg-block">
                                    <span className="mb-0 text-sm  font-weight-bold">Lona Dana</span>
                                </div>
                            </div>
                        </a>
                        <div className="dropdown-menu dropdown-menu-arrow dropdown-menu-right">
                            <div className=" dropdown-header noti-title">
                                <h6 className="text-overflow m-0">Welcome!</h6>
                            </div>
                            <Link href={route('profile.show')} className="dropdown-item">
                                <i className="ni ni-single-02"></i>
                                <span>My profile</span>
                            </Link>
                            <div className="dropdown-divider"></div>
                            <Link href="/logout" method="post" as="button" type="button" className="dropdown-item">
                                <i className="ni ni-user-run"></i>
                                <span>Log out</span>
                            </Link>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar