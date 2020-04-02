import Layout from '../src/layout/Layout'
import Link from 'next/link'

export default () => {
  return (
    <Layout>
      <h1>Test</h1>
      <Link href='/'>Home</Link>
    </Layout>
  )
}