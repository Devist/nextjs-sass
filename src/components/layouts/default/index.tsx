import Head from 'next/head'
import Link from 'next/link'

type Props = {
  children: React.ReactNode
}

export default function DefaultLayout({ children }: Props) {
  return (
    <>
      <Head>
        <title>TEST</title>
        <meta name="description" content="test" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ul>
        <li>
          <Link href="/">
            <div>마이홈</div>
          </Link>
        </li>
        <li>
          <Link href="/test">
            <div>테스트</div>
          </Link>
        </li>
      </ul>

      {/* <Header /> */}
      <main className="custom-container">{children}</main>
      {/* <Footer /> */}
    </>
  )
}
