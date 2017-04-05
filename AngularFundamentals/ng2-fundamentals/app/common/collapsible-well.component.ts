import { Component, Input } from '@angular/core';

/**
 * Select tag use to indicate where the content should be put using class or id
 * 
 * @export
 * @class CollapsibleWellComponent
 */
@Component({
    selector: 'collapsible-well',
    template: `<div (click)="toggleContent()" class="well pointable">
        <h4>
            <ng-content select="[well-title]"></ng-content>
        </h4>
        <ng-content select="[well-body]" *ngIf="visible"></ng-content>
    </div>`
})
export class CollapsibleWellComponent {
    @Input() title: string
    visible: boolean = true

    toggleContent() {
        this.visible = !this.visible
    }
}