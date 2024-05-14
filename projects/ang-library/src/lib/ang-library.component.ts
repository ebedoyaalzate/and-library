import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-ang-library',
  template: `
    <p>
      This is from a library
    </p>
  `,
  styles: [
  ]
})
export class AngLibraryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
