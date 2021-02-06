import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})

export class GalleryComponent implements OnInit {

  constructor(private titleService: Title) {
      this.titleService.setTitle('My Photo Gallery');
  }

  ngOnInit() {
      const length = document.querySelectorAll('.thumbnail').length;

      /* replace thumbnail to real image */
      for (let i = 1; i <= length; i++) {
          const image = <HTMLImageElement> document.getElementById(`sight-${i}`);
          const src = image.getAttribute('data-src');
          const imgObj = new Image();
          imgObj.src = src;
          imgObj.onload = () => {
              image.src = src;
              image.setAttribute('class', 'thumbnails complete');
          };
      }
  }

}
