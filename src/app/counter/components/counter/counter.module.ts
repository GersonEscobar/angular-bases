import { NgModule } from "@angular/core";
import { CounteComponent } from "./counter.component";



@NgModule({
    declarations: [
        CounteComponent,
    ],
    exports:[
        CounteComponent

    ]
})

export class CounterModule{
    
}
