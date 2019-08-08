import { Component, OnInit, Input, OnChanges, DoCheck, OnDestroy, AfterContentChecked, AfterContentInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})
export class CicloComponent implements OnInit, OnChanges, DoCheck,
                                        OnDestroy, AfterContentChecked, AfterContentInit,
                                        AfterViewChecked {

  @Input() valorInicial: number = 10;

  constructor() {
    this.log('constructor');
  }

  ngOnInit() {
    this.log('ngOnInit');
  }

  ngOnChanges(){
    this.log('ngOnChanges');
  }

  ngDoCheck(){
    this.log('ngDoCheck');
  }

  ngOnDestroy(){
    this.log('ngOnDestroy');
  }

  ngAfterContentInit(){
    this.log('ngAfterContentInit');
  }

  ngAfterContentChecked(){
    this.log('ngAfterContentChecked');
  }

  ngAfterViewChecked(){
    this.log('ngAfterViewChecked');
  }

  log(hook: string){
    console.log(hook);
  }


}
