// Import Definitions File
import * as Vue from 'vue';

// Template Import
import { template } from './form.template.ts';

// Interface Imports
import { TaskInterface } from '../../app.ts';

// Class Imports
import { Task } from '../../app.ts';

export const inputform = Vue.extend({
  template,
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
