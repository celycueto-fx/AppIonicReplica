import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.page.html',
  styleUrls: ['./main-dashboard.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class MainDashboardPage implements OnInit {

  constructor() {

  }

  ngOnInit() {
  }

}
