import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }
    getTodos(){
     return [
      {
        id : 1,
        title : 'Sleep',
        completed : true,
        active : true
      },
      {
        id : 2,
        title : 'Eat',
        completed : true,
        active : true
      },
      {
        id : 3,
        title : 'Study',
        completed : false,
        active :true
      }

    ]
  }
}
