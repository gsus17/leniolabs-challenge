import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { ToggleComponent } from './toggle/toggle.component';

/**
 * Shared module.
 */
@NgModule({
  declarations: [FooterComponent, HeaderComponent, SearchComponent, ToggleComponent],
  exports: [FooterComponent, HeaderComponent, SearchComponent, ToggleComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class SharedModule { }
