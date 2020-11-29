import Head from 'next/head'
// import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>333 | Threefold three</title>
        <meta name="description" content="Artistic expression through music, then writing and conceptualizing life from a multiverse perspective." />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://threefoldthree.com" />
      </Head>

      <main>
        {/* <Header title="Welcome to my app!" /> */}
        <div style={{ textAlign: 'center' }}>
          <img src="/img/333.jpg" alt="333" style={{ width: '40vw' }} />
        </div>
      </main>

      <Footer />
    </div>
  )
}
