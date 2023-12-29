import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-successful-registration',
  templateUrl: './successful-registration.page.html',
  styleUrls: ['./successful-registration.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class SuccessfulRegistrationPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
 goToHome=()=> {  this.router.navigate(['/main-dashboard']);}
}
