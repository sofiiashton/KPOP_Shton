import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'my-app';
   
  radius:number = 0;
  
  length:number = 0;
  area:number = 0;
  volume:number = 0;

  getLength() {
     this.length = 2*Math.PI*this.radius
  }

  getArea() { 
      this.area = Math.PI*Math.pow(this.radius, 2)
  }

  getVolume() {
      this.volume = (4/3)*Math.PI*Math.pow(this.radius, 3)
  }

  getAll() {
    this.getLength()
    this.getArea()
    this.getVolume()
  }
}
