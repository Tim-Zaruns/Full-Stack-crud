import { type FC } from 'react'

type Props = {
  name: string
  label: string
  type: string
  register: any
}

const FormInput: FC<Props> = ({ label, name, type, register }): any => {
  return (
    <>
      <label htmlFor={name} className="block mb-2 font-medium leading-4 tracking-wider">{label}</label>
      <input
        className="px-3 py-3 text-slate-600 bg-white bg-white border border-[1px] border-gray-300 rounded text-sm shadow outline-none focus:outline-none focus:ring w-full"
        id={name}
        name={name}
        type={type}
        {...register(name)}
      />

    </>
  )
}

export default FormInput
