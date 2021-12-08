import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, HostListener, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-card-hover-mouse',
  templateUrl: './card-hover-mouse.component.html',
  styleUrls: ['./card-hover-mouse.component.scss']
  
})
export class CardHoverMouseComponent implements OnInit {

  vitesse = 0.06;
  indexmax = 120;
  lastX = 0;
  lastY = 0;
  mouseLeaved = true;

  posCursor = [0,0];
  img: any;
  cursor: any;

  constructor(@Inject(DOCUMENT) private document: Document, private el: ElementRef) {
  }

  ngOnInit(): void {
    
    this.img = this.document.querySelector('.img');
    this.cursor = this.document.querySelector('.cursor');
  }
  
  @HostListener('mousemove', ['$event'])
  handleMousemove(event: { layerY: number; layerX: number; }): void {
    setTimeout( () => {
      this.img.style.transform = `rotateX(${(320 - event.layerY)*this.vitesse*0.6}deg) rotateY(${-(240 - event.layerX)*this.vitesse}deg)`;
      this.lastX = event.layerY;
      this.lastY = event.layerX;
    }, 300);
    this.posCursor = [event.layerX, event.layerY];
  };

  @HostListener('mouseleave', ['$event'])
  handleLeave(): void {  
    this.mouseLeaved = true  
    for (let index = 0; index < this.indexmax + 1; index++) {
      setTimeout( () => {
        this.img.style.transform = `rotateX(${(320 - this.lastX - (320 - this.lastX)*(index/this.indexmax))*this.vitesse*0.5}deg) rotateY(${-(240 - this.lastY - (240 - this.lastY)*(index/this.indexmax))*this.vitesse}deg)`;
      }, index * 5 + 100)
    }
    this.lastX = 0;
    this.lastY = 0
  }
  


}