import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>5e</title>
        <meta name="description" content="An engine for 5e" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          Welcome to 5e!
        </h1>
      </main>
    </div>
  )
}

export default Home
