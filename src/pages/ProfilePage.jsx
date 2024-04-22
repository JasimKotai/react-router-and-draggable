import React from 'react'
import { useParams } from 'react-router-dom'

function ProfilePage() {
    const params = useParams()
    console.log(params);
  return (
    <div>ProfilePage {params.profileId}</div>
  )
}

export default ProfilePage