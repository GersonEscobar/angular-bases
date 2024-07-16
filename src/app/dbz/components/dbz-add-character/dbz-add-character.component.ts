import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './dbz-add-character.component.html',
  styleUrls: ['./dbz-add-character.component.css']
})
export class DbzAddCharacterComponent {

  @Output()
  onNewCharacter: EventEmitter<Character> = new EventEmitter();


  character: Character = {
    name: '',
    power: 0
  }

  emitCharacter(){
    if( this.character.name.length === 0) return;
    this.onNewCharacter.emit(this.character)
    //this.character.name = ''
    //this.character.power = 0
  }

}
