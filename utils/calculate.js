import {Eval} from "../utils/eval.js"
var eval1=require("../utils/eval.js")
class Calculate{
  calculate(x){
    var ax=[];
    for(var i=0;i<x.length;i++){
      try{
        ax[i] = x[i] + "=" + String(eval1.calCommonExp(x[i]));
        ax = ax.replace("/","÷");
      } catch (ScriptException ){
        //
      }
    }
    return ax;
  }
} 
export{Calculate}