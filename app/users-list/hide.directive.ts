import {Directive, ElementRef, Renderer, HostListener} from '@angular/core';

@Directive({
  selector: '[hiddening]'
})
export class HideDirective{
  constructor(private elem: ElementRef, private renderer: Renderer){
    
  }
  @HostListener('window:scroll') onPageHide(){
    // console.log(this.elem, this.renderer);
    // this.renderer.setElementProperty(this.elem.nativeElement, 'display', 'none');
    // console.dir(this.elem.nativeElement.children[1].children[0]);
    // this.elem.nativeElement.children[1].children[0].style.display = "none";
    let img = this.elem.nativeElement.children[1].children[0];
    let position = img.getBoundingClientRect().top;
    // console.log(window.innerHeight);
    if(position+100 < 0 || position){
      img.style.opacity = '0';
    }else{
      img.style.opacity='1';
    }
  }
}