import { Component, OnInit } from '@angular/core';
import { TagService } from '../../services/tags.service';
import { Tag, Datum } from 'src/app/interfaces/tag-interface';

@Component({
  selector: 'app-tag-select',
  templateUrl: './tag-selector.component.html',
  styleUrls: ['./tag-selector.component.css']
})
export class TagSelectComponent implements OnInit {
  nivel1Tags: Datum[] = [];
  nivel2Tags: Datum[] = [];
  nivel3Tags: Datum[] = [];
  nivel4Tags: Datum[] = [];
  selectedNivel1: string = '';
  selectedNivel2: string = '';
  selectedNivel3: string = '';
  selectedNivel4: string = '';

  constructor(private tagService: TagService) { }

  ngOnInit(): void {
    this.obtenerNivel1Tags();
  }

  obtenerNivel1Tags(): void {
    this.tagService.getNivel1Tags().subscribe(tags => {
      this.nivel1Tags = this.filtrarDatosRepetidos(tags, 1);
    });
  }

  obtenerNivel2Tags(nombreNivel1: string): void {
    this.selectedNivel1 = nombreNivel1;
    this.selectedNivel2 = ''; 
    this.tagService.getNivel2Tags(nombreNivel1).subscribe(tags => {
      this.nivel2Tags = this.filtrarDatosRepetidos(tags, 2);
    });
  }

  obtenerNivel3Tags(nombreNivel1: string, nombreNivel2: string): void {
    this.selectedNivel2 = nombreNivel2;
    this.selectedNivel3 = ''; 
    this.tagService.getNivel3Tags(nombreNivel1, nombreNivel2).subscribe(tags => {
      this.nivel3Tags = this.filtrarDatosRepetidos(tags, 3);
    });
  }

  obtenerNivel4Tags(nombreNivel1: string, nombreNivel2: string, nombreNivel3: string): void {
    this.selectedNivel3 = nombreNivel3;
    this.selectedNivel4 = ''; 
    this.tagService.getNivel4Tags(nombreNivel1, nombreNivel2, nombreNivel3).subscribe(tags => {
      this.nivel4Tags = this.filtrarDatosRepetidos(tags, 4);
    });
  }

  onNivel1Change(): void {
    this.selectedNivel2 = ''; 
    this.selectedNivel3 = ''; 
    this.selectedNivel4 = ''; 
    this.obtenerNivel2Tags(this.selectedNivel1);
  }
  
  onNivel2Change(): void {
    this.selectedNivel3 = ''; 
    this.selectedNivel4 = ''; 
    this.obtenerNivel3Tags(this.selectedNivel1, this.selectedNivel2);
  }
  
  onNivel3Change(): void {
    this.selectedNivel4 = ''; 
    this.obtenerNivel4Tags(this.selectedNivel1, this.selectedNivel2, this.selectedNivel3);
  }

  private filtrarDatosRepetidos(tags: any[], nivel: number): any[] {
    const nombreCampo = `nivel${nivel}`;
    return tags.filter((tag, index, self) =>
      index === self.findIndex((t) => (
        t[nombreCampo] === tag[nombreCampo]
      ))
    );
  }
}
