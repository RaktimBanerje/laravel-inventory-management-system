import React from 'react'
import AppLayout from "../../Layouts/AppLayout"
import UpdatePasswordForm from "./Partials/UpdatePasswordForm"
import UpdateProfileInformationForm from "./Partials/UpdateProfileInformationForm"
import DeleteUserForm from './Partials/DeleteUserForm'


const Show = (props) => {
  return (
    <AppLayout>
      <div class="container">
          <h3>Profile</h3>
          <div class="mt-4">
              <UpdateProfileInformationForm {...props} />
              <UpdatePasswordForm {...props} />
              <DeleteUserForm {...props} />
          </div>
      </div>
    </AppLayout>
  )
}

export default Show