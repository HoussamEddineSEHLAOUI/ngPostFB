import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-postfacebook',
  templateUrl: './postfacebook.component.html',
  styleUrls: ['./postfacebook.component.css']
})
export class PostfacebookComponent implements OnInit {
  countLike :number =0;
  countComent: number = 0;
  countShare:number =0;

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
}
