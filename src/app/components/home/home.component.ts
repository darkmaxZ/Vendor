import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'vendor-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  slides = [
    {img: "assets/images/ctx3030.jpg"},
    {img: "assets/images/goldmaxx-power-lg.jpg"},
    {img: "assets/images/minelab.jpg"},
    {img: "assets/images/st-garrett.jpg"}
  ];
  slideConfig = {
    autoplay:true,
    autoplaySpeed:1500,
    arrows:true,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
 
  addSlide() {
    this.slides.push({img: "http://placehold.it/350x150/777777"})
  }
 
  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }

  ngOnInit() {
  }
}
