import { Component, ElementRef, ViewChild, OnInit, Inject } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DOCUMENT  } from '@angular/common';
import { Animations } from "./services/annimation";
import { trigger } from '@angular/animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: Animations

})

// Init on top of the page => in module.ts : scrollPositionRestoration: 'enabled' https://stackoverflow.com/questions/48048299/angular-5-scroll-to-top-on-every-route-click/48048822

export class AppComponent implements OnInit{
  headerOnStartState: string = "onStart"
  title = 'betc-scroll-animation';
  @ViewChild('cardHover', {static: true}) cardHover: ElementRef<HTMLElement>;
  @ViewChild('header', {static: true}) header: ElementRef<HTMLElement>;
  @ViewChild('text1', {static: true}) text1: ElementRef<HTMLElement>;


  constructor(@Inject(DOCUMENT) private document: Document) {
  }


  ngOnInit(): void {
    this.initialAnimations();
    this.initScrollAnimations()  
    
    
  }

  initialAnimations(): void {
    this.headerOnStartState = "onStart";
    gsap.registerPlugin(ScrollTrigger);
  }

  initScrollAnimations(): void {
    gsap.registerPlugin(ScrollTrigger);


    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: this.header.nativeElement,
        start: "top 352px", // trigger when the top of this.header hit the top 352px of viewport
        end: "+=400px",
        pinSpacing: false,
        pin: true,
        scrub: true,
        anticipatePin: 1
      },
      defaults: {ease: "none"}
    });

    tl.fromTo(this.header.nativeElement,
      {
        webkitFilter:"blur(" + 0 + "px)",
        scale: 1,
        transform: "rotate3d( 1, 0, -0.15, 0deg)",
      }
      ,{
      webkitFilter:"blur(" + 7 + "px)",
      scale: 0.6,
      transform: "rotate3d( 1, 0, -0.15, 40deg)",
    });

    const textTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: this.text1.nativeElement,
        start: "top 80%",
        onEnter: self => {
          gsap.to(this.text1.nativeElement,{
            x: 0,
            duration: 0.3,
            opacity: 1
        })},
        onLeaveBack: self => {
          gsap.to(this.text1.nativeElement,{
            x: -100,
            duration: 0.3,
            opacity: 0
          })
      }

    }})
    
  }

}
