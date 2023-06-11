import * as React from 'react'
import Box from '@mui/material/Box'
import Popper from '@mui/material/Popper'
import Fade from '@mui/material/Fade'
import ClickAwayListener from '@mui/base/ClickAwayListener'
import NewItemMenu from '../new_item_menu/NewItemMenu'

export default function TransitionsPopper(): JSX.Element {
  const [open, setOpen] = React.useState(false)
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = (event: any): any => {
    setAnchorEl(event.currentTarget)
    setOpen((previousOpen) => !previousOpen)
  }

  const handleClickAway = (): any => {
    setOpen(false)
  }

  const canBeOpen = open && Boolean(anchorEl)
  const id = canBeOpen ? 'transition-popper' : undefined

  return (
    <ClickAwayListener mouseEvent='onMouseDown' touchEvent='onTouchStart' onClickAway={handleClickAway}>
      <div>
        <button
          // aria-describedby={id}
          onClick={handleClick}
          id='dashboard_aside__button'
          className='dashboard_aside__button'
        >
          <img className='dashboard_aside__button__icon' src='./imgs/plus_icon.svg' alt='' />
          Nuevo
        </button>
        <Popper id={id} open={open} anchorEl={anchorEl} transition placement='bottom-start'>
          {({ TransitionProps }) => (
            <Fade {...TransitionProps} timeout={350}>
              <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
                <NewItemMenu changeShow={handleClickAway} />
              </Box>
            </Fade>
          )}
        </Popper>
      </div>
    </ClickAwayListener>
  )
}
