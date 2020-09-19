import type { Name } from './name'
import foo, { IFoo } from './foo'

interface IBar {
  name: Name
  foo: IFoo
}

const bar: IBar = {
  name: 'bar',
  foo,
}

export default bar
