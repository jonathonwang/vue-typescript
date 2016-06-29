import { TaskInterface } from './Interfaces';

export class Task implements TaskInterface {
  title: string;
  complete: boolean;
  edit: boolean;
  constructor( title: string, complete: boolean ){
    this.title = title;
    this.complete = complete;
    this.edit = false;
  }
}
