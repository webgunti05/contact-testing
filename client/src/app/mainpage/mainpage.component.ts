import { Component, OnInit } from '@angular/core';
import { NgxCarousel } from 'ngx-carousel';
import { PostService } from '../services/post.service';

@Component({
  selector: 'Mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  items: Array<any> = []
  postBread : Array<any>
  public carouselTileItems: Array<any>;
  public carouselTile: NgxCarousel;

  constructor(private breadSvc: PostService) {
    this.items = [
      { name: 'assets/images/slide1.jpg' },
      { name: 'assets/images/slide1.jpg' },
      { name: 'assets/images/slide1.jpg' },
      { name: 'assets/images/slide1.jpg' },
      { name: 'assets/images/slide1.jpg' },
      { name: 'assets/images/slide1.jpg' },
      { name: 'assets/images/slide1.jpg' },
      { name: 'assets/images/slide1.jpg' },
      { name: 'assets/images/slide1.jpg' },
      { name: 'assets/images/slide1.jpg' },
      { name: 'assets/images/slide1.jpg' },
      { name: 'assets/images/slide1.jpg' }
     
    ]

    this.getPostBread();

  }

  ngOnInit() {
    this.carouselTileItems = [
      { name: 'assets/images/slide1.jpg' },
      { name: 'assets/images/slide1.jpg' },
      { name: 'assets/images/slide1.jpg' },
      { name: 'assets/images/slide1.jpg' },
      { name: 'assets/images/slide1.jpg' },
      { name: 'assets/images/slide1.jpg' },
      { name: 'assets/images/slide1.jpg' },
      { name: 'assets/images/slide1.jpg' },
      { name: 'assets/images/slide1.jpg' },
      { name: 'assets/images/slide1.jpg' },
      { name: 'assets/images/slide1.jpg' },
      { name: 'assets/images/slide1.jpg' }
    ];
 
    this.carouselTile = {
      grid: {xs: 1, sm: 3, md: 3, lg: 5, all: 0},
      slide: 2,
      speed: 400,
      animation: 'lazy',
      point: {
        visible: true
      },
      load: 2,
      touch: true,
      easing: 'ease'
    }
  }

  public carouselTileLoad(evt: any) {
 
    const len = this.carouselTileItems.length
    if (len <= 30) {
      for (let i = len; i < len + 10; i++) {
        this.carouselTileItems.push(i);
      }
    }
 
  }

  getPostBread(){
    return this.breadSvc.getPostBread()
    .subscribe(result => {
      console.log(result);
      this.postBread = result.postBread;
    })
  }

}
