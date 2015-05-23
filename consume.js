function consume(m,cb){var e,f=cb;while((e=m.shift())){f(e);}}


function consume(m,callback){var e,f=callback;while(e=m.shift()){f(e);}/*;*/}
consume([1,2,3,4,5],function(x){console.log(x);});


function consume(m,cb/*callback*/){var e,f=cb;while(e=m.shift()){f(e);}}



