import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function NotFound(): JSX.Element {
  const navigate = useNavigate()
  useEffect(() => {
    navigate('/')
  }, [])

  return (
    <div>
      <h1>404</h1>
      <h2>Page Not Found</h2>
    </div>
  )
}

export default NotFound
