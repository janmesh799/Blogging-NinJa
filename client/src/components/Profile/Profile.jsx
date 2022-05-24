import React from 'react'

const Profile = (props) => {
    const {_id, name, email} = props.user;
  return (
    <div>
        <h1>{name}</h1>
        <h2>{email}</h2>
        <h5>{_id}</h5>
    </div>
  )
}

export default Profile