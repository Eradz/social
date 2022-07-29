import React from 'react';
import { GiCancel } from 'react-icons/gi'
import { useDispatch } from 'react-redux';
import { closeNotifications } from "../redux/notificationslice";
import './noti.css'

const Notifications = () => {
    const dispatch = useDispatch()
  return (
    <div className='notifications'>
        <div className='noti-row noti-btns'>
        <h2>Notifications</h2>
        <div className='notti' onClick={() => {dispatch(closeNotifications())}}>
        <GiCancel size={30}/>
        </div>
        </div>
       <div className='noti-row'>
        <div className='img img9'></div>
        <div className='noti-info'>
          <div className='noti'><h4>Sophy </h4> <p> accepted your friend request</p></div>
              <p>DAYS AGO</p>
        </div>
       </div>
       <div className='noti-row'>
        <div className='img img6'></div>
        <div className='noti-info'>
          <div className='noti'><h4>Edeh Johnpaul </h4> <p> commented on your post</p></div>
              <p>4 DAYS AGO</p>
        </div>
       </div>
       <div className='noti-row'>
        <div className='img img7'></div>
        <div className='noti-info'>
          <div className='noti'><h4>Zayne bot </h4> <p> and <b>980+ others </b>liked your post</p></div>
              <p>1 HOUR AGO</p>
        </div>
       </div>
       <div className='noti-row'>
        <div className='img img8'></div>
        <div className='noti-info'>
          <div className='noti'><h4>Zayne bot </h4> <p> commented on a post you are tagged in </p></div>
              <p>2 DAYS AGO</p>
        </div>
       </div>
       <div className='noti-row'>
        <div className='img img5'></div>
        <div className='noti-info'>
          <div className='noti'><h4>Zayne bot </h4> <p> liked your profile picture</p></div>
              <p>1 HOUR AGO</p>
        </div>
       </div>
       <div className='noti-row'>
        <div className='img img4'></div>
        <div className='noti-info'>
          <div className='noti'><h4>Zayne bot </h4> <p> and <b>80+ others</b> retweeted your post</p></div>
              <p>1 HOUR AGO</p>
        </div>
       </div>
    </div>
  )
}

export default Notifications