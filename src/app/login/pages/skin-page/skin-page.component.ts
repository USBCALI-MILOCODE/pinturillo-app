import { Component } from '@angular/core';

@Component({
  selector: 'skin-page',
  templateUrl: './skin-page.component.html',
  styleUrls: ['./skin-page.component.css']
})
export class SkinPageComponent {

  avatars = [ 
    { img: './assets/svg/avatar.svg'},
    { img: './assets/svg/avatar.svg'},
    { img: './assets/svg/avatar.svg'},
    { img: './assets/svg/avatar.svg'},
    { img: './assets/svg/avatar.svg'},
    { img: './assets/svg/avatar.svg'},
    { img: './assets/svg/avatar.svg'},
  ]
}
