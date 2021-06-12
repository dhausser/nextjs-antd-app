import type { AppProps } from 'next/app'
import Layout from 'components/Layout'
import 'antd/dist/antd.dark.css'
import '../styles/globals.css'

function MyApp({ Component }: AppProps) {
  return (
    <Layout>
      <Component />
    </Layout>
  )
}

export default MyApp
