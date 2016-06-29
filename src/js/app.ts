// Import Definitions File
import * as Vue from 'vue';
import * as VueRouter from 'vue-router';

// Import Components
import { inputform } from './components/form/form';

// Import Interfaces and Classes
import { TaskInterface } from './Interfaces';
import { Task } from './Classes';

/**
 * [Vue Main App]
 * @param  {'html'} {el [element to initialize Vue]
 */

export const app = new Vue({
  el: 'html',
  components: {
    inputform
  },
  data:{
    tasks: [
      new Task('Task1', false),
      new Task('Task2', false),
      new Task('Task3', false),
      new Task('Task4', false),
      new Task('Task5', false)
    ]
  },
  methods: {
    deleteTask(task: TaskInterface, tasks: Array<TaskInterface>): void{
      let index: number = tasks.indexOf(task);
      tasks.splice(index, 1);
    },
    toggleEdit(task: TaskInterface): void{
      task.edit = true;
    },
    submitEdit(task: TaskInterface, event: any): void{
      if(event.target.value !== ''){
        let value: string = event.target.value;
        task.title = value;
        task.edit = false;
      }
    },
    toggleComplete(task: TaskInterface): void{
      task.complete = !task.complete;
    },
  },
  ready(): void{
    // this.methods.logger();
  }

})

console.log(app.$data.tasks[0]);
