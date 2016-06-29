export interface TaskInterface {
  title: string,
  complete: boolean,
  edit: boolean,
  created: {
    createdDate: Date,
  },
  completed: {
    completedDate: any,
  },
  getCreatedDate(): any,
  getCompletedDate(): any
}
