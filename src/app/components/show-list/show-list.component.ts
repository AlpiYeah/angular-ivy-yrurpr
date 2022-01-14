import { Component, OnInit } from '@angular/core';
import { ToDo } from '../../model/ToDo';
import { ToDoData } from '../../services/ToDoData';

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.css']
})

export class ShowListComponent implements OnInit {
  toDo: ToDo;

  get toDos(): toDo[] {
    return this.toDoData.toDos;
  }

  constructor() { }

  ngOnInit() {
  }

}