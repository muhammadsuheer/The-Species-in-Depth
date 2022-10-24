import Head from 'next/head'
import Quiz from '../components/quiz/Quiz'
export default function TheQuiz() {
  return (
    <div>
      <Head>
        <title>Sea ------Quiz</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Quiz
      />
    </div>
  )
}
