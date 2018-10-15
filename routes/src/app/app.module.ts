import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { HomeComponent } from './my-app/home/home.component';
import { AboutComponent } from './my-app/about/about.component';
import { PortfolioComponent } from './my-app/portfolio/portfolio.component';
import { BlogComponent } from './my-app/blog/blog.component';
import { ContactUsComponent } from './my-app/contact-us/contact-us.component';

const appRoutes: Routes = [
  { path: 'home' , component: HomeComponent},
  { path: 'about' , component: AboutComponent},
  { path: 'blog' , component: BlogComponent},
  { path: 'contact-us' , component: ContactUsComponent},
  { path: 'portfolio' , component: PortfolioComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    PortfolioComponent,
    BlogComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
