import axios from 'axios'

const url = 'https://jsonplaceholder.typicode.com/todos/1'

axios.get(url).then(response => {
  const toDo = response.data
  const id = toDo.id
  const title = toDo.title
  const completed = toDo.completed

  console.log(`
    The Todo with id: ${id}
    Has a title of: ${title}
    Is it completed? ${completed ? 'yes' : 'no'}
  `)
})

