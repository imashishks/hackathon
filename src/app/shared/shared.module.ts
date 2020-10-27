import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { ButtonDirective } from './directives/button.directive';
import { LoaderComponent } from './components/loader/loader.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatTabsModule,
    MatInputModule,
    MatProgressSpinnerModule,
  ],
  exports: [
    // modules
    CommonModule,
    MatCardModule,
    MatTabsModule,
    MatInputModule,
    MatProgressSpinnerModule,

    // Components
    LoaderComponent,

    // Directives
    ButtonDirective,
  ],
  declarations: [LoaderComponent, ButtonDirective],
})
export class SharedModule {}
