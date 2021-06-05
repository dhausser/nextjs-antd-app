import useSWR from 'swr'
import fetcher from 'utils'
import db from '../db.json'

type Comment = typeof db.comments[0]

const url = 'http://localhost:4000/comments'

function useComments() {
  const { data, error } = useSWR<Comment[], Error>(url, fetcher)

  return {
    comments: data,
    isLoading: !error && !data,
    isError: error,
  }
}

export default useComments
