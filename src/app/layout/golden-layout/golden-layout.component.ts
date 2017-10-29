import { Component, OnInit } from '@angular/core';
import { ComponentFactoryResolver, ComponentFactory, ComponentRef } from '@angular/core';
import { ElementRef, ViewContainerRef, ViewChild } from '@angular/core';
import { HostListener, ReflectiveInjector } from '@angular/core';

import { CONFIG } from './golden-layout.config';

declare var GoldenLayout: any;
declare var JQuery :any;

@Component({
  selector: 'app-golden-layout',
  templateUrl: './golden-layout.component.html',
  styleUrls: ['./golden-layout.component.css']
})
export class GoldenLayoutComponent implements OnInit {

  @ViewChild('layout') private rootEl: ElementRef;
  private layout: any;

  constructor(
    private el: ElementRef,
    private viewContainer: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  ngOnInit () {
    this.initGoldenLayout();
  }

  initGoldenLayout (name: string = 'main') {
    this.layout = new GoldenLayout(CONFIG[name], this.rootEl.nativeElement);
    this.layout.registerComponent(name, () => {});
    this.layout.init();
  }

  @HostListener('window:resize', ['$event'])
  public onResize(event: any): void {
    if (this.layout) {
      this.layout.updateSize();
    }
  }

}
