import './OverlayContainer.css'

interface OverlayContainerProps {
  show: boolean
  changeShow: () => void
  children: React.ReactNode
  justify?:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | 'initial'
    | 'inherit'
  align?: 'center' | 'flex-start' | 'flex-end' | 'baseline' | 'initial' | 'inherit'
}

function OverlayContainer({
  show,
  changeShow,
  children,
  justify = 'center',
  align = 'center',
}: OverlayContainerProps): JSX.Element | null {
  const styles = {
    justifyContent: justify,
    alignItems: align,
  }

  function preventProgagation(event: any): void {
    event.stopPropagation()
  }

  if (!show) {
    document.body.style.maxHeight = 'initial'
    document.body.style.overflow = 'initial'
    return null
  }

  document.body.style.maxHeight = '100vh'
  document.body.style.overflow = 'hidden'
  return (
    <div style={styles} onClick={changeShow} className='user_form_overlay'>
      <div onClick={preventProgagation} className='user_form_container'>
        {children}
      </div>
    </div>
  )
}

export default OverlayContainer
