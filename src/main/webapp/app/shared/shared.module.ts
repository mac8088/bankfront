import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { EtcSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [EtcSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [EtcSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EtcSharedModule {
  static forRoot() {
    return {
      ngModule: EtcSharedModule
    };
  }
}
