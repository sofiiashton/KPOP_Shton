import { Input, Component} from '@angular/core';
      
@Component({
    selector: 'child-comp',
    template: ` <p>Рівняння: {{userA}}x^2 + {{userB}}x + {{userC}}</p>
                <button (click) = "calculateRoots()">Знайти корені рівняння</button>
                <p>Корені: x1 = {{root1}}, x2 = {{root2}}</p>`
})
export class ChildComponent{ 
    @Input() userA: number;
    @Input() userB: number;
    @Input() userC: number;

    root1: number = 0;
    root2: number = 0;
	 
    calculateRoots() {
        this.root1 = ((-1) * this.userB + Math.sqrt(Math.pow(this.userB, 2) - 4 * this.userA * this.userC)) / (2 * this.userA)
        this.root2 = ((-1) * this.userB - Math.sqrt(Math.pow(this.userB, 2) - 4 * this.userA * this.userC)) / (2 * this.userA)
    }
}