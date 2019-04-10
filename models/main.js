import {Judge} from "../utils/judge.js"
import {Division} from "../utils/division.js"
import {Decide} from "../utils/decide.js"
import {Calculate} from "../utils/calculate.js"
import {Insert} from "../utils/insert.js"
var eval1 = require("../utils/eval.js")
let judge = new Judge()
let division = new Division()
let decide = new Decide()
let calculate = new Calculate()
let insert = new Insert()
class Main{
  getArith(problemNum,operationNum,range1,range2,ifopr,sele){
    console.log("开始")
    var expression = new Array();//总题目表达式字符串数组
    var expression1 = new Array();//基本表达式字符串数组
    var expression2 = new Array();//分数加减表达式字符串数组
    var expression0 = new Array();
    var expression01 = new Array();
    var expression02 = new Array();
    const num =problemNum;
    const realnum=num-Math.floor(Math.random()*num);//分数表达式个数
    // console.log(realnum);
    var operator = ['+','-'];
    if(ifopr){
      operator.push('*');
      operator.push('÷');
    }
    // var judge = judge.judge(num);//判断输入是否合法
    if(true){
      for(var i=0;i<num-realnum;i++){
        var min = Number(range1);
        var max = Number(range2);
          // console.log("第"+i);
          const n=Math.floor(Math.random()*(operationNum-1))+1;
          var number=[];
          number.length=n+1;
          var ex="";
          var numcount=[];
          numcount.length=n+1;
          for(var j=0;j<n+1;j++){
            numcount[j]=0;
            //console.log("初始位数"+numcount[j]);
          }
          for(var j=0;j<n+1;j++){
            number[j]=Math.floor(Math.random()*(max-min))+min;
            // console.log("随机数字为"+number[j]);
            //console.log("随机数字"+number[j]);
          }//生成4到5个随机数字并初始化numcount数组
         
          for(var j=0;j<n;j++){
            var s=Math.floor(Math.random()*4);
            if(s==1){
              number[j+1]=decide.decide1(number[j],number[j+1]);
              
            }
            if(s==3){
              
              number[j+1]=decide.decide2(number[j],number[j+1]);
             
          }
          
          ex+=String(number[j]);
          // console.log(ex)
          ex+=operator[s];//5+4+3+2
          // console.log(ex);
        }
        ex+=String(number[n].toString());
        var m=Math.floor(Math.random()*(n-1)+2);
        var num0=0;
        for (var j = 0; j<n+1; j++) {
          numcount[j]=0;
          var temp = number[j];
          while (temp != 0) {
            numcount[j]++;
            temp = Math.floor(temp / 10);
          }
          //console.log("位数为："+numcount[j]);
        }
        // for(var j=0;j<n+1;j++){
        //   console.log("数字为："+number[j]+" 位数为："+numcount[j]);
        // }
        // while (num0 == 0) {
        //   for (var k = 0; k < m; k++) {
        //     var insertPos1 = Math.floor(Math.random()*n) * 2;
        //     var insertPos2 = n * 2 + 1 - Math.floor(Math.random() * (n - insertPos1 / 2)) * 2;
        //     var  rePos1 = insertPos1 - insertPos1 / 2;
        //     var rePos2 = insertPos2 - insertPos2 / 2;
        //     for (var w = 0; w < rePos1; w++) {
        //       insertPos1 += (numcount[w] - 1);

        //     }
        //     numcount[rePos1]++;

        //     for (var w = 0; w < rePos2; w++) {

        //       insertPos2 += (numcount[w] - 1);

        //     }
        //     numcount[rePos2 - 1]++;

            
        //     ex =insert.insertstr(ex,insertPos1, "(");

        //     ex = insert.insertstr(ex, insertPos2, "(");
            

        //   }
        
          var a="";
        a = a + String(eval1.calCommonExp(ex));
          var b =Number(a);
          if(b<0||!judge.judge2(b)||b<range1||b>range2){
            // console.log("未成功");
            i=i-1;
          }
          else{
            expression1[i]=ex;
            // console.log("成功"+ex);
          }
        // for(var b=0;b<expression1.length;b++){
        //   console.log(expression1[b]);
        // }
      }}
      //编写真分数加减运算
      for(var i=0;i<realnum;i++){
        // console.log("第"+i);
        var n=Math.floor(Math.random()*3+3);
        var number=[];
        var result1=0,result2=0;
        for(var j=0;j<(n+1)*2;j++){
          number[j]=Math.floor(Math.random()*10+1);
        }
        for (var k = 0; k < (n + 1) * 2; k += 2) {
          if (number[k] > number[k + 1]) {
            var temp = number[k];
            number[k] = number[k + 1];
            number[k + 1] = temp;
          }
        }
        result1 = number[0];
        result2 = number[1];
        var flag = false;
        var flag2 = false;
        for (var k=0;k<=n-1;k++) {
          
          result1=number[(k+1)*2]*result2+number[(k+1)*2+1]*result1;
          result2=result2*number[(k+1)*2+1];
          var result0 = division.division1(result1, result2);
          result1 /= result0;
          result2 /= result0;
          if (k == n - 1 && result1 > result2) {
            flag = true;
          }
          else if (k == n - 1 && result1 == result2) {
            flag2 = true;
          }
        }
        if(flag){
          i--;
          continue;
        }
        var ex="" ;
        for(var k=0;k<n;k++){
          ex+=String(number[k*2])+'/'+String(number[k*2+1])+'+';   
        }
        ex+=String(number[n*2])+'/'+String(number[n*2+1])+'=';
        expression02[i]=ex;
        if(!flag2){
          ex+=String(result1)+'/'+String(result2);
        }else{
          ex+='1';
        }
        expression2[i]=ex;
      }
    for(var k=0;k<expression02.length;k++){
      console.log(expression02[k]);
    }
    
   if(sele==1){
    expression = calculate.calculate(expression1);
    for(var k=0;k<expression2.length;k++){
      expression[k+expression1.length]=expression2[k];
      
    }
   }else if(sele==2){
     expression.length=0;
     for(var k=0;k<expression1.length;k++){
       expression1[k]=expression1[k]+"=";
     }
     expression = expression1;
     
     
     for (var k = 0; k < expression02.length; k++) {
       expression[k + expression1.length] = expression02[k];
       
     }
     for (var i = 0; i < expression.length; i++) {
       if (expression[i] == " " || expression[i] == null || typeof (expression[i]) == "undefined") {
         expression.splice(i, 1);
         i = i - 1;

       }
     }  
   }
   
    // for(var k=0;k<expression.length;k++){
    //   console.log(expression[k]);
      
    // }
    
    
    
    return expression;
    
  }
}

export{Main}

