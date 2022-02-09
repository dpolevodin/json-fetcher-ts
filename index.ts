import axios from 'axios'

const url = 'https://jsonplaceholder.typicode.com/todos/1'

interface ToDo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then(response => {
  const toDo = response.data as ToDo
  const id = toDo.id
  const title = toDo.title
  const completed = toDo.completed

  logToDo(id, title, completed)
})

const logToDo = (
  id: number,
  title: string,
  completed: boolean
) => {
  console.log(`
    The Todo with id: ${id}
    Has a title of: ${title}
    Is it completed? ${completed ? 'yes' : 'no'}
  `)
}
