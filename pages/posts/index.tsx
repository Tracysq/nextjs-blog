import { NextPage } from "next"
import { usePosts } from "hooks/usePosts"

const PostsIndex: NextPage = () => {
  const {loading, empty, posts} = usePosts()
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