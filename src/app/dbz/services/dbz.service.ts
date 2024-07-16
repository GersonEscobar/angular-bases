import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid'
import { Character } from '../interfaces/character.interface';


console.log(uuid())
@Injectable({
    providedIn: 'root'
})

export class DbzService {

    public characters: Character[] = [{
        id: uuid(),
        name: 'Krillin',
        power: 1000
    },{
        id: uuid(),
        name: 'Goku',
        power: 5500
    },{
        id: uuid(),
        name: 'Vegueta',
        power: 5300
    },{
        id: uuid(),
        name:'Gohan',
        power: 3500
    }
    ];


    addCharacter(character: Character):void{
        const newCharacte: Character = {
            id: uuid(),
            ...character
        }
        this.characters.push(newCharacte)
    }
    
    //this.characters.splice(index,1)
    deleteCharacaterById(id:string){
        this.characters = this.characters.filter( character => character.id !== id)
    }

    
    
}