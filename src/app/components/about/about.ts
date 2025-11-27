import { Component, HostListener,AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About implements AfterViewInit {

 ngAfterViewInit() {//se ejecuta despues de  que se haya  cargado
    const items = document.querySelectorAll('.timeline-item');//selecciono todos los elementos con esa clase

    const observer = new IntersectionObserver((entries) => {//creo esta funcion para que el observ amedida que detecta los items ejecute esto
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible'); // aparece al bajar
        } else {
          entry.target.classList.remove('visible'); // desaparece al subir
        }
      });
    }, { threshold: 0.5
      
     }); // 20% visible para activar

    items.forEach(item => observer.observe(item));//le digo al boserv estate atento a estos ítems, y una vez te aparezcan, ves haciéndolo de antes.
  }
 

}
