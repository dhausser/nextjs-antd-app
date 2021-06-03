import { Table, Space } from 'antd'
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
        <a>Edit</a>
        <a>Delete</a>
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
