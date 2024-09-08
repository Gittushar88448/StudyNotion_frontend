import React from 'react'
import UpdateProfile from './Settings/UpdateProfile'
import ProfileInformation from './Settings/ProfileInformation'
import ChangePassword from './Settings/ChangePassword'
import DeleteUser from './Settings/DeleteUser'

const Setting = () => {
  return (
    <>
      <h1 className='mb-14 text-3xl font-medium text-richblack-5'>
        Edit Profile
      </h1>

      {/* section 1 */}
      <UpdateProfile/>

      {/* section 2 */}
      <ProfileInformation/>

      {/* section 3 */}
      <ChangePassword/>

      {/* section 4 */}
      <DeleteUser/>
    </>
  )
}

export default Setting