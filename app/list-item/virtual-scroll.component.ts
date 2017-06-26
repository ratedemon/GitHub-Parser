import {Component, Input, Output, EventEmitter, OnInit, ViewChild, ElementRef,Renderer} from '@angular/core';
import {ChangeEvent} from 'angular2-virtual-scroll';

@Component({
    selector: 'virtual-scroll',
    template: `
        <div class="total-padding" [style.height]="scrollHeight + 'px'"></div>
        <div class="scrollable-content" #content [style.transform]="'translateY(' + topPadding + 'px)'">
            <ng-content></ng-content>
        </div>
    `,
    styles: [`
        :host {
            overflow: hidden;
            overflow-y: auto;
            position: relative;
        }
        .scrollable-content {
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            position: absolute;
        }
        .total-padding {
            width: 1px;
            opacity: 0;
        }
    `]
})
export class VirtualScrollComponent implements OnInit {

    @Input()
    fullList: any[] = [];
    private start = window.scrollTop / window.scrollHeight * itemCount
    @Output()
    update: EventEmitter<any[]> = new EventEmitter<any[]>();

    @Output()
    change: EventEmitter<ChangeEvent> = new EventEmitter<ChangeEvent>();

    @ViewChild('content', { read: ElementRef })
    protected contentElementRef: ElementRef;

    protected scrollHeight: number;
    protected topPadding: number;

    constructor(private element: ElementRef, private renderer: Renderer) {   }

    ngOnInit() {
        this.renderer.listen(this.element.nativeElement, 'scroll', this.refresh.bind(this));
    }

    refresh() {
        requestAnimationFrame(this.calculateItems.bind(this));
    }

    private calculateDimensions() {
    let el = this.element.nativeElement;
    let content = this.contentElementRef.nativeElement;

    let items = this.fullList || [];
    let itemCount = items.length;
    let viewWidth = el.clientWidth - this.scrollbarWidth;
    let viewHeight = el.clientHeight - this.scrollbarHeight;

    let contentDimensions;
    if (this.childWidth == undefined || this.childHeight == undefined) {
        contentDimensions = content.children[0] ? content.children[0].getBoundingClientRect() : {
            width: viewWidth,
            height: viewHeight
        };
    }
    let childWidth = this.childWidth || contentDimensions.width;
    let childHeight = this.childHeight || contentDimensions.height;

    let itemsPerRow = Math.max(1, Math.floor(viewWidth / childWidth));

    return {
        itemCount: itemCount,
        viewWidth: viewWidth,
        viewHeight: viewHeight,
        childWidth: childWidth,
        childHeight: childHeight,
        itemsPerRow: itemsPerRow
        };
    }

    private calculateItems() {
      let start = Math.floor(scrollTop / scrollHeight * itemCount / itemsPerRow) * itemsPerRow;
      let end = start + viewHeight / childHeight * itemsPerRow;
      
      this.scrollHeight = childHeight * itemCount / itemsPerRow ;
      this.topPadding = childHeight * start / itemsPerRow;
      
      // emit update event
      this.update.emit(this.items.slice(start, end));
      
      // emit change event
      this.change.emit({
        start: start,
        end: end
      });
    }
}