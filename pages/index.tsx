// Core layout and Next.js
import { NextPage } from 'next'
import Link from 'next/link'

// Retrieve the currently installed version of Next.js
import { dependencies } from '../package.json'
const { next: version } = dependencies

// Apollo GraphQL
import { withApollo } from '../src/apollo/client'
import { gql } from 'apollo-server-micro'
import { useQuery } from '@apollo/react-hooks'

const HelloQuery = gql`
  query HelloQuery {
    hello
  }
`

const IndexPage: NextPage = () => {
  // TODO: Eventually use loading and error constants, too 🤓
  const { data } = useQuery(HelloQuery)

  if (data) {
    return (
      <>
        <h1>Next.js {version} is ready. Enjoy.</h1>
        <pre>{JSON.stringify(data, null, 2)}</pre>
        <Link href='/test'>Test</Link>
      </>
    )
  }

  return (
    <>
      <h1>Next.js {version} is ready. Enjoy.</h1>
      <Link href='/test'>Test</Link>
    </>
  )
}
export default withApollo(IndexPage)