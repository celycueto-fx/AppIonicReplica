import { FinishComponent } from './components/finish/finish.component';
import { AccountInfoComponent } from './components/account-info/account-info.component';
import { NumbercellComponent } from './components/numbercell/numbercell.component';
import {  Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { MatIconModule } from '@angular/material/icon';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { MatStepper } from '@angular/material/stepper'; // Importa MatStepper


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS , useValue: { displayDefaultIndicatorType: false }
  }],
  imports: [FinishComponent,AccountInfoComponent,
    NumbercellComponent,IonicModule, CommonModule,   MatFormFieldModule,
     FormsModule,ReactiveFormsModule, MatStepperModule ,MatIconModule ]
})
export class RegisterPage implements OnInit{
  isLinear = true;


  @ViewChild('stepper') stepper!: MatStepper;
  titleSteps='NÚMERO CELULAR'

  ngOnInit() {
    // Llamada inicial para configurar los títulos
    this.cambiarTitulos({ selectedIndex: 0 } as any);
  }

  cambiarTitulos(event: any) {

    const pasoActual = event.selectedIndex;
    if (this.stepper) {

      if (pasoActual === 0) {
        this.titleSteps= 'NÚMERO CELULAR';
        // Modifica los demás títulos según el paso actual
      } else if (pasoActual === 1) {
        this.titleSteps= 'DATOS DE CUENTA';
        // Modifica los demás títulos según el paso actual
      } else if (pasoActual === 2) {
        this.titleSteps = 'FINALIZAR';
        // Modifica los demás títulos según el paso actual
      }
    }
  }

   avanzarPaso() {
    this.stepper.next(); // Avanza al siguiente paso
  }

  avanzarAlSiguientePaso() {
    this.stepper.next(); // Avanza al siguiente paso
  }




}
