import { Component } from '@angular/core';
import {Task} from "../entite/Task";

@Component({
  selector: 'app-tp1',
  templateUrl: './tp1.component.html',
  styleUrls: ['./tp1.component.css']
})
export class Tp1Component {
  List_1 !: Array<Task>

  add: boolean = true;

  // -----------------
  description : string = '';
  valider : boolean = false;


  constructor() {
    this.List_1 = new Array<Task>(
      {id: 1, description: 'q', completed: true},
      {id: 2, description: 'q1', completed: false},
      {id: 3, description: 'q2', completed: false},

    )

  }

  valid(li: Task) {
    li.completed = true;
  }

  add_Task(){
    let newTask: Task = {id: 0, description: this.description, completed: this.valider}
    newTask.id=this.List_1.length+1;
    this.List_1.push(newTask)
    this.add = !this.add
  }

}

