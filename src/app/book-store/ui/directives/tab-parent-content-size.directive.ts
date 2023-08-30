import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appTabParentContentSize]',
})
export class TabParentContentSizeDirective {
  //#region @Hostbinding

  /**
   * @description: Tag any element with a min-width property of 1600px
   * This will assertain the components inside a mat-tab component is
   * of a certain width
   */
  @HostBinding('style.min-height') mw = '80vh';

  //#endregion
}
