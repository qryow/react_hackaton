import React from 'react'
import { useSelector } from 'react-redux'

const Profile = () => {
  const activeProfile = useSelector(state => state.user.activeProfile);

  console.log('Active Profile:', activeProfile);

  return (
    <div>Profile</div>
  )
}

export default Profile