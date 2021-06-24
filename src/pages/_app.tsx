import '../styles/globals.css'
import Head from 'next/head'
import { AppProps } from 'next/app'
import { addPersistGate } from '../utils/app/setup'
import React from 'react'
import { store } from '../redux/store'
import { Provider } from 'react-redux'

function MyApp({ Component, pageProps }: AppProps) {
  let component = <Component {...pageProps} />

  if (process.env.NEXT_PUBLIC_USE_REDUX_PERSIST === 'yes') {
    component = addPersistGate(component)
  }

  return (
    <React.Fragment>
      <Head>
        <title>Test Project</title>
      </Head>
      <Provider store={store}>{component}</Provider>
    </React.Fragment>
  )
}
export default MyApp
