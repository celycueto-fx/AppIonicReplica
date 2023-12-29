import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-entrance',
  templateUrl: './entrance.page.html',
  styleUrls: ['./entrance.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,CommonModule, HttpClientModule]
})
export class EntrancePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public register =()=> {  this.router.navigate(['/register']);}
  public login =()=> {  this.router.navigate(['/login']);}

}
