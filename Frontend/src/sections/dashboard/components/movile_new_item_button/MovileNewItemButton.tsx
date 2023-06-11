import './MovileNewItemButton.css'

function MovileNewItemButton(): JSX.Element {
  return (
    <>
      <button id='dashboard_aside__button--movile' className='dashboard_aside__button dashboard_aside__button--movile'>
        <img
          className='dashboard_aside__button__icon dashboard_aside__button__icon--movile'
          src='./imgs/plus_icon.svg'
          alt=''
        />
      </button>
    </>
  )
}

export default MovileNewItemButton
