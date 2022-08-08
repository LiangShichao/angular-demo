import { Directive, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { DropDataInterface } from '@interfaces/drag.interfaces';

@Directive({
  selector: '[appDrop]'
})
export class DropDirective {
  el: ElementRef;
  @Input() dropData: { id: string, type: string } = { id: 'defaultId', type: 'defaultType' };
  @Output() dropEvent: EventEmitter<DropDataInterface> = new EventEmitter();

  constructor(el: ElementRef) {
    this.el = el;
  }

  @HostListener('dragover', ['$event'])
  dragOver(e: any) {
    e.preventDefault();
    return false;
  }

  // 拖拽离开
  @HostListener('dragleave', ['$event'])
  dragleave(e: any) {
    e.target.style.background = '#fff';
    e.target.style.borderStyle = 'dashed';
  }

  // 拖拽完成
  @HostListener('dragend', ['$event'])
  dragend(e: any) {
  }

  @HostListener('drop', ['$event'])
  drop(e: any) {
    e.preventDefault();
    const text = e.dataTransfer.getData('text');
    this.dropEvent.emit({
      component: text,
      currentAreaInfo: this.dropData,
    });
    // 拖拽事件完成
    e.target.style.background = '#fff';
  }

  @HostListener('dragenter', ['$event'])
  dragenter(e: any) {
    e.target.style.background = '#ccc';
  }
}