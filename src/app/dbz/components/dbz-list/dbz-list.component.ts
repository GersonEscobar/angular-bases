import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './dbz-list.component.html',
  styleUrls: ['./dbz-list.component.css']
})
export class DbzListComponent {



  @Input()
  characterList: Character[]=[/* {
    name:'Trunks',
    power: 10
  } */]

  @Output()
  onDelete: EventEmitter <string> = new EventEmitter();

  onDeleteCharacter(id?: string):void{
    if(!id) return;
    this.onDelete.emit(id)
    console.log({id})
  }
  /*
  onDeleteCharacter(index: number):void{
    this.onDelete.emit(index)
    console.log({index})
  }
    */


}
