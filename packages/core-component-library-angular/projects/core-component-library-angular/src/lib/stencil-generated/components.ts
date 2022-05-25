/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';
import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import type { Components } from '@enreach/core-component-library/dist/components';

import { defineCustomElement as defineClButton } from '@enreach/core-component-library/dist/components/cl-button.js';
import { defineCustomElement as defineClChip } from '@enreach/core-component-library/dist/components/cl-chip.js';
import { defineCustomElement as defineClIcon } from '@enreach/core-component-library/dist/components/cl-icon.js';
import { defineCustomElement as defineClScrollWrapper } from '@enreach/core-component-library/dist/components/cl-scroll-wrapper.js';


export declare interface ClButton extends Components.ClButton {}

@ProxyCmp({
  defineCustomElementFn: defineClButton,
  inputs: ['disabled', 'error', 'iconName', 'name', 'processing', 'selected', 'small', 'type', 'variant']
})
@Component({
  selector: 'cl-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['disabled', 'error', 'iconName', 'name', 'processing', 'selected', 'small', 'type', 'variant']
})
export class ClButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ClChip extends Components.ClChip {
  /**
   * Gets emitted on a click on the chip. An object that contains the properties 'id' and 'selected' is emitted.
The latter indicates the new 'selected' value after the click event on the chip element. 
   */
  clicked: EventEmitter<CustomEvent<{ id: string; selected: boolean }>>;
  /**
   * Gets emitted on a click on the icon in the chip. An object that contains the properties 'id' and 'selected' is
emitted. The latter indicates the new 'selected' value after the click event on the chip element. 
   */
  iconClicked: EventEmitter<CustomEvent<{ id: string; selected: boolean }>>;

}

@ProxyCmp({
  defineCustomElementFn: defineClChip,
  inputs: ['counter', 'disabled', 'iconLeft', 'iconName', 'readOnly', 'selected', 'small']
})
@Component({
  selector: 'cl-chip',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['counter', 'disabled', 'iconLeft', 'iconName', 'readOnly', 'selected', 'small']
})
export class ClChip {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['clicked', 'iconClicked']);
  }
}


export declare interface ClIcon extends Components.ClIcon {}

@ProxyCmp({
  defineCustomElementFn: defineClIcon,
  inputs: ['ariaLabel', 'fillColor', 'name', 'size']
})
@Component({
  selector: 'cl-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['ariaLabel', 'fillColor', 'name', 'size']
})
export class ClIcon {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ClScrollWrapper extends Components.ClScrollWrapper {}

@ProxyCmp({
  defineCustomElementFn: defineClScrollWrapper,
  inputs: ['maxHeight', 'persistent', 'small', 'thumbOnly']
})
@Component({
  selector: 'cl-scroll-wrapper',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['maxHeight', 'persistent', 'small', 'thumbOnly']
})
export class ClScrollWrapper {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
