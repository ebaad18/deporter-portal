import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  title = 'Deporter Logistics';

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event'])

  onWindowScroll(e) {
    let element = document.querySelector('.toolbar');
    if (window.pageYOffset > element.clientHeight) {
      element.classList.add('toolbar-inverse');
    } else {
      element.classList.remove('toolbar-inverse');
    }
  }

}
