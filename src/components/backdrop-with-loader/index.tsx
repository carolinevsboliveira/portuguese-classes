import React from 'react'
import { Backdrop, CircularProgress } from '@mui/material'

const BackdropWithLoader = ({ isLoading }: { isLoading: boolean }) => {
  return (
    <React.Fragment>
      <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={isLoading}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </React.Fragment>
  )
}

export default BackdropWithLoader
