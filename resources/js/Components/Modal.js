import React from 'react'

const Modal = ({id, children}) => {
        return (
        <div className="modal fade" id={id}>
            <div className="modal-dialog modal-lg modal-dialog-scrollable">
                <div className="modal-content">

                    <div className="modal-header">
                        {children[0] ? children[0] : children ? children : null }
                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                    </div>

                    <div className="modal-body">
                        {children[1]}
                    </div>

                    <div className="modal-footer">
                        {children[2]}
                    </div>

                </div>
            </div>
        </div>
  )
}

export default Modal