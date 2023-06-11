import * as React from 'react'
import Box from '@mui/material/Box'
import Popper from '@mui/material/Popper'
import Fade from '@mui/material/Fade'
import ClickAwayListener from '@mui/base/ClickAwayListener'
import './PopperMenu.css'

interface TransitionsPopperProps {
  button: JSX.Element
  menu: JSX.Element
  position?:
    | 'top-start'
    | 'top'
    | 'top-end'
    | 'left-start'
    | 'left'
    | 'left-end'
    | 'right-start'
    | 'right'
    | 'right-end'
    | 'bottom-start'
    | 'bottom'
    | 'bottom-end'
}

export default function PopperMenu({ button, menu, position = 'bottom-start' }: TransitionsPopperProps): JSX.Element {
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
      <div className='popper-container'>
        <div className='popper-menu__botton-container' onClick={handleClick}>
          {button}
        </div>

        <Popper id={id} open={open} anchorEl={anchorEl} transition placement={position}>
          {({ TransitionProps }) => (
            <Fade {...TransitionProps} timeout={350}>
              <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>{menu}</Box>
            </Fade>
          )}
        </Popper>
      </div>
    </ClickAwayListener>
  )
}
