import React from 'react';
import './Main.css';
import { Sidebar } from '../Sidebar/Sidebar';
import { Nav } from '../Nav/Nav';
import { Message } from '../Messages/Message';
import Story from '../Story/Story';
import { Post } from '../Post/Post';
import News from '../Newsfeed/News';
import Request from '../requests/Request';
import { useSelector } from 'react-redux';
import Notifications from '../Notifications/Notification';
import useLocalStorage from 'use-local-storage'

export const Main = () => {
  const {isOpen} =useSelector((state) => state.message)
  const {isOpened} =useSelector((state)=> state.noti)
  const {isShow} = useSelector((state)=> state.req)

  return (
    <div className='main'>
      <Nav/>
          <div className='between'>
              <div className='main-row'>
                  <Sidebar/>
                        <div className='middle'>
                        <Story/>
                        <Post/>
                        <News/>
                        </div>
                  {isOpen && <Message/>}
                  {isOpened && <Notifications/>}
              </div>
             {isShow && <Request/>}
          </div>
    </div>
  )
}
