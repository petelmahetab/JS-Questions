
//Get an Division or Element 
const imgeDiv=document.querySelector('.Image-Container');
const arrayURLImges=["https://picsum.photos/200/300?random=1","https://picsum.photos/200/300?random=2","https://picsum.photos/200/300?random=3","https://picsum.photos/200/300?random=6","https://picsum.photos/200/300?random=5"];

//Lets handle all URL using PROMISE.all Method.
//Here..I'm going to get images when promise is resolved.
Promise.all(arrayURLImges.map(HandleImages))
.then((img)=>{
    img.forEach(i=>{
        imgeDiv.appendChild(i);
    })
})
.catch(e=>console.log(e));

function HandleImages(src){
    //It return an Promise for promise we have Reslove and Reject
    return new Promise((res,rej)=>{
   //Take an Image object and set its width , height.
   let img=new Image(300,400);
   //Onload is an Event for Successfully Loaded the Image object.
    img.onload=function(){
        //After loaded we get RESPONSE.
           res(img);
    }
    img.onerror=function(){
        //after getting some Error our Promise will be REJECTED.
        rej(new Error('Failed to load'+src));
    }
    
    img.src=src;
    })
}
