import { Link } from 'react-router-dom'
import { type FC } from 'react'

type Props = {
  url: string
  label: string
}

const Navigate: FC<Props> = ({ url, label }) => {
  return (
    <>
      <Link to={url} className="bg-green-200 py-2 px-4 rounded-full transition-color hover:bg-green-300 inline-block">
        {label}
      </Link>
    </>
  )
}

export default Navigate
