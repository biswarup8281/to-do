import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/models/Todos';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css']
})
export class TodoItemsComponent implements OnInit {
  @Input() todo:Todo;
  public check:boolean;
  constructor() { }

  ngOnInit() {
    this.check=this.todo.completed;
  }

  setClass() {
    let classes = {
      'is-completed': this.todo.completed
    }
    return classes;
  }
  
  toggleLine(){
    this.todo.completed = !this.todo.completed;
  }
  delete(){
    this.todo.active = !this.todo.active;
  }

}
