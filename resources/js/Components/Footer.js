import React from "react"
import { Link } from "@inertiajs/inertia-react"

const Footer = () => {
    return (
        <div className="row align-items-center justify-content-xl-between">
            <div className="col-xl-6">
                <div className="copyright text-center text-xl-left text-muted">
                    &copy;  <a href="https://www.creative-tim.com" className="font-weight-bold ml-1" target="_blank">Creative Tim</a> &amp;
                    <a href="https://www.updivision.com" className="font-weight-bold ml-1" target="_blank">Updivision</a>
                </div>
            </div>
            <div className="col-xl-6">
                <ul className="nav nav-footer justify-content-center justify-content-xl-end">
                    <li className="nav-item">
                        <a href="https://www.creative-tim.com" className="nav-link" target="_blank">Creative Tim</a>
                    </li>
                    <li className="nav-item">
                        <a href="https://www.updivision.com" className="nav-link" target="_blank">Updivision</a>
                    </li>
                    <li className="nav-item">
                        <a href="https://www.creative-tim.com/presentation" className="nav-link" target="_blank">About Us</a>
                    </li>
                    <li className="nav-item">
                        <a href="http://blog.creative-tim.com" className="nav-link" target="_blank">Blog</a>
                    </li>
                    <li className="nav-item">
                        <a href="https://github.com/creativetimofficial/argon-dashboard/blob/master/LICENSE.md" className="nav-link" target="_blank">MIT License</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer