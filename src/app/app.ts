import { Component, signal } from '@angular/core';




// Importa todos tus componentes
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { About } from './components/about/about';
import { Contact } from './components/contact/contact';
import { Home } from './components/home/home';
import { Projects } from './components/projects/projects';
import { Skills } from './components/skills/skills';


@Component({
  selector: 'app-root',
  imports: [Header, Footer, About, Contact, Home, Projects, Skills],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('portfolio');
}
