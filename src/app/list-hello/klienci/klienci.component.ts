import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-klienci',
  templateUrl: './klienci.component.html',
  styleUrls: ['./klienci.component.scss']
})
export class KlienciComponent implements OnInit {
  clientsList: string[] = ['Klient1', 'Klient2', 'Klient3'];
  constructor() {}

  ngOnInit() {}
}
