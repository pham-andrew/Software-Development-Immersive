var characterFrequency=function(s){
 var o={}
 for(var i=0;i<s.length;i++)
  o[s.at(i).charCodeAt()]=-~o[s.at(i).charCodeAt()]
 var a=[]
 for(var i=s.length;i>0;i--)
  for(var j=97;j<123;j++)
   if(o[j]==i)
    a.push([String.fromCharCode(j),o[j]])
 return a
}
