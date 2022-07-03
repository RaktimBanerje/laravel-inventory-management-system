import React from "react"
import Navbar from "../Components/Navbar"
import Sidebar from "../Components/Sidebar"

const AppLayout = ({children}) => {
    return (
        <React.Fragment>
            <Sidebar />    
        
            <div className="main-content">
                <Navbar />
                <div className="container-fluid m-md-4">
                    {children}
                </div>
            </div>
        </React.Fragment>
    )
}

export default AppLayout
