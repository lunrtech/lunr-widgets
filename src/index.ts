import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

/** WIDGETS */
import { WorldClockComponent } from './widgets/world-clock/world-clock.component';

/** WIDGETS */
export * from './widgets/world-clock/world-clock.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    // WIDGETS
    WorldClockComponent
  ],
  exports: [
    // WIDGETS
    WorldClockComponent
  ]
})
export class WidgetsModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: WidgetsModule,
      providers: []
    };
  }
}
