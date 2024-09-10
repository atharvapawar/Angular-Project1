import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
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
import { DirectivesExampleComponent } from './directives-example/directives-example.component';
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
import { TdfComponent } from './tdf/tdf.component';

@NgModule(
  {
    //direct childrens - components/Pipes/Directives of app module
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
      DirectivesExampleComponent,
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
      NamefilterPipe,
      TdfComponent
    ],
    // other Modules support required for App Module to work properly
    // inviting friends family to your house
    imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      MatButtonModule,
      MatIconModule,
      MatSlideToggleModule,
      ContactModule,
      FormsModule
    ],
    // child components who are all going to help other modules - goes out of app module
    // going to your friend's house
    exports:[],
    // who are all the data suppliers for this app module - db, api, json
    providers: [],
    // Which file to access next
    bootstrap: [AppComponent]
  }
)
export class AppModule { }
