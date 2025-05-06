import { Component, AfterViewInit } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
  ngAfterViewInit() {
    const tl = gsap.timeline({ delay: 0.3 });

    tl.from('.hero-heading', {
      opacity: 0,
      y: 60,
      skewY: 5,
      duration: 1.2,
      ease: 'power4.out'
    })
    .from('.hero-subtext', {
      opacity: 0,
      x: -30,
      duration: 1.1,
      ease: 'power3.out'
    }, "-=0.8")
    .from('.hero-cta button', {
      opacity: 0,
      y: 40,
      scale: 0.9,
      duration: 0.6,
      ease: 'back.out(1.7)'
    }, "-=0.6")
    .from('.hero-cta .btn-link', {
      opacity: 0,
      y: 40,
      duration: 0.6,
      ease: 'back.out(1.7)'
    }, "-=0.5")
    .from('.hero-visual img', {
      opacity: 0,
      scale: 0.85,
      duration: 1.2,
      ease: 'power2.out'
    }, "-=1");
  }
}
