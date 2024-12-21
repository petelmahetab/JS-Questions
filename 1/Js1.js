
//Get an Division or Element 
const imgeDiv=document.querySelector('.Image-Container');
const arrayURLImges=["https://picsum.photos/200/300?random=1","https://picsum.photos/200/300?random=2","https://picsum.photos/200/300?random=3","https://picsum.photos/200/300?random=6","https://picsum.photos/200/300?random=5"];

//lets handle all URL using PROMISE.all Method
//Here..Handle Images is the Function for handling the Promises.
Promise.all(arrayURLImges.map(HandleImages))
.then((img)=>{
    img.forEach(i=>{
        imgeDiv.appendChild(i);
    })
})
.catch(e=>console.log(e));

function HandleImages(src){
    //it return an Promise for promise we have Reslove and Reject
    return new Promise((res,rej)=>{
   //take an Image object and set its width , height.
   let img=new Image(300,400);
   //onload is an Event for Successfully Loaded the Image object.
    img.onload=function(){
        //after loaded we get RESPONSE
           res(img);
    }
    img.onerror=function(){
        //after getting some Error our Promise will be REJECTED.
        rej(new Error('Failed to load'+src));
    }
    
    img.src=src;
    })
}
