import { IfStmt } from '@angular/compiler';
import { Component, HostBinding, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { element } from 'protractor';
import { DataModel, Item } from 'src/app/models/api.models';

import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css']
})

export class ContenidoComponent implements OnInit {
  @HostBinding('class') classes = 'row';
  public items: Item[] = [];    

  public EditForm = new FormGroup({
    title: new FormControl('',Validators.required),
    about: new FormControl('',Validators.required),
    url: new FormControl('',Validators.required)
  });


  public selectedItem;
  constructor(private apiService: ApiService) { }

  pageActual: number = 1; 

  ngOnInit(): void {
    this.getData();
  }

  private getData (): void {
    if(!localStorage.getItem('data')){
      this.apiService.getItems().subscribe(
        (data: DataModel)=> {
          this.items = data.result.items;
          localStorage.setItem('data', JSON.stringify(this.items) );         
         },
         err => console.log(err)
       )
    }else{
      this.items = JSON.parse(localStorage.getItem('data')) as Item[]; 
    }
  }
  
  public editItems(): void{
      for (let i = 0; i < this.items.length; i++) {
        if(i === this.selectedItem) {
          this.items[i]._about= this.EditForm.value.about;
          this.items[i].title = this.EditForm.value.title;
          this.items[i].accessURL = this.EditForm.value.url
        }        
      }

    localStorage.setItem('data',JSON.stringify(this.items));
    this.selectedItem = null;
  }

  public deleteItems(): void{
    let temp: Array<Item> = []

    for (let i = 0; i < this.items.length; i++) {
      if(i !== this.selectedItem) {
        temp.push(this.items[i])
      }        
    }

    this.items = [...temp];
    localStorage.setItem('data',JSON.stringify(this.items));
    this.selectedItem = null;
  }

  public addItem():void {

    for (let i = 0; i < this.items.length; i++) {
      if(i === this.selectedItem) {
        this.items.push(this.items[i])
      }        
    }

    localStorage.setItem('data',JSON.stringify(this.items));
    this.selectedItem = null;
  }

  public selectItem(index): void{
    this.selectedItem = index;
  }
}
