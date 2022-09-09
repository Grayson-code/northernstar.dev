import type { NextPage } from "next"
import Head from "next/head"

const Home: NextPage = () => {
  return (
    <div className="flex">
      <Head>
        <title>About</title>
        <meta property="og:title" content="Northern Stars Profile" />
        <meta property="og:url" content="https://northernstar.vercel.app/" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="/public/Porter Robinson & Kero Kero Bonito - _Unreleased 2019 Demo_ (Fan-Made Cover) 0-3 screenshot.png" />
        <meta property="og:description" content="Hello, I'm a random dev, music producer living in Kerala. I prefer NextJS for my projects!" />
        <link rel="icon" type="image/png" href="favicon.ico"></link>
        { /* <meta name="description" content="Hello, I'm a random dev, music producer living in Kerala. I prefer NextJS for my projects!"></meta>
          <meta name="twitter:card" content="summary"></meta>
          <meta name="twitter:site" content="@NorthernStare" ></meta>
          <meta name="twitter:title" content="About" ></meta>
          <meta name="twitter:description" content="Northern Stars Personal Website"></meta>
          <meta name="twitter:image" content="/public/Porter Robinson & Kero Kero Bonito - _Unreleased 2019 Demo_ (Fan-Made Cover) 0-3 screenshot.png" ></meta>
          <meta name="twitter:image:alt" content="a visualizer"></meta>
          <meta name="twitter:url" content="https://northernstar.vercel.app" ></meta> */ }
      </Head>
      <p className="justify-center align-center">
        Hello, I am
        <span>
          Adwaith
        </span>
        &mdash; Just a bewildered and mentally unstable child. &mdash;
      </p>
      
    </div>
  )
}

export default Home
