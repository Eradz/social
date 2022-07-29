import React from 'react';
import './Post.css';

export const Post = () => {
  return (
    <div>
        <div className='post'>
            <div className='post-info'>
                <div className='img2'></div>
                <input type='search' placeholder="What's on your mind?" name='post'></input>
            </div>
            <button className='btn3'>Post</button>
        </div>
    </div>
  )
}
