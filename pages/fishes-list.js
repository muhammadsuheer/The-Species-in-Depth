import Head from 'next/head'
import FishesCard from '../components/species/fishCards'
export default function Fishes() {
  return (
    <div >
      <Head>
        <title>Fishes</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

     <FishesCard/>
    </div>
  )
}