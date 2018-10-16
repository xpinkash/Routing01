import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  todos: any;
  
  constructor(public dataService : DataService) { }

  ngOnInit() {
    this.getTodoList();
  }

  getTodoList() {
    this.dataService.todoList().subscribe((todos) => {
      this.todos = todos;
    });
  }
}
