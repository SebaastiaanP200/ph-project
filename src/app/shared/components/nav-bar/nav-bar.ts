import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  imports: [],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.scss',
})
export class NavBar implements OnInit {
  constructor(private router:Router) {}

  ngOnInit() {}

  switchRoute(path:string) {
    this.router.navigate(['/'+path])
  }
  

}
