import * as Event from './testEvent.json'

const handler = async (event: typeof Event): Promise<string> => {
  console.log('Hello world')

  return new Promise(resolve => {
    resolve(JSON.stringify(event))
  })
}

export { handler }
