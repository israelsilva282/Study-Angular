import { Component } from '@angular/core';

import { Animal } from 'src/app/Animal';
import { ListService } from 'src/app/services/list.service';


@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent {
  
  constructor(private listService: ListService){}
  
  animals: Animal[] = [
    {name: "Turca", type: "Dog", age: 5},
    {name: "Tom", type: "Cat", age: 3},
    {name: "Jerry", type: "Mouse", age: 1},
    {name: "Bob", type: "Horse", age: 10},
  ];
  
  animalDetails = ''
  showAge(animal: Animal){
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos`
  }

  removeAnimal(animal:Animal){
    this.animals = this.listService.remove(this.animals, animal)
  }
}
