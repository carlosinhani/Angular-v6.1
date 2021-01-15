import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-key-value',
  templateUrl: './key-value.component.html',

})
export class KeyValueComponent implements OnInit {

  cursos = [
     { id: '1', nome: 'Angular'},
     { id: '2', nome: 'React'},
  ];

  cursosComparador(a: any, b: any) {
    if (a.key === b.key) {
      return 0;
    }
    return a.key > b.key ? -1 : 1;
  }

  constructor() { }

  ngOnInit() {
  }

}
