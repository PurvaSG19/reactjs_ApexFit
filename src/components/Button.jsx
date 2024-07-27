import React from 'react'

export default function Button(props) {
    const {content,func} = props
  return (
    <button onClick = {func} className='px-8 py-4 rounded-md mx-auto border-blue-400 border-[2px] border-solid blueShadow duration-200'><p>{content}</p></button>
  )
}
