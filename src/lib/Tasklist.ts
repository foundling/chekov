import Task from './Task'

export default class Tasklist {

  constructor({ 
    tasks = [ new Task() ], 
    name = '',
  } = {}) {
    this.name = name
    this.tasks = tasks
  }

}
