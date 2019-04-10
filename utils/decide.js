class Decide{
  decide1(x,y){
    if(x<y||y<0){
      y=Math.floor(x-Math.random()*x);
      return y;
    }
    else{
      return y;
    }
  }
  decide2(x,y){
    if(x%y!=0){

      y=Math.floor(Math.random()*100+1);
      // console.log("执行decide2 "+"x="+x+"  y="+y);
      return this.decide2(x,y);
    }
    else{
      // console.log("执行decide2 " + "x=" + x + "  y=" + y);
      return y;
    }
  }
}
export{Decide}