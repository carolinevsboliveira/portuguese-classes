import { Main } from 'components'
import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>NextJs Boilerplate</title>
        <meta name="description" content="NextJs Boilerplate created to be an template" />
        <link rel="icon" href="/img/icon-128.png" />
      </Head>

      <main>
        <Main />
      </main>
    </div>
  )
}
