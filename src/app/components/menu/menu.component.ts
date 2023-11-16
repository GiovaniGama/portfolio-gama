import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  itens: string[] = ['Sobre', 'Experiência', 'Projetos', 'Contato'];
  selectedItem: string | null = null;

  selectItem(item: string){
    this.selectedItem = item;
  }
}
