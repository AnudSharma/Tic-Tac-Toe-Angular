import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
square:any[];
xIsNext:boolean;
winner:string;
whoseTurn:string;
isNotNull;


  constructor() { }

  ngOnInit(){
this.startNewGame();
this.whoseTurn= 'X';
  }


  startNewGame(){
    console.log("game started")
    this.square=Array(9).fill(null);
    // this.square=[0,1,2,3,4,5,6,7,8]
    this.winner=null;
    this.xIsNext=true;
  }

  makeMove(i){
   
    console.log("the index:"+i)
    
    if( this.square[i]==null){
    
     
        this.square[i]=this.xIsNext?'X':'O';
        this.xIsNext=!this.xIsNext;

         
      this.whoseTurn= this.xIsNext?'X':'O';



      
    }


  
    this.winner= this.calculateWinner();
    if(this.winner!=null){
  
      this.whoseTurn='Game Over';

      setTimeout(()=>{
        alert("the winner is:"+this.winner)
      },1000/2)
     // alert("the winner is:"+this.winner)
    }

    // else{
    //   alert("its a draw")
    // }
  }



  calculateWinner(){
const lines=[
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [0,4,8],
  [2,4,6]
];

for(let i=0;i<lines.length;i++){
  const [a,b,c]=lines[i];
  if(this.square[a] && this.square[a]===this.square[b]&&
    this.square[a]===this.square[c]
    )
    return this.square[a];
}
return null;
   
  }
}
