import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'admin-option-page',
  templateUrl: './admin-option-page.component.html',
  styleUrls: ['./admin-option-page.component.css']
})
export class AdminOptionPageComponent implements OnInit {

  options = [
    { icon: 'bx bxs-invader', title: 'rooms', link: '/admin/rooms'},
    { icon: 'bx bxs-category-alt', title: 'themes', link: '/admin/themes'},
    { icon: 'bx bxs-user-detail', title: 'users', link: '/admin/users'},
  ]
  constructor() { }

  ngOnInit() {
  }

}
