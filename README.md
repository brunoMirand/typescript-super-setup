# Typescript

### Interseção (&):
- Permite combinar múltiplos tipos em um único tipo.
```ts
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
```

### Herança (extends):
- Herda todas as propriedades e métodos da interface pai.

```ts
  interface Users {
    name: string;
    age: number;
  }

  interface CreateUsers extends Users {
    document: string;
  }

  const createUsers: CreateUser = {
    name: 'Foo',
    age: 19,
    document: '179965235',
  }
```

### Tipos Parciais (Partial):
- É usado para tornar todas as propriedades de uma tipo opcional.
```ts
  type User = {
    id: string;
    name: string;
    email: string;
  }

  const createUser: Partial<User> = {
    email: '',
    id: 'fake-id',
    name: ''
  }
```

### Omissão (Omit):
- Cria um novo tipo removendo algumas propriedades de um tipo existente.
```ts
  type User = {
    id: string;
    name: string;
    email: string;
  }

  const createUser: Omit<User, 'email'> = {
    id: 'fake-id',
    name: 'Foo'
  }
```

### Escolha de propriedades (Pick):
- Cria novo tipo selecionando apenas algumas propriedades de um tipo existente.

```ts
  type User = {
    id: string;
    name: string;
    email: string;
  }

  const createUser: Pick<User, 'email'> = {
    email: 'foo@bar.com.br'
  }
```

### Tipos Genericos (Generics):
- Permitem criar componentes que podem trabalhar com uma variadade de tipos.

```ts
  type User<T> = {
    name: string;
    email: string;
    details: T;
  }

  type DetailsAdmin =  string[];

  const user: User<DetailsAdmin> = {
    name: 'Foo',
    email: 'foo@bar.com.br',
    details: ['foo', 'bar']
  }
```

### Selecionar uma propriedade (type[propriedade]):
- Usado quando queremos recuperar uma propriedade de uma interface grande cuja não temos acesso, um exemplo seria de bibliotecas de terceiros.

```ts
  type User = {
    name: string;
    age: number;
    details: {
      hobbies: string[];
    }
  }

  const hobbies: User['details'] = {
    hobbies: ['php4', 'laravel'];
  }
```
