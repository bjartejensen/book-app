import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appTabContentSize]',
})
export class TabContentSizeDirective {
  //#region @Hostbinding

  @HostBinding('style.min-height') mw = '70vh';

  //#endregion
}
