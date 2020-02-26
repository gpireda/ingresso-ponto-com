import { slugify } from './'

it('slugifies a string', () => {
  expect(slugify('A random string')).toEqual('a-random-string')
})
