import React from 'react'
import Button from './Buttuon'
import '../css/ProfileCard.css'
function ProfileCard(props) {
  return (
    <div id='ProfileCard'>
      <div>
      <img src={props.img} alt="" />
      </div>
      <div id='info'>
      <h3>{props.name}</h3>
      <p>{props.des}</p>
      </div>
        <Button type = {props.type} ></Button>
    </div>
  )
}

export default ProfileCard
