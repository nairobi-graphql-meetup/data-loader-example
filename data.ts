interface userInterface {
  user_id: number,
  first_name: string,
  last_name: string,
}

interface BookInterface {
  id: number,
  author_id: number,
  title: string,
}


export const authors: userInterface[] = [{
  first_name: "John",
  last_name: "Doe",
  user_id: 1
}]

export const books: BookInterface[] = [{
  id: 1,
  author_id: 1,
  title: "somtitle"
}]

