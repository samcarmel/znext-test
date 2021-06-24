import {
  AppBar,
  IconButton,
  Switch,
  Toolbar,
  Typography,
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { makeStyles } from '@material-ui/core/styles'
import { RootState } from '../../redux/rootReducer'
import { useDispatch, useSelector } from 'react-redux'
import { setDarkMode } from '../../redux/app/appReducer'

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    marginBottom: 8,
  },
  title: {
    flexGrow: 1,
  },
}))

interface HeaderProps {
  pageName: string
}

export const Header = ({ pageName }: HeaderProps) => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const { darkMode } = useSelector((state: RootState) => state.app)
  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar variant="dense">
        <Typography variant="h4" className={classes.title}>
          {pageName}
        </Typography>
        <Switch
          checked={darkMode === 'yes'}
          onChange={() => {
            localStorage.setItem(
              'znext:darkMode',
              darkMode === 'yes' ? 'no' : 'yes'
            )
            dispatch(setDarkMode(darkMode === 'yes' ? 'no' : 'yes'))
          }}></Switch>
        <IconButton aria-label="menu">
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}
