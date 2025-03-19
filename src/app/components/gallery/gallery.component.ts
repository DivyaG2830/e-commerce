import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  selectedImageUrl: string;

  @Input() images: string[];

  constructor() { }

  ngOnInit(): void {
    if(this.hasImage)
    {
      this.selectedImageUrl = this.images[0];
    }
  }

  get hasImage()
  {
    return this.images?.length>0;
  }

  changeSelectedImage(imageUrl : string)
  {
    this.selectedImageUrl = imageUrl;
  }
}
