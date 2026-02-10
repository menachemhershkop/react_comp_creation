import React from 'react'
import Button from './Buttuon'
import '../css/ProfileCard.css'
function ProfileCard() {
  return (
    <div id='ProfileCard'>
      <img src="https://chabadpedia.co.il/images/5/56/770_%D7%9B%D7%A4%D7%97.jpg" alt="" />
      <h3>770</h3>
      <p>bish chyeno</p>
        <Button type = "Friend" ></Button>
    </div>
  )
}

export default ProfileCard
