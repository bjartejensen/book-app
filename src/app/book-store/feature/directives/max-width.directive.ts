import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appMaxWidth]',
})
export class MaxWidthDirective {
  //#region @Hostbinding

  /**
   * @description: Tag any element with a max-width property of 1600px
   */
  @HostBinding('style.max-width') mw = '1600px';

  //#endregion
}
