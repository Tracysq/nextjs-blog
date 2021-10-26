import { NextApiHandler } from "next"
import path from "path"
import fs, {promises as fsPromise} from 'fs'
import { getPosts } from "lib/posts"

const Posts: NextApiHandler = async (req, res) => {
  const posts = await getPosts()
  console.log(posts)
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.write(JSON.stringify(posts))
  res.end()
}

export default Posts