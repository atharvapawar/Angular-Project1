import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SideComponent } from './side/side.component';
import { MainComponent } from './main/main.component';
import { ContactModule } from './contact/contact.module';
import { FormsModule } from '@angular/forms';
import { FahrPipe } from './fahr.pipe';
import { CapsPipe } from './caps.pipe';
import { RepeatPatternPipe } from './repeat-pattern.pipe';
import { CustomHighlightDirective } from './custom-highlight.directive';
import { ToggleVisibilityDirective } from './toggle-visibility.directive';
import { DirectiveExampleComponent } from './directive-example/directive-example.component';
import { PipesExampleComponent } from './pipes-example/pipes-example.component';
import { DatabindingExamplesComponent } from './databinding-examples/databinding-examples.component';
import { HomeComponent } from './home/home.component';
import { LoansComponent } from './loans/loans.component';
import { AddLoanComponent } from './loans/add-loan/add-loan.component';
import { EditLoanComponent } from './loans/edit-loan/edit-loan.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { StudentFilterComponent } from './student-filter/student-filter.component';
import { NamefilterPipe } from './namefilter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SideComponent,
    MainComponent,
    FahrPipe,
    CapsPipe,
    RepeatPatternPipe,
    CustomHighlightDirective,
    ToggleVisibilityDirective,
    DirectiveExampleComponent,
    PipesExampleComponent,
    DatabindingExamplesComponent,
    HomeComponent,
    LoansComponent,
    AddLoanComponent,
    EditLoanComponent,
    ProductComponent,
    ProductDetailsComponent,
    PagenotfoundComponent,
    StudentFilterComponent,
    NamefilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatSlideToggleModule,
    ContactModule,
    FormsModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
