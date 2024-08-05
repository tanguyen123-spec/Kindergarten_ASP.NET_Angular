import { Component } from '@angular/core';
import { SharedService } from '../../../shared.service';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-ds-tienhoc',
  templateUrl: './ds-tienhoc.component.html',
  styleUrl: './ds-tienhoc.component.css'
})
export class DsTienhocComponent implements OnInit{
  constructor(private service: SharedService,private router: Router) { }
DsBL : any =[];
showTemplate:boolean = true

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.tailaiDsBL();
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    const token = localStorage.getItem('token'); // Assuming you store the token in localStorage
    if (!token) {
      this.router.navigateByUrl('/');
    } else {
      // Fetch data or perform other operations
      this.showTemplate = true; // Add this variable to your component
    }
   }
   tailaiDsBL(){
    this.service.getBL().subscribe(data => {
      this.DsBL = data;
      console.log(data)
    });
   }
}
