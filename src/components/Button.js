import React from 'react'

const Button = (props) => {
  return (
    <div class="flex space-x-2 ">
      <button type={props.type} class="inline-block px-6 py-2.5 bg-[#e9aa22]
       text-white font-medium text-xs leading-tight uppercase 
       shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700
        focus:shadow-lg focus:outline-none
        focus:ring-0 active:bg-blue-800 
        active:shadow-lg transition duration-150 ease-in-out">
        {props.children}</button>
    </div>
  )
}

export default Button