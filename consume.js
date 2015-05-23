	function consume(m,cb){var e=m,f=cb;while(e.length!==0){f(m.shift());}}


var test=[1,2,3,4,5,,7];
console.log(test);
consume(test,function(x){console.log(x);});
console.log(test);

/*
[1, 2, 3, 4, 5, undefined, 7]
1
2
3
4
5
undefined
7
[]
*/



===

function consume(m,cb){var e,f=cb;while((e=m.shift())){f(e);}}


function consume(m,callback){var e,f=callback;while(e=m.shift()){f(e);}/*;*/}
consume([1,2,3,4,5],function(x){console.log(x);});


function consume(m,cb/*callback*/){var e,f=cb;while(e=m.shift()){f(e);}}



