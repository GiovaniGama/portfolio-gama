import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { IMenu } from 'src/app/interfaces/IMenu.interface';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent{

  itens: IMenu[] = [
    {
      nameMenu: "Home",
      routeMenu: "/home"
    },
    {
      nameMenu: "Sobre",
      routeMenu: "/sobre"
    },
    {
      nameMenu: "Experiência",
      routeMenu: "/experiencia"
    },
    {
      nameMenu: "Projetos",
      routeMenu: "/projetos"
    },
    {
      nameMenu: "Contato",
      routeMenu: "/contato"
    },
  ];

  selectedItem: string | null = null;
  screenWidth: number = window.innerWidth;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
            this.updateItemSelected();
        }
    });

    window.addEventListener('resize', this.onResize.bind(this));
  }

  updateItemSelected() {
    const currentRoute = this.router.url;
    const foundItem = this.itens.find(item => item.routeMenu === currentRoute);

    if (foundItem) {
        this.selectedItem = foundItem.nameMenu;
    } else {
        this.selectedItem = '';
    }
  }

  onResize() {
    this.screenWidth = window.innerWidth;
    console.log(this.screenWidth)
  }
}
