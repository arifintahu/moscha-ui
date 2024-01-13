import { Theme, extendTheme, type ThemeConfig } from '@chakra-ui/react'
import { colors } from './colors'
import { components } from './components'

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const theme: Theme = extendTheme({
  config,
  fonts: {
    heading: 'Inter, sans-serif',
    body: 'Inter, sans-serif',
    mono: 'IBM Plex Mono, monospace',
  },
  styles: {
    global: {
      'html, body': {
        background: '#171923',
        color: '#F7FAFC',
        padding: 0,
        margin: 0,
        fontFeatureSettings: `'zero' 1`,
        scrollBehavior: 'smooth',
      },
      body: {
        colorScheme: 'dark',
      },
      '::selection': {
        backgroundColor: '#90cdf4',
        color: '#fefefe',
      },
      '::-moz-selection': {
        backgroundColor: '#90cdf4',
        color: '#fefefe',
      },
    },
  },
  colors,
  components,
}) as Theme

export default theme
