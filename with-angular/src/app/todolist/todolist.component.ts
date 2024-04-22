import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css'
})
export class TodolistComponent {
  name = ""
  desc = ""
  priority = ""
  status = ""
  isEditTask: number = -1

  taks: { name: string, desc: string, priority: string, status: string }[] = []

  onSubmit(formData: any) {
    if (this.isEditTask < 0) {
      const task = { id: Date.now(), ...formData, priority: this.priority, status: this.status }
      this.taks.push(task)
    } else {
      // const task , ...formData, priority: this.priority, status: this.status}
      // this.taks.push(task)
      this.taks[this.isEditTask] = { 
        ...this.taks[this.isEditTask], 
        name: this.name, 
        desc: this.desc,
        priority: this.priority,
        status: this.status
      }
    }

    this.name = ""
    this.desc = ""
    this.priority = ""
    this.status = ""
  }

  onDeleteTask(index: number): void {
    let conf = confirm("Are you sure to delete the task?")
    if (conf == true) { this.taks.splice(index, 1) }
  }

  onEditTask(index: number): void {
    this.name = this.taks[index].name;
    this.desc = this.taks[index].desc;
    this.priority = this.taks[index].priority;
    this.status = this.taks[index].status;

    this.isEditTask = index;
  }

  onComplete(index: number): void {
    this.taks[index].status = "complete"
  }

}
