import { NextPage } from 'next'
import Link from 'next/link'

const TestPage: NextPage = () => {
  return (
    <>
      <h1>Test</h1>
      <Link href='/'>Home</Link>
    </>
  )
}
export default TestPage