import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div className='flex bg-black w-screen text-gray-400'>
      <Head>
        <title>About</title>
        <meta property='og:title' content="Northern Stars Profile" />
        <meta property='og:url' content="https://northernstar.vercel.app/" />
        <meta property='og:type' content="article" />
        <meta property='og:description' content="Hello, I&apos;m a studemt living in India. I prefer RedWoodJS for my projects!" />
        <meta property='twitter:card' content='summary' />
        <meta property='twitter:site' content='@NorthernStare' />
        <meta property='twitter:title' content='About' />
        <meta property='twitter:description' content='Northern Stars Personal Website' />
        <meta property='twitter:url' content='https://northernstar.vercel.app' />
      </Head>
      <article>
        <div className='absolute bottom-0 left-0'>
          <div
            className="p-4 border rounded text-amber-700 bg-amber-50 border-amber-900/10"
            role="alert"
          >
            <strong className="text-sm font-medium"> Website Still Under Construction! </strong>

            <p className="mt-1 text-xs">
              This Website is still under construction, will have heavy updates in the near future. Thanks!
            </p>
          </div>
        </div>
        <h1 className='flex justify-center text-4xl font-bold text-center w-screen'>
          About
        </h1>
        <h1 className='flex justify-center'>
          <a>About</a>
          <Link href={'/tech'} className="">
            <a className='ml-2 underline font-bold'>Tech</a>
          </Link>
        </h1>
        <p className='flex flex-col justify-center items-center h-screen'>
          Hello, I&apos;m a random dev, music producer living in Kerala. I prefer NextJS for my projects!

        </p>
      </article>
    </div>
  )
}

export default Home
