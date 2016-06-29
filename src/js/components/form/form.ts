// Import Definitions File
import { extend as AppExtend } from 'vue';

// Interface / Class Imports
import { TaskInterface } from '../../Interfaces';
import { Task } from '../../Classes';


// Start Template
const html =
  `
  <li class="list-group-item">
    <input type="text" class="form-control" v-model="newTask.title" @keyup.enter="createTask(newTask, tasks)" placeholder="Enter Task Title To Begin">
  </li>
  `
// End Template

/**
 * [Input Form Component]
 * @param  {html}   {template [html string]
 */
export const inputform: Object = AppExtend({
  template: html,
  data(): Object {
    return {
      newTask: {
        title: '',
        complete: false,
        edit: false
      },
    }
  },
  props: {
    tasks: []
  },
  methods: {
    createTask(task: TaskInterface, tasks: Array<TaskInterface>): void{
      if(task.title !== ''){
        let newTask = new Task(task.title, task.complete);
        tasks.push(newTask);
        task.title = '';
      }
    }
  }

});
