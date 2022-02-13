import { Component, OnInit ,Input } from '@angular/core';

@Component({
  selector: 'app-postfacebook',
  templateUrl: './postfacebook.component.html',
  styleUrls: ['./postfacebook.component.css']
})
export class PostfacebookComponent implements OnInit {
  countLike :number =0;
  countComent: number = 0;
  countShare:number =0;
  controlPost : boolean =false ;
  @Input() title: string ='';

  constructor() { }

  ngOnInit(): void {
  }

  onClickLike =()=>{
    this.countLike ++;
  }

  onClickComent =()=>{
    this.countComent ++;
  }

  onClickShare =()=>{
    this.countShare ++ ;
  }
  
  setShowControl=(val:boolean)=>{
    this.controlPost=val;
  }
}
