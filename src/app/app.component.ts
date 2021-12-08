import { Component, ElementRef, ViewChild, OnInit, Inject } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DOCUMENT  } from '@angular/common';
import { Animations } from "./services/annimation";



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
  @ViewChild('panelDroite', {static: true}) panelDroite: ElementRef<HTMLElement>;
  @ViewChild('image', {static: true}) image: ElementRef<HTMLElement>;
  @ViewChild('footer', {static: true}) footer: ElementRef<HTMLElement>;


  constructor(@Inject(DOCUMENT) private document: Document) {
  }


  ngOnInit(): void {
    this.initialAnimations();
    this.initScrollAnimations();
    this.initScrollImagesAnimations();
    this.initFooterAnimations();
  }

  initScrollImagesAnimations(): void {
    gsap.registerPlugin(ScrollTrigger);

    gsap.timeline({
      scrollTrigger: {
        trigger: this.panelDroite.nativeElement,
        start: "top 340px",
        end: "+=800px",
        scrub: true,
        pin: true,
      }
    })

    const images = this.document.querySelectorAll(".image"); 
    images.forEach(elem => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: elem,
          start: "top 352px",
          end: "bottom 402px",
          onEnter: () => {
            gsap.to(elem, {
              transform: "scale(1.1)",
              filter: "brightness(1)",
              ease: "power1.inOut",
              duration: 1.3
            })
          },
          onEnterBack: () => {
            gsap.to(elem, {
              transform: "scale(1.1)",
              filter: "brightness(1)",
              ease: "power1.inOut",
              duration: 1.3
            })
          },
          onLeaveBack: self => {
            gsap.to(elem,{
              transform: "scale(1)",
              filter: "brightness(0.5)",
              ease: "power1.inOut",
              duration: 1.3
            })
          },
          onLeave: self => {
            gsap.to(elem,{
              transform: "scale(1)",
              filter: "brightness(0.5)",
              ease: "power1.inOut",
              duration: 1.3
            })
          },

        }
      })
    });
  }

  initialAnimations(): void {
    this.headerOnStartState = "onStart";
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
      scale: 0.51,
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

  initFooterAnimations(): void {
    gsap.registerPlugin(ScrollTrigger);

    gsap.timeline({
      scrollTrigger: {
        trigger: this.footer.nativeElement,
        start: "top 92%",
        onEnter: () => {
          gsap.to(this.footer.nativeElement, {
            opacity: 1,
            transform: "scale(1)",
            duration: 0.2
          })
          },
        onLeaveBack: () => {
          gsap.to(this.footer.nativeElement, {
            opacity: 0,
            transform: "scale(0.9)",
            duration: 0.2
          })
        }
        }
      }
    )
  }
}
