import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  template: '<div class="notification-div">' +
    '<p>This website is still in development.</p></div>',
  styles: [".notification-div{margin: 10px 0px; padding: 10px 20px; background-color: palegreen; text-align: center}", "p{font-size: 21px}"]
})
export class NotificationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
