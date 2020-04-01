import { dependencies } from '../package.json'

// Retrieve the currently installed version of Next.js
const { next: version } = dependencies

export default () => {
  return <h1>Next.js {version} is ready. Enjoy.</h1>
}