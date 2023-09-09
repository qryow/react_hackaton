import React, { useState } from 'react'
import { useSelector } from 'react-redux';

const ProfileModal = () => {
  const activeProfile = useSelector(state => state.profiles.activeProfile);

  const [profile, setProfile] = useState(activeProfile || { firstName: '', secondName: '', avatar: ''});


  return (
    <div>ProfileModal</div>
  )
}

export default ProfileModal