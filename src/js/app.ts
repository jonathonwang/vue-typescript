// Import Definitions File
import * as Vue from 'vue';
import * as VueRouter from 'vue-router';

// Import Components
import { inputform } from './components/form/form';
// Import Interfaces and Classes
import { TaskInterface } from './Interfaces';
import { Task } from './Classes';

/**
 * Initialize new Vue
 */
export const vue = new Vue ({
  el: 'html',
  components: {
    inputform
  },
  data:{
    tasks: [
      { title: 'task1', complete: false, edit: false },
      { title: 'task2', complete: false, edit: false },
      { title: 'task3', complete: false, edit: false },
      { title: 'task4', complete: false, edit: false }
    ]
  },
  methods: {
    deleteTask(task: TaskInterface, tasks: Array<TaskInterface>){
      let index = tasks.indexOf(task);
      tasks.splice(index, 1);
    },
    toggleEdit(task: TaskInterface){
      task.edit = true;
    },
    submitEdit(task: TaskInterface, event: any){
      if(event.target.value !== ''){
        let value = event.target.value;
        task.title = value;
        task.edit = false;
      }
    },
    toggleComplete(task: TaskInterface){
      task.complete = !task.complete;
    }
  },

})
