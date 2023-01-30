import React, { type FC } from 'react'

type ButtonProps = {
  name: string
  onClick?: () => void
  type: 'submit' | 'button'
}

const Button: FC<ButtonProps> = ({ onClick, name, type = 'button' }) => (
  <div>
    <button type={type} onClick={onClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full tracking-wider">
      {name}
    </button>
  </div>
)

export default Button
