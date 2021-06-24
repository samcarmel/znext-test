import { createMuiTheme } from '@material-ui/core/styles'

export const LightTheme = createMuiTheme({
  palette: {
    primary: {
      light: '#FFFFFF',
      main: '#DDDCDB',
      dark: '#777777',
    },
    secondary: {
      light: '#E0ECF7',
      main: '#A3C3EB',
      dark: '#5999E6',
    },
    error: {
      light: '#F4CFD1',
      main: '#E38689',
      dark: '#D35058',
    },
    warning: {
      light: '#FBEBD7',
      main: '#FDCD92',
      dark: '#FBB464',
    },
    info: {
      light: '#E0ECF7',
      main: '#A3C3EB',
      dark: '#5999E6',
    },
    success: {
      light: '#DDE9DF',
      main: '#B5D6BA',
      dark: '#86C58D',
    },
    text: {
      primary: '#000000',
      secondary: '#343434',
      disabled: '#C2C3C2',
    },
    background: {
      paper: '#fff',
      default: '#fafafa',
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
})

export const DarkTheme = createMuiTheme({
  palette: {
    primary: {
      light: '#5B5B5B',
      main: '#2A2A2A',
      dark: '#000000',
    },
    secondary: {
      light: '#1C4FA7',
      main: '#26417D',
      dark: '#0A2E4F',
    },
    error: {
      light: '#F7142D',
      main: '#8D0012',
      dark: '#63000C',
    },
    warning: {
      light: '#E59B3E',
      main: '#F6651F',
      dark: '#973C12',
    },
    info: {
      light: '#1C4FA7',
      main: '#26417D',
      dark: '#0A2E4F',
    },
    success: {
      light: '#6FA030',
      main: '#269530',
      dark: '#344717',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#E6E6E6',
      disabled: '#777777',
    },
    background: {
      paper: '#000000',
      default: '#000000',
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
})
