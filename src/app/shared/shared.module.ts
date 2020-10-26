import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  imports: [CommonModule, MatCardModule, MatTabsModule],
  exports: [
    // modules
    CommonModule,
    MatCardModule,
    MatTabsModule,
  ],
})
export class SharedModule {}
