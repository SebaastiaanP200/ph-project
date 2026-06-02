import { Component } from '@angular/core';


@Component({
  selector: 'app-preview-image',
  imports: [],
  templateUrl: './preview-image.html',
  styleUrl: './preview-image.scss',
})
export class PreviewImage {

  showPreview: boolean = true;

  changeView() :boolean {
    this.showPreview = !this.showPreview;
    return this.showPreview;
  }

  







}
