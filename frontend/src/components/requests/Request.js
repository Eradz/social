import React from 'react'
import { GiCancel } from 'react-icons/gi'
import { closeRequests } from '../redux/requestSlice'
import { useDispatch } from 'react-redux'
import './requests.css'
const Request = () => {
    const dispatch = useDispatch()

  return (
    <div>
        <div className='reqs'>
            <div className='reques-row'>
                <div className='req-top'>
                    <h3>Friend Requests</h3>
                      <GiCancel onClick={() => {dispatch(closeRequests())}} size={25}/>
                      </div>
                <div className='req-info'>
                        <div className='img img12'></div>
                        <div><h4>Lionel Messi</h4> <p>8 mutual friends</p></div>
                </div>
                <div className='btn-row'>
                    <button className='btn1'>Accept</button>
                    <button className='btn1 btnn'>Reject</button>
                </div>
            </div>
            <div className='reques-row'>
                <div className='req-info'>
                        <div className='img img13'></div>
                        <div><h4>Jadon Sancho</h4> <p>9 mutual friends</p></div>
                </div>
                <div className='btn-row'>
                    <button className='btn1'>Accept</button>
                    <button className='btn1 btnn'>Reject</button>
                </div>
            </div>
            <div className='reques-row'>
                <div className='req-info'>
                        <div className='img img14'></div>
                        <div><h4>Mc Tominay</h4> <p>2 mutual friends</p></div>
                </div>
                <div className='btn-row'>
                    <button className='btn1'>Accept</button>
                    <button className='btn1 btnn'>Reject</button>
                </div>
            </div>
            <div className='reques-row'>
                <div className='req-info'>
                        <div className='img img15'></div>
                        <div><h4>De gea</h4> <p>4 mutual friends</p></div>
                </div>
                <div className='btn-row'>
                    <button className='btn1'>Accept</button>
                    <button className='btn1 btnn'>Reject</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Request