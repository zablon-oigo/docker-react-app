import React from 'react'

function Button(props) {
  return (
    <div>
        <button className="bg-amber-500 hover:bg-amber-400 text-xl text-white  py-3 px-6 rounded">
            {props.title}
        </button>
    </div>
  )
}

export default Button