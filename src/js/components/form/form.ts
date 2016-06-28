// Import Definitions File
import * as Vue from 'vue';

// Interface Imports
import { TaskInterface } from '../../Interfaces';

// Class Imports
import { Task } from '../../Classes';

export const inputform = Vue.extend({
  template: `
  <li class="list-group-item">
    <input type="text" class="form-control" v-model="newTask.title" @keyup.enter="createTask(newTask, tasks)">
  </li>
  `,
  data(){
    return {
      newTask: {
        title: '',
        complete: false
      },
    }
  },
  props: {
    tasks: []
  },
  methods: {
    createTask(task: TaskInterface, tasks: Array<TaskInterface>){
      let newTask = new Task(task.title, task.complete);
      tasks.push(newTask);
      task.title = '';
    },
  },
  ready(){
  }

});
