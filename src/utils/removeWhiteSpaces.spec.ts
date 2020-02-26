import { removeWhiteSpaces } from './'

it('removes white spaces from a string', () => {
  expect(removeWhiteSpaces('a random string')).toEqual('arandomstring')
})
