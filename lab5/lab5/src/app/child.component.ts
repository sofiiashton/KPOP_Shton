import { Input, Component} from '@angular/core';
      
@Component({
    selector: 'child',
    template: ` <p></p>`
})
export class ChildComponent{ 
    @Input() chosenUserId: number;
    @Input() chosenId: number;
    @Input() chosenTitle: string;
    @Input() chosenBody: string;

    getChosen() {
        this.chosenUserId = 4
    }
}