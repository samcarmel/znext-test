import { useRouter } from 'next/dist/client/router'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addPathToHistory } from '../../redux/app/appReducer'
import { RootState } from '../../redux/rootReducer'
import { Theme } from './Theme'
import { Header } from './Header'
import { Container } from '@material-ui/core'
import { NextSeo } from 'next-seo'

interface PageProps {
  pageName: string
  body: React.ReactElement
}

export const Page = ({ pageName, body }: PageProps) => {
  const state = useSelector((state: RootState) => state)
  const { history } = state.app
  const router = useRouter()
  const dispatch = useDispatch()

  useEffect(() => {
    const lastPath = history[history.length - 1]
    if (!lastPath || lastPath !== router.asPath) {
      dispatch(addPathToHistory(router.asPath))
    }
  }, [history, dispatch, router.asPath])

  return (
    <>
      <NextSeo noindex={true} />
      <Theme>
        <Header pageName={pageName} />
        <Container maxWidth="lg">{body}</Container>
      </Theme>
    </>
  )
}
