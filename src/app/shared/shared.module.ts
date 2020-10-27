import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  imports: [CommonModule, MatCardModule, MatTabsModule, MatInputModule],
  exports: [
    // modules
    CommonModule,
    MatCardModule,
    MatTabsModule,
    MatInputModule,
  ],
})
export class SharedModule {}
