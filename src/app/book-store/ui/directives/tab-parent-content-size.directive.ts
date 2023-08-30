import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appTabParentContentSize]',
})
export class TabParentContentSizeDirective {
  //#region @Hostbinding

  @HostBinding('style.min-height') mw = '80vh';

  //#endregion
}
