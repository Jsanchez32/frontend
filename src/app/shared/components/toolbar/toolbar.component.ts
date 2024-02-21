import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
})
export class ToolbarComponent implements OnInit {
  constructor(private router: Router) {}

  @Input() showBackButton: boolean = true;
  isSmallScreen: boolean = false;

  ngOnInit(): void {
    this.checkScreenSize();

    // Escuchar cambios en el tamaño de la pantalla
    window.addEventListener('resize', () => {
      this.checkScreenSize();
    });
  }

  checkScreenSize(): void {
    this.isSmallScreen = window.innerWidth < 768;
  }

  getTargetRoute(): string {
    return this.router.url === '/users/list' ? '/tags/tags' : '/users/list';
  }

  getButtonText(): string {
    return this.router.url === '/users/list' ? 'Tags Select' : 'Users List';
  }
}
