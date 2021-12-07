import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, HostListener, OnInit, Renderer2, Inject, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-hover-mouse',
  templateUrl: './card-hover-mouse.component.html',
  styleUrls: ['./card-hover-mouse.component.scss']
})
export class CardHoverMouseComponent implements OnInit {

  private mousemove = new EventEmitter<MouseEvent>();
  private last: MouseEvent;
  vitesse = 0.04;
  indexmax = 120;
  lastX = 0;
  lastY = 0;
  mouseLeaved = true;
  constructor(@Inject(DOCUMENT) private document: Document, private el: ElementRef) {
    
  }

  ngOnInit(): void {
    
  }

  
  @HostListener('mousemove', ['$event'])
  handleMousemove(event): void {
    /**
    if( this.mouseLeaved ) {
      this.mouseLeaved = false
      this.lastX = event.layerY;
      this.lastY = event.layerX;
      for (let index = 0; index < 30 + 1; index++) {
        setTimeout( () => {
          this.document.querySelector('img').style.transform = `rotateX(${(320 - this.lastX)*(index/this.indexmax)*this.vitesse*0.5}deg) rotateY(${-(240 - this.lastY )*(index/this.indexmax)*this.vitesse}deg)`;
        }, index * 5 + 100)
      }
    }
    */
    setTimeout( () => {
      this.document.querySelector('img').style.transform = `rotateX(${(320 - event.layerY)*this.vitesse*0.4}deg) rotateY(${-(240 - event.layerX)*this.vitesse}deg)`;
      this.lastX = event.layerY;
      this.lastY = event.layerX;
    }, 300)
  }
  @HostListener('mouseleave', ['$event'])
  handleLeave(event): void {  
    this.mouseLeaved = true  
    for (let index = 0; index < this.indexmax + 1; index++) {
      setTimeout( () => {
        this.document.querySelector('img').style.transform = `rotateX(${(320 - this.lastX - (320 - this.lastX)*(index/this.indexmax))*this.vitesse*0.5}deg) rotateY(${-(240 - this.lastY - (240 - this.lastY)*(index/this.indexmax))*this.vitesse}deg)`;
      }, index * 5 + 200)
    }
    this.lastX = 0;
    this.lastY = 0
  }
  


}