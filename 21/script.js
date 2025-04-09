//Debouncing Using LoDash
// const getField=document.querySelector('#input').addEventListener('input',(e)=>{
//   getDebounce(e.target.value)
// });

// const getDebounce=_.debounce((value)=>{
//    console.log('API call with ',value)
// },800)

//PollyFills for Debouncing

// Debounce PollyFills
function debouncingHapping(fun,delay){
    let timer=0;
    return function(...args){
        clearTimeout(timer);
        timer=setTimeout(()=>{
               fun(...args);
        },delay)
    }
}

//Handle Input
const handleInput=(input)=>{
    console.log('API calls ',input);
}

const debounceAttachment=debouncingHapping((e)=>{
   handleInput(e.target.value)
},1000)

const getInput=document.querySelector('#input').addEventListener('input',debounceAttachment);


//Throttling Pollyfills
//Throttle function for pollyfills
function Throttle(fun,delay){
    let lastCall=0;

    return function(...args){
        let now=new Date().getTime();

        if(now-lastCall >= delay){
            lastCall=now;
            fun.apply(this,args)
        }
    }
}
//Handle Scroll
function handleScroll(sc){
    console.log('Throttling ',e.target.sc);
}
//Add Listenr to Div on 'Scroll'
const makeThrottle=Throttle(handleInput,1000);
window.addEventListener('scroll',makeThrottle)