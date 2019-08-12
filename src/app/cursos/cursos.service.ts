import { Injectable } from '@angular/core';

@Injectable()
export class CursosService {

  cursos: string[] = ['Java','Ext JS', 'Angular', '.NET'];

  constructor() { 
    console.log('CursosService');
  }
  
  getCursos(){
    return this.cursos;
  }

  addCurso(curso: string){
    this.cursos.push(curso);
  }
}
