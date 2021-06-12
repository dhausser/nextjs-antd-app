import { Space, Button } from 'antd'
import EditableTable from 'components/EditableTable'
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

const newData = { id: 1, title: 'json-server-1', author: 'typicode' }

export default function Home() {
  const { posts, isLoading, isError } = usePosts()

  if (isLoading) return <p>Loading...</p>
  if (isError) return <p>Error: {isError}</p>
  return (
    <EditableTable
      dataSource={posts}
      setDataSource={() => null}
      columns={columns}
      newData={newData}
    />
  )
}
