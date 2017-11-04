import { any } from 'codelyzer/util/function';
import { PromiseType } from 'protractor/built/plugins';
import { resolve } from 'path';
import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('myCanvas') myCanvas: ElementRef;
  public context: CanvasRenderingContext2D;
  title = 'Super Mario';

  ngOnInit() {
    this.context = (<HTMLCanvasElement>this.myCanvas.nativeElement).getContext('2d');
    this.context.fillRect(0, 0, 50, 50 );
    this.loadImage('../assets/img/tiles.png').then(image => {

    this.context.drawImage( <HTMLImageElement>image, 0, 0, 16, 16, 0, 0, 0, 16);

    });
  }

  loadImage( url ) {
      // tslint:disable-next-line:no-shadowed-variable
      return new Promise(resolve => {
        const image: HTMLImageElement = new Image();
        image.addEventListener('load', () => {
          resolve(image);
        });
        image.src = url;
      });
  }

}
