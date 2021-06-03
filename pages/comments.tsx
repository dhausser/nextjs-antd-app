import useComments from 'hooks/useComments'

function Comments() {
  const { comments, isLoading, isError } = useComments()

  if (isLoading) return <p>Loading...</p>
  if (isError) return <p>Error: {isError}</p>
  return (
    <div>
      Comments:
      <ul>
        {comments?.map((comment) => (
          <li key={comment.id}>{comment.body}</li>
        ))}
      </ul>
    </div>
  )
}

export default Comments
