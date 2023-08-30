import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appTabContentSize]',
})
export class TabContentSizeDirective {
  //#region @Hostbinding

  /**
   * @description: Tag any element with a min-height property of 70vh.
   * * This will assertain the components inside a mat-tab component is
   * of a certain width
   */
  @HostBinding('style.min-height') mw = '70vh';

  //#endregion
}
