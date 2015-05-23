
function each(m,cb){var e=m.slice(0),f=cb,i=0;while(e.length!==0){f(e.shift(),i++);}}

//
function logHeapSize(){console.log('usedJSHeapSize:',window.performance.memory.usedJSHeapSize);}

var test=[1,2,3,4,5,,7];
console.log(test);
logHeapSize();
each(test,function(x,count){

	
	console.log('m['+count+']='+x);

});
logHeapSize();
console.log(test);



old:
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



