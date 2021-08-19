import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user

  constructor(
    private authService:AuthService
  ) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('vendeaseuser'))
  }

  logout(){
    this.authService.logoutUser()
  }

}
