import { RegisterService } from './../../../../services/register.service';
import { CUSTOM_ELEMENTS_SCHEMA, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { ModelRegister } from 'src/app/utils/model-register';
import { ModelFinishRegister } from 'src/app/utils/modelFinishRegister';




@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [IonicModule,
    CommonModule, FormsModule,
    ReactiveFormsModule,
    MatIconModule]
})
export class AccountInfoComponent implements OnInit {

  @Output() avanzarAlSiguientePaso = new EventEmitter<void>();

  showPassword: boolean = false; // Variable para controlar la visibilidad de la contraseña
  showPasswordConfirm: boolean = false; // Variable para controlar la visibilidad de la contraseña
  listTypeDocuments: ModelRegister[] = []
  options:ModelRegister[] = [];

  formDocId!: FormGroup;
  formConfigAccount!: FormGroup;
  isSuccesAccountInfo=false;
  constructor(private apiTypeDocuments$: RegisterService,
   ) {

    this.formDocId =  new FormGroup({
      typeDoc:  new FormControl('',),
      numDoc: new FormControl( ''),
      documentIssueDate: new FormControl(''),
      birthDate: new FormControl(''),
      gender: new FormControl(''),


    });

    //form config accoun

    this.formConfigAccount= new FormGroup({
      email:  new FormControl(['', [Validators.required, Validators.email]]),
      confirmEmail: new FormControl( ['', [Validators.required, Validators.email]]),
      securityPin: new FormControl(['', Validators.required]),
      confimSecurityPin: new FormControl(['', Validators.required]),

    });


    this.formDocId.reset(); // Esto limpiará todos los campos del formulario
    this.formConfigAccount.reset(); // Esto limpiará todos los campos del formulario

    }

  ngOnInit() {
    this.getTypeDocuments();
    //this.createFormConfigAccount(); //form de datos de configuracion de la cuenta
    console.log(this.apiTypeDocuments$.FormListRegister)
  }


  togglePassword() {
    this.showPassword = !this.showPassword; // Cambia el estado de showPassword
  }


  togglePasswordConfirm() {
    console.log( this.showPasswordConfirm)
    this.showPasswordConfirm = !this.showPasswordConfirm; // Cambia el estado de showPassword
  }

  getTypeDocuments = (): void => {

    this.apiTypeDocuments$.getypeDocumentsApi().subscribe((res: any) => {
      this.options = res;
    })
  }

  saveFormAccountInfo=():void=>{


      let infoAccount:ModelFinishRegister={
        infoDocId: this.formDocId.value,
        infoConfigAccount:this.formConfigAccount.value
      }
      this.apiTypeDocuments$.FormListRegister.push(infoAccount);



  }

  avanzarPaso() {

    if( this.formConfigAccount.valid){
      this.avanzarAlSiguientePaso.emit();
      this.isSuccesAccountInfo=false;
      this.saveFormAccountInfo();
    }else{
      this.isSuccesAccountInfo=true;
    }

  }

  compararEmails(emailKey:String,confirmKey:String) {

      const email = this.formConfigAccount.get(`${emailKey}`)?.value;
      const confirmarEmail = this.formConfigAccount.get(`${confirmKey}`)?.value;;

      if (email !== confirmarEmail) {
        this.formConfigAccount.get('confirmEmail')?.setErrors({ notMatched: true });
      } else {
        this.formConfigAccount.get('confirmEmail')?.setErrors(null);
      }

  }



}
