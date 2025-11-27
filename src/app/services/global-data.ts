import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class GlobalData {
  
  private darkMode = new BehaviorSubject<boolean>(false);//creo variable y por defecto la pongo en false (modo claro), pero se ira actualizando si le doy al boton del tema
  darkMode$ = this.darkMode.asObservable();//podra ser utilizada por otros componente/servicios si se suscriben en su .ts

  toggleDarkMode() {
    const newValue = !this.darkMode.value;//comprueba el valor actual y lo inviernte: si era false pasa a true, y viceversa.  para poder ir cambiando el tema 
    this.darkMode.next(newValue);//actualiza el valor, y asi  la comprobacion funcionara 

    if (newValue) {//comprueba y dependiendo del valor pone o cquita la clase
      document.body.classList.add('activo');
      document.body.classList.remove('inactivo');
    } else {
      document.body.classList.add('inactivo');
      document.body.classList.remove('activo');
    }
  }

  getDarkMode(): boolean {//esta funcion es olo por si quiero saber  el estado actual del modo oscuro sin suscribirme
    return this.darkMode.value;
  }
   

    
  
}
