import React, { useCallback } from 'react'
import Link from 'next/link'
import Head from 'next/head'

// console.log('执行了')
export default function X() {
  const clickMe = useCallback(() => {
    console.log('you clicked me')
  }, [])
  return (
    <>
      <Head>
        <title> 第一篇文章</title>
        <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no,viewport-fit=cover"></meta>
      </Head>
      <div>First Post <button onClick={clickMe}>click me</button>
        <hr/>
        回到首页 <Link href='/'><a>点击这里</a></Link>
      </div>
    </ >
  )
} 