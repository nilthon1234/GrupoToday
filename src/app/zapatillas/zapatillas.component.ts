import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-zapatillas',
  templateUrl: './zapatillas.component.html',
  styleUrl: './zapatillas.component.css'
})
export class ZapatillasComponent implements OnInit {

private redirectTimeout: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    if (this.route.snapshot.routeConfig?.path === 'zapatillas') 
    {
      this.redirectTimeout = setTimeout(() => {
        this.router.navigate(['/adidas']);
      });
    }
  }

}
