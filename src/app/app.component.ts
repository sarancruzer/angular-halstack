import {
  Component,
  TemplateRef,
  ViewChildren,
  QueryList,
  ElementRef,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('maximumLoanAmt') maximumLoanElement: ElementRef;

  upload(event) {
    console.log('file selected!', event);

    // if (event.target.files.length == 0) {
    //   console.log('No file selected!');
    //   return;
    // }
    // let file: File = event.target.files[0];
    // after here 'file' can be accessed and used for further process
  }
}
