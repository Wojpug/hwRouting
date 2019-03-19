import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faktury',
  templateUrl: './faktury.component.html',
  styleUrls: ['./faktury.component.scss']
})
export class FakturyComponent implements OnInit {
  flag = true;
  constructor() {}

  ngOnInit() {}

  toggleButton() {
    this.flag = !this.flag;
  }
}
