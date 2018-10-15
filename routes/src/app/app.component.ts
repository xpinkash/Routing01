import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  logoImageUrl = "https://www.qbrobotics.com/wp-content/uploads/2018/03/sample-logo.png";
  
  true = true;
  public font_size ="12px";
  public fontfam = "Arial";

  ngOnInit(){
    
  }
  
}
