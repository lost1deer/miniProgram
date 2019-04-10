class Judge{
  judge(data){
    if (data >= 0) {
      const temp = Math.floor(data);
      // console.log("data:"+data);
      // console.log("temp:"+temp);
      if (temp == data){
        // console.log("true");
        return true;
      }
      else{
        // console.log("flase");
        return false;
        
    }}
    else {
      return false;
    }
}
  judge2(data){
    return(Number.isInteger(data));
  }
}
export{Judge}