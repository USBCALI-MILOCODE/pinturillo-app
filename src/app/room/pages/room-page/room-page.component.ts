import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-room-page',
  templateUrl: './room-page.component.html',
  styleUrls: ['./room-page.component.css']
})
export class RoomPageComponent implements OnInit {

  userList = [
    { nick: 'Arturoto', points: 25, img: './assets/svg/avatar.svg' },
    { nick: 'JohnDoe', points: 15, img: './assets/svg/avatar.svg' },
    { nick: 'JaneSmith', points: 10, img: './assets/svg/avatar.svg' },
    { nick: 'MikeJohnson', points: 20, img: './assets/svg/avatar.svg' },
    { nick: 'EmilyDavis', points: 30, img: './assets/svg/avatar.svg' },
    { nick: 'ChrisBrown', points: 5, img: './assets/svg/avatar.svg'}
  ]

  constructor() { }

  ngOnInit() {
  }

}
