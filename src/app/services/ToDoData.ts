import { Injectable } from '@angular/core';
import{ ToDo } from '../model/ToDo';

  @Injectable()
  export class ToDoService {
    toDos:  ToDo[] = [];
    constructor() {
      this.toDos.unshift(new ToDo("Hunde futtern", false));
      this.toDos.unshift(new ToDo("Einkaufen gehen", false, "2022.14.01"));
      this.toDos.unshift(new ToDo("Gym gehen", false));
      this.toDos.unshift(new ToDo("Staubsaugen", true));
    }
    saveToDo(toDo: ToDo) {
      this.toDos.unshift(toDo);
    }
    toggleToDo(toDo: ToDo) {
      toDo.done = !toDo.done;
      this.toDos = this.toDos.filter(t => t === t);
    }
    countToDosUndone(): number {
      let numberUndone: number = 0;
      for (let i: number = 0; i<this.toDos.length; i++)
      if(this.toDos[i].done === false) {
        numberUndone++;
      }
      return numberUndone;
    }
  }