// 7.	Обчислити довжину окружності, площу кругу,
// обсяг кулі того самого радіуса.

import { Component } from '@angular/core';
     
@Component({
    selector: 'my-app',
    template: `<h1>slay</h1>`
})
export class AppComponent { 
    name= '';

    radius:number;
    length:number;
    area:number;
    volume:number;

    getLength() {
       this.length = 2*Math.PI*this.radius
    }

    getArea() { 
        this.area = Math.PI*Math.pow(this.radius, 2)
    }

    getVolume() {
        this.volume = (4/3)*Math.PI*Math.pow(this.radius, 3)
    }
}
