const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const a=[];
inp.on("line",(data)=>{
  a.push(data);});
inp.on("close",()=>{
  var n=a[0],i=2;
  while(i<=n){
      console.log(i);
      i+=2;
  }
});
