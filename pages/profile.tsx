import useProfile from 'hooks/useProfile'

function Profile() {
  const { profile, isLoading, isError } = useProfile()

  if (isLoading) return <p>Loading...</p>
  if (isError) return <p>Error: {isError}</p>
  return <div>Name: {profile?.name}</div>
}

export default Profile
