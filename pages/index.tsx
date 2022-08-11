import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <section>
      <div className='flex text-white'>
        <Head>
          <title>About</title>
          <meta property='og:title' content="Northern Stars Profile" />
          <meta property='og:url' content="https://northernstar.vercel.app/" />
          <meta property='og:type' content="article" /> 
          <meta name='description' content='Hello, I&apos;m a random dev, music producer living in Kerala. I prefer NextJS for my projects!' />
          <meta property='og:image' content='/public/Porter Robinson & Kero Kero Bonito - _Unreleased 2019 Demo_ (Fan-Made Cover) 0-3 screenshot.png'/>
          <meta property='og:description' content="Hello, I&apos;m a random dev, music producer living in Kerala. I prefer NextJS for my projects!" />
          <meta property='twitter:card' content='summary' />
          <meta property='twitter:site' content='@NorthernStare' />
          <meta property='twitter:title' content='About' />
          <meta property='twitter:description' content='Northern Stars Personal Website' />
          <meta property='twitter:image' content='/public/Porter Robinson & Kero Kero Bonito - _Unreleased 2019 Demo_ (Fan-Made Cover) 0-3 screenshot.png'/>
          <meta property='twitter:url' content='https://northernstar.vercel.app' />
        </Head>
        <article>
          <div className='absolute bottom-0 left-0'>
            <div
              className="p-4 border rounded text-amber-700 bg-amber-50 border-amber-900/10"
              role="alert"
            >
              <strong className="text-sm font-medium"> Website Still Under Construction! </strong>

              <p className="hidden md:mt-1 2xl:text-xs 2xl:block">
                This Website is still under construction, will have heavy updates in the near future. Thanks!
              </p>
            </div>
          </div>
          <h1 className='flex justify-center text-4xl text-center w-screen bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple to-pink-900'>
            About
          </h1>
          <h1 className='flex justify-center'>
            <a className='p-2 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple to-pink-900'>About</a>
            <Link href={'/tech'} className="">
              <a className='p-2 underline font-bold'>Tech</a>
            </Link>
          </h1>
          <p className='flex flex-col justify-center items-center h-screen'>
            Hello, I&apos;m a random dev, music producer living in Kerala. I prefer NextJS for my projects!

          </p>
        </article>
      </div>
    </section>

  )
}

export default Home
