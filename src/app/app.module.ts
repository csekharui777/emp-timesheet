import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './routes/app-routing.module';
import { AppComponent } from './layout/app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './screens/home/home.component';
import { ContactUsComponent } from './screens/contact-us/contact-us.component';
import { AboutUsComponent } from './screens/about-us/about-us.component';
import { ServicesComponent } from './screens/services/services.component';
import { NotFoundComponent } from './screens/not-found/not-found.component';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { WebappLayoutComponent } from './layout/webapp-layout/webapp-layout.component';
import { LoginComponent } from './modules/auth/login/login.component';
import { RegisterComponent } from './modules/auth/register/register.component';
import { AdminHeaderComponent } from './components/admin-header/admin-header.component';
import { AdminSidemenuComponent } from './components/admin-sidemenu/admin-sidemenu.component';
import { AdminFooterComponent } from './components/admin-footer/admin-footer.component';
import { SuccessBtnDirective } from './success-btn.directive';
import { DoColorDirective } from './directives/do-color.directive';
import { MyDataPipe } from './my-data.pipe';
import { AdhaarmaskPipe } from './adhaarmask.pipe';
import { FilterActiveUserPipe } from './filter-active-user.pipe';
import { ChiildOneComponent } from './components/chiild-one/chiild-one.component';
import { ChiildTwoComponent } from './components/chiild-two/chiild-two.component';
import { ChiildThreeComponent } from './components/chiild-three/chiild-three.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ToggleElementDirective } from './directives/toggle-element.directive';
import { ReactiveFormsModule } from '@angular/forms';
import { SampleInterceptor } from './sample.interceptor';
import { HeaderInterceptor } from './interceptors/header.interceptor';
import { LoggerInterceptor } from './interceptors/logger.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactUsComponent,
    AboutUsComponent,
    ServicesComponent,
    NotFoundComponent,
    AuthLayoutComponent,
    MainLayoutComponent,
    WebappLayoutComponent,
    LoginComponent,
    RegisterComponent,
    AdminHeaderComponent,
    AdminSidemenuComponent,
    AdminFooterComponent,
    SuccessBtnDirective,
    DoColorDirective,
    MyDataPipe,
    AdhaarmaskPipe,
    FilterActiveUserPipe,
    ChiildOneComponent,
    ChiildTwoComponent,
    ChiildThreeComponent,
    ToggleElementDirective
  ],
  exports:[
    AdhaarmaskPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi:true,
  },
  {
    provide: HTTP_INTERCEPTORS, useClass: LoggerInterceptor, multi:true,
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
