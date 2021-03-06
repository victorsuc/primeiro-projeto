import { Component, OnInit, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://victor.com';
  cursoAngular: boolean = true;
  urlImagem = 'http://lorempixel.com/400/200/sports/';
  valorAtual: string = '';
  valorSalvo: string = '';
  isMouseOver: boolean = false;
  nome: string = 'abc';
  
  pessoa: any = {
    nome: 'victor',
    idade: 23
  }

  nomeDoCurso: string = 'Angular';
  valorInicial = 15;

  constructor() { }

  getValor(){
    return 1;
  }

  getCurtirCurso(){
    return true;
  }

  botaoClicado(){
    alert('BOTÃO CLICADO!')
  }

  onKeyUp(evento: KeyboardEvent){
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor){
this.valorSalvo = valor;
  }

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }

  onMudouValor(evento){
    console.log(evento.novoValor); 
  }

  ngOnInit() {
  }

}
