import Spinner from '../spinner/Spinner'

interface SubmitButtonProps {
  textDefault: string
  textLoading: string
  loading: boolean
  onClick?: () => void
}

function SubmitButton({ textDefault, textLoading, loading, onClick }: SubmitButtonProps): JSX.Element {
  if (loading) {
    return (
      <button
        onClick={onClick}
        className='account-info__sections__section__button account-info__sections__section__button--loading'
        disabled={loading}
      >
        <Spinner />
        {textLoading}
      </button>
    )
  }

  return (
    <button onClick={onClick} className='account-info__sections__section__button' disabled={loading}>
      {textDefault}
    </button>
  )
}

export default SubmitButton
