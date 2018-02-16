import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-awesome',
  template: `
              <div style="text-align:center">
                <h3>Awesome content right here!</h3>
              </div>
            `,
  styleUrls: ['./awesome.component.css']
})
export class AwesomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
