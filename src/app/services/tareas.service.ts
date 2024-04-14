import { Injectable } from '@angular/core';
import { json } from 'stream/consumers';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

private localStorageKey="listaTareas"

  constructor() { }

  getTareas():string[]{

    return JSON.parse( localStorage.getItem(this.localStorageKey)as string) || [];

  }

  agregarTarea(tarea:string){
    const tareas=this.getTareas();
    tareas.push(tarea)
    localStorage.setItem(this.localStorageKey,JSON.stringify(tareas))

  }

  eliminarTarea(index:number){
  const tareas=this.getTareas();
  tareas.splice(index,1)
  localStorage.setItem(this.localStorageKey,JSON.stringify(tareas))

  }
}
