import Layout from '../src/layout/Layout'
import Link from 'next/link'
import { dependencies } from '../package.json'

// Retrieve the currently installed version of Next.js
const { next: version } = dependencies

export default () => {
  return (
    <Layout>
      <h1>Next.js {version} is ready. Enjoy.</h1>
      <Link href='/test'>Test</Link>
    </Layout>
  )
}