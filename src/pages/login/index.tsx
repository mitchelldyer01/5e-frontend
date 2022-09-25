import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import LoginForm from '../../components/login-form'

const LoginPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Login</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>
          <LoginForm /> 
        </div>
      </main>
    </div>
  )
}

export default LoginPage
