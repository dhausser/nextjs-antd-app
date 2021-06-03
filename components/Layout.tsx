import { ReactNode } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Layout as AntdLayout, Menu } from 'antd'

const { Header, Content, Footer } = AntdLayout

interface Props {
  children: ReactNode
}

export function Layout({ children }: Props) {
  return (
    <AntdLayout className="layout">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">
            <Link href="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link href="/posts">Posts</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link href="/comments">Comments</Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link href="/profile">Profile</Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <div className="site-layout-content">{children}</div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </AntdLayout>
  )
}
