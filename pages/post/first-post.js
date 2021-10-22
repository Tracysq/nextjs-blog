import React, { useCallback } from 'react'
import Link from 'next/link'

console.log('执行了')
export default function X() {
  const clickMe = useCallback(() => {
    console.log('you clicked me')
  }, [])
  return (
    <div>First Post <button onClick={clickMe}>click me</button>
      <hr/>
      回到首页 <Link href='/'><a>点击这里</a></Link>
    </div>
  )
}