import {Directive, HostListener, ElementRef, Renderer} from '@angular/core';

@Directive({
  selector: '[scrolling]'
})
export class ScrollDirective{
  constructor(private element: ElementRef, private renderer: Renderer){}
  @HostListener('window:scroll') onScroll(){
    let body = document.body,
    html = document.documentElement;

    let height = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );
    // console.log('scroll', window.pageYOffset, height, window.innerHeight,this.element.nativeElement);
    let images = document.querySelectorAll('.main__list .info__pic');
    // console.log(images.length);
    
    if(window.pageYOffset+1>height-window.innerHeight){
      this.element.nativeElement.click();
    }
  }
}