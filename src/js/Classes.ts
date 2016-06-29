import { TaskInterface } from './Interfaces';

export class Task implements TaskInterface {
  public title: string;
  public complete: boolean;
  public edit: boolean;
  public created:  {
    createdDate: Date;
  }
  public completed: {
    completedDate: any
  }
  public getCreatedDate(): any {
    return this.created.createdDate;
  }
  public getCompletedDate(): any {
    return this.completed.completedDate;
  }
  constructor( title: string, complete: boolean ){
    this.title = title;
    this.complete = complete;
    this.edit = false;
    // this.created.createdDate = new Date();
    // if(this.complete == true){
    //   this.completed.completedDate = new Date();
    // }
    // else{
    //   this.completed.completedDate = null;
    // }
  }
}
