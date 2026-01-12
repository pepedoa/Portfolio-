import { Component,AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  imports: [CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact implements AfterViewInit{
  enviadoExitoso: boolean = false;
  enviadoFallido: boolean = false;
  cerrandoAlerta: boolean = false;
  
  ngAfterViewInit() {//se ejecuta despues de  que se haya  cargado;
    const MAX_LENGTH = 300;
    const textarea = document.getElementById('mensaje');
    const contador = document.getElementById('contador');

    if (textarea instanceof HTMLTextAreaElement  && contador instanceof HTMLElement ) {//verifico que sea un textarea

      textarea.addEventListener("input", () => {
        if (textarea.value.length > MAX_LENGTH) {
          textarea.value = textarea.value.slice(0, MAX_LENGTH);
        }

        const longitud = textarea.value.length;
        contador.textContent = `${longitud} / 300 caracteres`;
      });
    }


  }


  private endpoint = 'https://formspree.io/f/xojjqjpz'; // Pon tu ID real aquí

  enviarFormulario(event: Event) {
  event.preventDefault(); // Evita el envío por defecto del formulario

  const form = event.target as HTMLFormElement;//obtengo el formulario
  
  const datos = {
    name: (form.querySelector('#nombre') as HTMLInputElement).value,
    email: (form.querySelector('#email') as HTMLInputElement).value,
    message: (form.querySelector('#mensaje') as HTMLTextAreaElement).value
  };

 

  fetch(this.endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(datos)
  })
  .then(async response => {
    // Usamos async/await dentro del then para que sea más fácil de leer
    if (response.ok) {
      form.reset();
      this.enviadoExitoso = true;

      // Tiempo visible antes de cerrar
      setTimeout(() => {
        this.cerrandoAlerta = true; // activa animación de salida

        // Esperar a que termine la animación
        setTimeout(() => {
          this.enviadoExitoso = false;
          this.cerrandoAlerta = false;
        }, 500); // duración de slideOut
      }, 5000); // visible 5 segundos

    } else {
      const errorData = await response.json();
      console.error('Error de Formspree:', errorData);
        this.enviadoFallido = true;

      // Tiempo visible antes de cerrar
      setTimeout(() => {
        this.cerrandoAlerta = true; // activa animación de salida

        // Esperar a que termine la animación
        setTimeout(() => {
          this.enviadoFallido = false;
          this.cerrandoAlerta = false;
        }, 500); // duración de slideOut
      }, 5000); // visible 5 segundos
    }
  })
  .catch(error => {
    console.error('Error de red:', error);
    alert('No se pudo conectar con el servidor.');
  });
}




}
