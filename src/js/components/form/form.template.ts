export const template: string = `
  <li class="list-group-item">
    <input type="text" class="form-control" v-model="newTask.title" @keyup.enter="createTask(newTask, tasks)">
  </li>
`
