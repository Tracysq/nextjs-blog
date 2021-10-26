import { NextPage } from "next"
import axios from 'axios'
import { useEffect, useState } from "react"

type Post = {
  id: string,
  title: string,
  date: string
}

const PostsIndex: NextPage = () => {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(false)
  const [empty, setEmpty] = useState(false)

  useEffect(() => {
    setLoading(true)
    axios.get('/api/v1/posts').then(res => {
      setPosts(res.data)
      setEmpty(res.data.length === 0 ? true : false)
    }).finally(() => {
      setLoading(false)
    })
  }, [])
  return (
    <div>
      <h1>文章列表</h1>
      {loading ? '加载中' :
        empty ? '没有文章' :
          posts.map(p => <div key={p.id}>
            {p.id}
          </div>)
      }
    </div>
  )
}

export default PostsIndex