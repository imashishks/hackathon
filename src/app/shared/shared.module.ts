import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { ButtonDirective } from './directives/button/button.directive';
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
import { TagsDirective } from './directives/tags/tags.directive';
import { FilterComponent } from './components/filter/filter.component';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  declarations: [
    ButtonDirective,
    TagsDirective,

    LoaderComponent,
    MenuComponent,
    ToolbarComponent,
    GreetingsComponent,
    ChallengeItemComponent,
    FilterComponent,
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
    MatRadioModule,
    MatCheckboxModule,
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
    MatRadioModule,
    MatCheckboxModule,

    // Components
    LoaderComponent,
    MenuComponent,
    ToolbarComponent,
    GreetingsComponent,
    ChallengeItemComponent,
    FilterComponent,
    // Directives
    ButtonDirective,
    TagsDirective,
  ],
})
export class SharedModule {}
