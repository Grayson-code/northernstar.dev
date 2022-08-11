// Copyright (c) 2022 Northern Star
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { NextPage } from 'next'
import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

const tech: NextPage = () => {
    return (
        <section>
            <div className='flex bg-black text-white w-screen bimg'>
                <Head>
                    <title>About</title>
                    <meta property='description' content='Tech Stack that Northern Star use!' />
                    <meta property='og:title' content="Northern Stars Tech Stack" />
                    <meta property='og:url' content="https://northernstar.vercel.app/tech" />
                    <meta property='og:type' content="article" />
                    <meta property='og:description' content="Tech Stack that Northern Star use!" />
                    <meta property='twitter:card' content='summary' />
                    <meta property='twitter:site' content='@NorthernStare' />
                    <meta property='twitter:title' content='Tech Stack' />
                    <meta property='twitter:description' content='Northern Stars Tech Stack!' />
                    <meta property='twitter:url' content='https://northernstar.vercel.app/tech' />
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
                    <h1 className='flex justify-center text-4xl font-bold w-screen'>
                        Tech
                    </h1>
                    <h1 className='flex justify-center'>
                        <Link href={'/'} className="">
                            <a className='mr-2 underline font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple to-pink-900'>About</a>
                        </Link>
                        <a>Tech</a>
                    </h1>
                    <div className='flex flex-col justify-center items-center h-screen'>
                        <div className='flex justify-center items-center'>
                            <p className='flex justify-center items-center'>
                                Tech Stack, tools, technologies that I use! Last Updated 28th July 2022
                            </p>
                        </div>
                        <div className='flex flex-col justify-center items-center p-2 whitespace-pre'>
                            <p>🍔 = Main Stack, 💾 = Database, 🎇 = Extra Stuff, 💻 = Hardware</p>
                            <ul className='list-disc'>
                                <li>
                                    🍔 NextJS
                                </li>
                                <li>
                                    🍔 Firebase
                                </li>
                                <li>
                                    🍔 TailwindCSS
                                </li>
                                <li>
                                    🍔 TypeScript
                                </li>
                                <li>
                                    💾 Firestore
                                </li>
                                <li>
                                    💾 MongoDB
                                </li>
                                <li>
                                    💾 Redis
                                </li>
                                <li>
                                    🎇 Visual Studio Code
                                </li>
                                <li>
                                    🎇 Git
                                </li>
                                <li>
                                    🎇 Bash
                                </li>
                                <li>
                                    🎇 Github
                                </li>
                                <li>
                                    🎇 Insomnia
                                </li>
                                <li>
                                    🎇 Intellij
                                </li>
                                <li>
                                    💻 Intel i5 10600k
                                </li>
                                <li>
                                    💻 16GB DDR4 Ram
                                </li>
                                <li>
                                    💻 256GB NVME Systems SSD + 2TB HDD
                                </li>
                                <li>
                                    💻 NVIDIA GeForce GT 1030
                                </li>
                                <li>
                                    💻 50 MBPS Down/Up Internet Through Ethernet
                                </li>
                            </ul>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default tech