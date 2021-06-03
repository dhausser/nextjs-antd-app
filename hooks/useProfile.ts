import useSWR from 'swr'
import fetcher from 'utils'
import db from '../db.json'

type Profile = typeof db.profile

const url = `http://localhost:4000/profile`

function useProfile() {
  const { data, error } = useSWR<Profile>(url, fetcher)

  return {
    profile: data,
    isLoading: !error && !data,
    isError: error,
  }
}

export default useProfile
