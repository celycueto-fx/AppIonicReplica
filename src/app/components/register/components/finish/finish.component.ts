import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { MatIconModule } from '@angular/material/icon';

import { RegisterService } from 'src/app/services/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-finish',
  templateUrl: './finish.component.html',
  styleUrls: ['./finish.component.scss'],
  standalone:true,
  imports: [IonicModule, CommonModule, MatFormFieldModule,
      FormsModule, ReactiveFormsModule, MatStepperModule, MatIconModule]
})
export class FinishComponent  implements OnInit {
  isChecked =false;
  isReadTermConditions=false;
  noTermCondition=false;
  constructor(private apiTypeDocuments$: RegisterService,private router: Router) {


  }

  ngOnInit() {

    console.log(this.apiTypeDocuments$.FormListRegister)
  }

  onCheckboxChange(event: CustomEvent) {
  this.isChecked = (event.target as any).checked;
    // Realizar acciones según el estado del checkbox (isChecked)
this.noTermCondition=this.isChecked?false:true;
  }
  public finishRegister =()=> {
    if (this.isChecked) {

      this.router.navigate(['/successful']);
    }

  }
}
