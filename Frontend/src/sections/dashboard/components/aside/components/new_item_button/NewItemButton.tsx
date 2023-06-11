import './NewItemButton.css'

function NewItemButton(): JSX.Element {
  return (
    <>
      <button id='dashboard_aside__button' className='dashboard_aside__button'>
        <img className='dashboard_aside__button__icon' src='./imgs/plus_icon.svg' alt='' />
        Nuevo
      </button>
    </>
  )
}

export default NewItemButton
