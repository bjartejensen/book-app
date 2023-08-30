import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appMaxWidth]',
})
export class MaxWidthDirective {
  //#region @Hostbinding

  @HostBinding('style.max-width') mw = '1600px';

  //#endregion
}
