import { Component,AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact implements AfterViewInit{

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
      console.log('¡Éxito!');
      form.reset(); 
      alert('Mensaje enviado correctamente');
    } else {
      const errorData = await response.json();
      console.error('Error de Formspree:', errorData);
      alert('Hubo un error al enviar el formulario.');
    }
  })
  .catch(error => {
    console.error('Error de red:', error);
    alert('No se pudo conectar con el servidor.');
  });
}





}
