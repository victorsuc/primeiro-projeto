import { Injectable } from '@angular/core';

export class CursosService {

  constructor() { }
  
  getCursos(){
    return ['Java','Ext JS', 'Angular', '.NET'];
  }
}
