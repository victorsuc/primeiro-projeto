import { LogService } from './../shared/log.service';
import { Injectable } from '@angular/core';
 
@Injectable()
export class CursosService {

  cursos: string[] = ['Java','Ext JS', 'Angular', '.NET'];

  constructor(private _logService: LogService) { 
    console.log('CursosService');
  }
  
  getCursos(){
    this._logService.consoleLog('obtendo lista de cursos');
    return this.cursos;
  }

  addCurso(curso: string){
    this._logService.consoleLog('criando um novo curso ' + curso);
    this.cursos.push(curso);
  }
}
