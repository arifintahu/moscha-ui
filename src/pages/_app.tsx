import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import theme from '@/theme'
import { ReactQueryProvider } from '@/react-query-provider'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ReactQueryProvider>
      <ReactQueryDevtools initialIsOpen={false} />
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </ReactQueryProvider>
  )
}

export default MyApp
