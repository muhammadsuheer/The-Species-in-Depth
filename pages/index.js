import Head from 'next/head'
import Banner from '../components/banner/banner'
export default function Home() {
  return (
    <div>
      <Head>
        <title>Deep Into the Ocean</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <Banner/>

    </div>
  )
}
