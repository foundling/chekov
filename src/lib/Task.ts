class TaskDetails {

  constructor({
    text = '',
    dueDate = null
  } = {}) {
    this.text = text
    this.dueDate = dueDate
  }

}

export default class Task {

  constructor({
    id = null,
    text = '',
    completed = false,
    createdOn = new Date(),
    completedOn = null,
    details = new TaskDetails()
  } = {}) {

    this.id = id
    this.text = text 
    this.completed = completed
    this.createdOn = createdOn
    this.details = details

  }

}
