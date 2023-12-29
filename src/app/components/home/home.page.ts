import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent,IonSpinner } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent,IonSpinner,HttpClientModule],
})
export class HomePage {
  constructor(private router: Router) {

      setTimeout(() => {
        this.router.navigate(['/entrance']);
      }, 2000); // 5000 milisegundos = 5 segundos

  }

  // Función para navegar después de un retraso de 5 segundos

}
