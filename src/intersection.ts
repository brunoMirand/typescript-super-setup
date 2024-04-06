type User = {
  name: string;
  age: number;
}

type CreateUser = {
  document: string;
} & User

const createUser: CreateUser = {
  name: 'Foo',
  age: 19,
  document: '179965235',
}
