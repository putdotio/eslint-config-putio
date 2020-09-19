import type { Name } from './name'

interface IFoo {
  name: Name
}

const foo: IFoo = {
  name: 'foo',
}

export { IFoo }
export default foo
