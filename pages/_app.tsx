import type { AppProps } from 'next/app'
import { Layout } from 'components/Layout'
import 'antd/dist/antd.dark.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
