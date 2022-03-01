import React, { useState, useEffect } from 'react'

export default function SingleComment({ data }) {
  const [ commentText, setCommentText ] = useState('');
  const { text, id } = data;

  useEffect(() => {
    if (text) {
      setCommentText(text)
    }
  }, [text]);

  const handleInput = (e) => {
    setCommentText(e.target.value)
  }

  return (
    <form className='comments-item'>
      <div className='comment-item-delete'>&times;</div>
      <input type='text' value={commentText} onChange={handleInput}/>
      <input type='submit' hidden />
    </form>
  )
}
