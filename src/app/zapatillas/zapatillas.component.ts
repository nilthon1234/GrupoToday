import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-zapatillas',
  templateUrl: './zapatillas.component.html',
  styleUrl: './zapatillas.component.css'
})
export class ZapatillasComponent  {

private redirectTimeout: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

 


}
