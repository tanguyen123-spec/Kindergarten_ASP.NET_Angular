import { Component,OnInit,Input } from '@angular/core';
import { SharedService } from '../../shared.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-them-suaykien',
  templateUrl: './them-suaykien.component.html',
  styleUrl: './them-suaykien.component.css'
})
export class ThemSuaykienComponent  implements OnInit {
  opinionId:any
  machude :any;
  parentResumeId :any;
  noteOpinion:any
  giaiphap :any;
  DsCD:any=[];
  
  isAddingNH: boolean = true;
  isEditingNH:boolean = false;

  @Input() yk:any;
  constructor(private service:SharedService,private router: Router) { }
  ngOnInit(): void {
    if (this.yk.opinionId === 0) {
      this.isAddingNH = true;
      
     
    } else {
      this.isAddingNH = false;
      this.opinionId = this.yk.opinionId;
      this.machude = this.yk.machude;
      this.parentResumeId = this.yk.parentResumeId;
      this.noteOpinion = this.yk.noteOpinion;
      this.giaiphap = this.yk.giaiphap;
    }
    this. tailaiDsCD();
  }
  
  addYkien() {
    var yk = {
      opinionId: this.opinionId,
      machude: this.machude,
      parentResumeId: this.parentResumeId,
      noteOpinion: this.noteOpinion,
      giaiphap: 'N/A',
      
     
    };
  console.log(yk)
    this.service.addYK(yk).subscribe(
      res => {
        window.alert('Ý kiến đã được gửi thành công');
        console.log(res);
       
      },
      error => {
        window.alert('Ý kiến được gửi đi thất bại');
        console.log(error.error);
      }
    );
    this.isAddingNH=true
  }
  suaYK(){
    var yk = {
      opinionId: this.generateOpinionId(),
      machude: this.machude,
      parentResumeId: this.parentResumeId,
      noteOpinion: this.noteOpinion,
     
     
    };
  
    this.service.putYK(yk).subscribe(
      res => {
        window.alert('Sửa thành công');
        console.log(res);
      },
      error => {
        window.alert('Sửa thất bại');
        console.log(error);
      }
    );
  }
  tailaiDsCD(){
    this.service.getcd().subscribe(data => {
      this.DsCD = data;
      console.log(data)
    });
   }
   generateOpinionId() {
    const prefix = 'CD';
    const randomNumbers = Math.floor(Math.random() * 10000000).toString().padStart(7, '0');
    this.opinionId = prefix + randomNumbers;
  }
}
