import React from "react"
import { Link } from "@inertiajs/inertia-react"

const Sidebar = () => {
    return (
        <nav className="navbar navbar-vertical fixed-left navbar-expand-md navbar-light bg-white" id="sidenav-main">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#sidenav-collapse-main" aria-controls="sidenav-main" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <Link className="navbar-brand pt-0" href="{{ route('home') }}">
                    <img src="/assets/img/brand/logo.png" className="navbar-brand-img" alt="..." />
                </Link>
                <ul className="nav align-items-center d-md-none">
                    <li className="nav-item dropdown">
                        <Link className="nav-link" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <div className="media align-items-center">
                                <span className="avatar avatar-sm rounded-circle">
                                <img alt="Image placeholder" src="/assets/img/theme/team-4-800x800.jpg" />
                                </span>
                            </div>
                        </Link>
                        <div className="dropdown-menu dropdown-menu-arrow dropdown-menu-right">
                            <div className=" dropdown-header noti-title">
                                <h6 className="text-overflow m-0">Welcome!</h6>
                            </div>
                            <Link href="{{ route('profile.edit') }}" className="dropdown-item">
                                <i className="ni ni-single-02"></i>
                                <span>My profile</span>
                            </Link>
                            <Link href="#" className="dropdown-item">
                                <i className="ni ni-settings-gear-65"></i>
                                <span>Settings</span>
                            </Link>
                            <Link href="#" className="dropdown-item">
                                <i className="ni ni-calendar-grid-58"></i>
                                <span>Activity</span>
                            </Link>
                            <Link href="#" className="dropdown-item">
                                <i className="ni ni-support-16"></i>
                                <span>Support</span>
                            </Link>
                            <div className="dropdown-divider"></div>
                            <Link href="{{ route('logout') }}" className="dropdown-item">
                                <i className="ni ni-user-run"></i>
                                <span>Logout</span>
                            </Link>
                        </div>
                    </li>
                </ul>
                <div className="collapse navbar-collapse" id="sidenav-collapse-main">
                    <div className="navbar-collapse-header d-md-none">
                        <div className="row">
                            <div className="col-6 collapse-brand">
                                <Link>
                                    <img src="/assets/img/brand/blue.png" />
                                </Link>
                            </div>
                            <div className="col-6 collapse-close">
                                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#sidenav-collapse-main" aria-controls="sidenav-main" aria-expanded="false" aria-label="Toggle sidenav">
                                    <span></span>
                                    <span></span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <form className="mt-4 mb-3 d-md-none">
                        <div className="input-group input-group-rounded input-group-merge">
                            <input type="search" className="form-control form-control-rounded form-control-prepended" placeholder="" aria-label="Search" />
                            <div className="input-group-prepend">
                                <div className="input-group-text">
                                    <span className="fa fa-search"></span>
                                </div>
                            </div>
                        </div>
                    </form>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" href={route("dashboard")}>
                                <i className="fas fa-tv text-danger"></i>Dashboard
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href={route("customer.index")}>
                                <i className="fas fa-address-book text-danger"></i>Customers
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href={route("item.index")}>
                                <i className="fas fa-tshirt text-danger"></i>Items
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href={route("warehouse.index")}>
                            <i className="fas fa-warehouse text-danger"></i>Warehouses
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href={route("vendor.index")}>
                                <i className="fas fa-sitemap text-danger"></i>Vendors
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href={route("sale-order.index")}>
                                <i className="fas fa-cart-plus text-danger"></i>Sale Order
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href={route("purchase-order.index")}>
                                <i className="fas fa-cart-plus text-danger"></i>Purchase Order
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href={route("delivery-station.index")}>
                                <i className="fas fa-road text-danger"></i>Delivery Station
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href={route("delivery-partner.index")}>
                                <i className="fas fa-shipping-fast text-danger"></i>Delivery Partner
                            </Link>
                        </li>
                        
                        {/* <li className="nav-item">
                            <Link className="nav-link active" href="#navbar-examples" data-toggle="collapse" role="button" aria-expanded="true" aria-controls="navbar-examples">
                                <i className="fab fa-laravel" style={{color: "#f4645f"}}></i>
                                <span className="nav-link-text" style={{color: "#f4645f"}}>Laravel Examples</span>
                            </Link>

                            <div className="collapse show" id="navbar-examples">
                                <ul className="nav nav-sm flex-column">
                                    <li className="nav-item">
                                        <Link className="nav-link" href="{{ route('profile.edit') }}">
                                            User profile
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" href="{{ route('user.index') }}">
                                            User Management
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li> */}
                        </ul>
                </div>
            </div>
        </nav>
    )
}

export default Sidebar