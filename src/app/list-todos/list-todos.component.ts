import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date

  ){}
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})



export class ListTodosComponent implements OnInit {

  todos: Todo[]
  message: string
  
  // = [
  //   new Todo(1, 'Learn to Dance', false, new Date()),
  //   new Todo(2, 'Learn to Fly', false, new Date()),
  //   new Todo(3, 'Learn to Rock hard', false, new Date()),
  //   new Todo(4, 'Learn to cook', false, new Date())
  // ]
  // todos = {
  //   id: 1,
  //   description: 'learn to dance'

  // }

  constructor(
    private todoService: TodoDataService,
    private router: Router
  ) { }

  ngOnInit() {
   this.refreshTodo();
  }

  refreshTodo(){
    this.todoService.retrieveAllTodos('sameerbhati').subscribe(
      response => {
        console.log(response);
        this.todos = response;
      }
    )
  }

  deleteTodo(id){
    console.log(`delete todo ${id}`);
    this.todoService.deleteTodo('sameerbhati', id).subscribe(
      response => {
        console.log(response);
        this.message = `Todo ${id} has been successfully delete!`
        this.refreshTodo();
      }
    )
  }

  updateTodo(id){
    console.log(`Todo ${id} updated`)
    this.router.navigate(['todos', id])
  }

  addTodo(){
    this.router.navigate(['todos', -1])
  }

}
