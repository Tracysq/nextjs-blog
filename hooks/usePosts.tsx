import axios from "axios"
import { useEffect, useState } from "react"

type Post = {
  id: string,
  title: string,
  date: string
}

export const usePosts = () => {
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
  return {posts, setPosts, loading, setLoading, empty, setEmpty}
}