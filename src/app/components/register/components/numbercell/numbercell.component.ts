
import { Component, EventEmitter, Input, OnInit, Output ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { StepperModel } from 'src/app/utils/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { MatIconModule } from '@angular/material/icon';
import { MaskitoOptions, MaskitoElementPredicateAsync } from '@maskito/core';
import { MaskitoModule } from '@maskito/angular';
import { RegisterService } from 'src/app/services/register.service';
@Component({
    selector: 'app-numbercell',
    templateUrl: './numbercell.component.html',
    styleUrls: ['./numbercell.component.scss'],
    standalone: true,
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    imports: [IonicModule, CommonModule, MatFormFieldModule,
        FormsModule, ReactiveFormsModule, MatStepperModule, MatIconModule,MaskitoModule,NgIf]
})
export class NumbercellComponent  implements OnInit {
  @Output() avanzarAlSiguientePaso = new EventEmitter<void>();

  formPhoneNumber!:FormGroup;

  isSuccesPhone =false;
  constructor(private formListReegister$: RegisterService) {
    this.formPhoneNumber= new FormGroup({

      phoneNumber: new FormControl(['', [Validators.pattern('[0-9]{10}'),Validators.required]]),


    });


   }
  phoneNumber: string = '';


  readonly phoneMask: MaskitoOptions = {
    mask: [ /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/],
  };

  readonly cardMask: MaskitoOptions = {
    mask: [
      ...Array(4).fill(/\d/),
      ' ',
      ...Array(4).fill(/\d/),
      ' ',
      ...Array(4).fill(/\d/),
      ' ',
      ...Array(4).fill(/\d/),
      ' ',
      ...Array(3).fill(/\d/),
    ],
  };

  readonly maskPredicate: MaskitoElementPredicateAsync = async (el) => (el as HTMLIonInputElement).getInputElement();

  ngOnInit() {

  }

  avanzarPaso=():void=> {
    if(this.formPhoneNumber.valid){
      this.avanzarAlSiguientePaso.emit();
      this.isSuccesPhone=true;
      this.formListReegister$.FormListRegister.push({phoneMuber: this.formPhoneNumber.value})
    }
    else{
      this.isSuccesPhone=false;

    }


  }


  writePhoneNumber=(numero: number):void=> {

   let phoneNumber= this.formPhoneNumber.get('phoneNumber')?.value ;
   phoneNumber+= numero.toString();
   this.formPhoneNumber.get('phoneNumber')?.setValue(phoneNumber) ;

  }
  deletedNumber=():void=> {
    let phoneNumber=this.formPhoneNumber.get('phoneNumber')?.value ;
    if (phoneNumber.length > 0) {

      this.formPhoneNumber.get('phoneNumber')?.setValue(phoneNumber.slice(0, -1));
     // Elimina el último carácter
    }
  }


}
