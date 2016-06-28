// Import Definitions File
import * as Vue from 'vue';

// Import Components
import {inputform} from './components/form/form';

import { TaskInterface } from './Interfaces';
import { Task } from './Classes';

/**
 * [Initialize new Vue]
 */
export const vue = new Vue ({
  el: 'html',
  components: {
    inputform
  },
  data:{
    newTask: {
      title: '',
      complete: false
    },
    tasks: [
      {title: 'task1', complete: false},
      {title: 'task2', complete: false},
      {title: 'task3', complete: false},
      {title: 'task4', complete: false},
    ]
  },
  methods: {
    deleteTask(task: TaskInterface, tasks: Array<TaskInterface>){
      let index = tasks.indexOf(task);
      tasks.splice(index,1);
    },
    toggleComplete(task: TaskInterface){
      task.complete = !task.complete;
    }
  },

})
