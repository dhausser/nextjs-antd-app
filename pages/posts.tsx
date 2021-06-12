import { Table, Space, Button } from 'antd'
import usePosts from 'hooks/usePosts'

const columns = [
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: 'Author',
    dataIndex: 'author',
    key: 'author',
  },
  {
    title: 'Action',
    key: 'action',
    render: () => (
      <Space size="middle">
        <Button type="link">Edit</Button>
        <Button type="link">Delete</Button>
      </Space>
    ),
  },
]

function Posts() {
  const { posts, isLoading, isError } = usePosts()

  if (isLoading) return <p>Loading...</p>
  if (isError) return <p>Error: {isError}</p>
  return <Table dataSource={posts} columns={columns} />
}

export default Posts
