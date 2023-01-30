import { useForm } from 'react-hook-form'
import FormInput from '../components/FormInput'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import useAxios from '../hooks/useAxios'
import { useEffect, useState } from 'react'
import Button from '../components/Button'
import Navigate from '../components/Navigate'

const schema = yup.object({
  name: yup.string().required(),
  email: yup.string().required(),
  password: yup.string().required().min(8),
  age: yup.number().typeError('Age must be a number').required().positive()
}).required()

type FormInputs = {
  email: string
  name: string
  password: string
  age: number
}

const AddUser = (): JSX.Element => {
  const [formData, setFormData] = useState<FormInputs>()

  const { handleSubmit, register, reset, formState: { errors } } = useForm<FormInputs>({
    resolver: yupResolver(schema)
  })

  const { response, sendData, error } = useAxios({
    method: 'post',
    url: '/users',
    data: formData
  })

  // if form success
  useEffect(() => {
    if (response) {
      alert(response.data.message)
      reset()
    }
  }, [response])

  const onSubmit = ({ name, email, password, age }: FormInputs) => {
    setFormData({ name, email, password, age })
  }

  useEffect(() => {
    if (formData) {
      sendData()
    }
  }, [formData])

  return (
    <div className="bg-white p-5 rounded-xl shadow-xl">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <FormInput name="name" label="name" type="text" register={register} />
        <p>{errors.name?.message}</p>
        <FormInput name="email" label="email" type="text" register={register} />
        <p>{errors.email?.message}</p>
        <FormInput name="password" label="password" type="password" register={register} />
        <p>{errors.password?.message}</p>
        <FormInput name="age" label="age" type="number" register={register} />
        <p>{errors.age?.message}</p>
        <div className="flex gap-2">
          <Button name='submit' type="submit" />
          <Navigate url="/" label='back' />
        </div>
      </form>
      <div className="py-4">
        {error?.response.data.errors.map((error: any) => (
          <div key={error.msg} className="text-red-400">
            {error.msg}
          </div>
        ))
        }
      </div>
    </div>
  )
}

export default AddUser
