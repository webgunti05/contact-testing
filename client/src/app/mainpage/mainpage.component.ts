import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'Mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  items: Array<any> = []
  postBread : Array<any>

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
      { name: 'assets/images/slide1.jpg' },
     
    ]

    this.getPostBread();

  }

  ngOnInit() {
  }

  getPostBread(){
    return this.breadSvc.getPostBread()
    .subscribe(result => {
      console.log(result);
      this.postBread = result.postBread;
    })
  }

}
