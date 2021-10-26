import png from 'assets/images/1.png'
import { GetServerSideProps, NextPage } from 'next'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { UAParser } from 'ua-parser-js'

type Props = {
  browser: {
    name: string,
    version: string,
    major: string
  }
}

const Index: NextPage<Props> = (props) => {
  const { browser } = props
  const [width, setWidth] = useState(0)
  useEffect(() => {
    const w = document.documentElement.clientWidth
    setWidth(w)
  }, [])
  return (
    <div>
      <h1>你的浏览器是  {browser.name}</h1>
      <h2>你的浏览器窗口大小是 {width} px</h2>
      {/* <h1>标题1</h1>
      <p>段落</p>
      <Link href="/posts"><a>posts</a></Link>
      <img src={png} alt="" /> */}
    </div>
  )
}

export default Index

export const getServerSideProps: GetServerSideProps = async (context) => {
  const ua = context.req.headers['user-agent']
  const result = new UAParser(ua).getResult()
  return {
    props: {
      browser: result.browser
    }
  }
}