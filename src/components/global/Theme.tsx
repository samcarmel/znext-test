import { RootState } from '../../redux/rootReducer'
import { useDispatch, useSelector } from 'react-redux'
import { DarkTheme, LightTheme } from '../../styles/theme'
import { ThemeProvider } from '@material-ui/core/styles'
import { Box } from '@material-ui/core'
import { setDarkMode } from '../../redux/app/appReducer'
import { useEffect } from 'react'

interface ThemeProps {
  children: React.ReactNode
}

export const Theme = ({ children }: ThemeProps) => {
  const dispatch = useDispatch()
  const { darkMode } = useSelector((state: RootState) => state.app)

  const checkDarkMode = () => {
    // read the znext:darkMode flag from local storage
    const localStorageDarkMode = localStorage['znext:darkMode']
      ? localStorage['znext:darkMode']
      : 'no'
    localStorage['znext:darkMode'] = localStorageDarkMode
    dispatch(setDarkMode(localStorageDarkMode))
  }

  useEffect(checkDarkMode, [])

  return (
    <ThemeProvider theme={darkMode === 'no' ? DarkTheme : LightTheme}>
      <Box style={{ flex: '1 0 auto' }}>{children}</Box>
    </ThemeProvider>
  )
}
