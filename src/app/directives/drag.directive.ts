import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { getDpi } from '../utils/common.util';

@Directive({
  selector: '[appDrag]'
})
export class DragDirective {
  @Input() componentType: string | undefined;
  // 拖动占位符
  @Input() dragPlaceholder: HTMLCanvasElement | undefined;
  el: ElementRef;

  canvasConfig = {
    width: 87,
    height: 36,
  };


  constructor(el: ElementRef) {
    this.el = el;
    this.el.nativeElement.setAttribute('draggable', true);
    this.el.nativeElement.style.cursor = 'move';
  }

  @HostListener('dragstart', ['$event'])
  dragstart(e: any) {
    const dt = e.dataTransfer;
    dt.effectAllowed = 'copy';
    dt.setData('text/plain', this.componentType);

    this.dragWidthCustomerImage(e);
  }

  // 拖拽完成
  @HostListener('dragend', ['$event'])
  dragend(e: any) {
    this.resetCanvas(this.dragPlaceholder);
  }

  dragWidthCustomerImage(event: any) {
    if (this.dragPlaceholder && this.componentType) {
      this.drawCanvas(this.dragPlaceholder, this.componentType);
    } else {
      alert("this.dragPlaceholder or this.componentType is undefined");
    }
    event.dataTransfer.setDragImage(this.dragPlaceholder, 25, 25);
  }

  drawCanvas(canvasEl: HTMLCanvasElement, text: string) {
    const ratio = getDpi();
    canvasEl.style.width = this.canvasConfig.width + 'px';
    canvasEl.style.height = this.canvasConfig.height + 'px';

    canvasEl.width = this.canvasConfig.width * ratio;
    canvasEl.height = this.canvasConfig.height * ratio;
    const context = canvasEl.getContext('2d');
    if (context) {
      context.clearRect(0, 0, canvasEl.width, canvasEl.height);
      context.fillStyle = '#999';
      context.fillRect(0, 0, canvasEl.width, canvasEl.height);
      // 放置文字
      context.fillStyle = '#fff';
      const fontSize = 14;
      context.font = `${fontSize * ratio}px Arial`;
      context.fillText(text, 0, canvasEl.height / 2);
    } else {
      alert('context is undefined');
    }
  }

  resetCanvas(canvasEl: any) {
    canvasEl.style.width = '0px';
    canvasEl.style.height = '0px';
    canvasEl.width = 0;
    canvasEl.height = 0;
  }
}