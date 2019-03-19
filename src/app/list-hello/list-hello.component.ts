import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-hello',
  templateUrl: './list-hello.component.html',
  styleUrls: ['./list-hello.component.scss']
})
export class ListHelloComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  putButton(routeName: string) {
    this.router.navigateByUrl(routeName);
  }
}
