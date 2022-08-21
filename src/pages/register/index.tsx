import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import RegisterForm from '../../components/register-form'

const Register: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Register</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>
          <RegisterForm /> 
        </div>
      </main>
    </div>
  )
}

export default Register
