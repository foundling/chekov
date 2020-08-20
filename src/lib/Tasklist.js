import Task from './Task'

export default class Tasklist {

  constructor({ 
    id = id,
    tasks = [ new Task() ], 
    name = '',
  } = {}) {
    this.id = id
    this.name = name
    this.tasks = tasks
  }

}
