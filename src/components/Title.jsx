import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { inputText } from '../redux/actions'

export default function Title() {

  const text = useSelector(state => {
    const { inputReducer } = state
    return inputReducer.text
  })
  const dispatch = useDispatch()

  const handleChange = (e) => {
    dispatch(inputText(e.target.value))
  }

  return (
    <div className='card-title'>
      <div className='card-title-toop'>
        <input type='type' onChange={handleChange} />
      </div>
      <p>{text}</p>
    </div>
  )
}