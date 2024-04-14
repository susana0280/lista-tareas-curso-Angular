import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { TareasService } from './services/tareas.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  
  listaTareas:string[]=[];
  tarea:string="";
indice:number=0;

  private _tareaService=inject(TareasService)
  
  
  ngOnInit(): void {

    this.listaTareas=this._tareaService.getTareas()
  }

agregarTarea(){
  this._tareaService.agregarTarea(this.tarea);
  this.tarea="";
  this.listaTareas=this._tareaService.getTareas()

}

eliminarTarea(){

  this._tareaService.eliminarTarea(this.indice);
  this.tarea="";
  this.listaTareas=this._tareaService.getTareas();
}





}
