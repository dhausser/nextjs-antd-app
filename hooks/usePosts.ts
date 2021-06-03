import useSWR from 'swr'
import fetcher from 'utils'
import db from '../db.json'

type Post = typeof db.posts[0]

const url = 'http://localhost:4000/posts'

function usePosts() {
  const { data, error } = useSWR<Post[]>(url, fetcher)

  return {
    posts: data,
    isLoading: !error && !data,
    isError: error,
  }
}

export default usePosts
