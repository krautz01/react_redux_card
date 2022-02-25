import React from 'react'

export default function Comments(props) {
  return (
    <div className='card-comments'>
        <form className='comments-item-create'>
            <input type='text'/>
            <input type='submit' hidden/>
        </form>
        <SingleComment/>
    </div>
  )
}
