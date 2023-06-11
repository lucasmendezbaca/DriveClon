import './Section.css'
import { useFiles } from '../../../../../Files/contexts/FilesContext'
import { useItems } from '../../../main/context/ItemContext'

interface SectionProps {
  handleSetActive: (name: string) => void
  name: string
  iconUrl: string
  active: string
}

function Section({ name, iconUrl, active, handleSetActive }: SectionProps): JSX.Element {
  const { setShowRecentFiles, setShowHighlightedFiles } = useFiles()
  const { setShowFilterItems } = useItems()

  function isActive(): boolean {
    return active === name
  }

  function handleOnClick(): void {
    if (name === 'Reciente') {
      setShowHighlightedFiles(false)
      setShowFilterItems(false)
      setShowRecentFiles(true)
    } else if (name === 'Mi unidad') {
      setShowRecentFiles(false)
      setShowFilterItems(false)
      setShowHighlightedFiles(false)
    } else if (name === 'Destacados') {
      setShowRecentFiles(false)
      setShowFilterItems(false)
      setShowHighlightedFiles(true)
    }
    handleSetActive(name)
  }

  return (
    <>
      <div
        onClick={handleOnClick}
        className={`dashboard_aside__sections__section ${
          isActive() ? 'dashboard_aside__sections__section--active' : ''
        }`}
      >
        <img className='dashboard_aside__sections__section__icon' src={iconUrl} alt='' />
        <span className='dashboard_aside__section__name'>{name}</span>
      </div>
    </>
  )
}

export default Section
