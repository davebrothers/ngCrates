import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'crates-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isCollapsed: boolean;
  @Input() title: string;

  constructor() { }

  ngOnInit() {
    this.isCollapsed = true;
  }

}
