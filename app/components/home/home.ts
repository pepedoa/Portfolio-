import { Component, OnInit } from '@angular/core';
import { IonIcon } from '@ionic/angular/standalone';
import { logoLinkedin } from 'ionicons/icons';
import { logoGithub } from 'ionicons/icons';
import { GlobalData } from '../../services/global-data';

@Component({
  selector: 'app-home',
  imports: [ IonIcon],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home  implements OnInit  {

   public readonly linkedinIcon = logoLinkedin; 
   public readonly githubIcon = logoGithub;

    isDark = false;
    isHoveredlink = false;       
    isHoveredgit = false;

   constructor(private gd: GlobalData) {}

   ngOnInit(): void {
   this.gd.darkMode$.subscribe(value => {
    this.isDark = value; // se actualiza automáticamente
  });
 }


}
