import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { ButtonDirective } from './directives/button.directive';
import { LoaderComponent } from './components/loader/loader.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MenuComponent } from './components/menu/menu.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { GreetingsComponent } from './components/greetings/greetings.component';
import { ChallengeItemComponent } from './components/challenge-item/challenge-item.component';

@NgModule({
  declarations: [
    LoaderComponent,
    ButtonDirective,
    MenuComponent,
    ToolbarComponent,
    GreetingsComponent,
    ChallengeItemComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatTabsModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
  ],
  exports: [
    // modules
    CommonModule,
    MatCardModule,
    MatTabsModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatSidenavModule,

    // Components
    LoaderComponent,
    MenuComponent,
    ToolbarComponent,
    GreetingsComponent,
    ChallengeItemComponent,
    // Directives
    ButtonDirective,
  ],
})
export class SharedModule {}
