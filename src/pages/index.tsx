import { Page } from '../components/global/Page'
import { HeaderCard } from '../components/HeaderCard'

export default function Home() {
  const body = (
    <HeaderCard image="https://via.placeholder.com/450" title="Hello World" />
  )

  return <Page pageName="Home" body={body} />
}
