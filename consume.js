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
