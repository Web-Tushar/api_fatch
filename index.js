// function one(callBack){
//                console.log("one");
//            callBack()

// }

// function two(callBack){
//      console.log("two");
//           callBack()
          
// }

// function three(){
//      console.log("this is three");
// }

// function four(){
//      console.log("this is four");
// }

// two(()=>{
//    one(()=>{
//      three();

//    });

// });

// =====promise start here==

// function fetchMyCustomPorise (){
//       const myPromise = new Promise((resolve, reject) => {
//             setTimeout(() => {
//                //   resolve("your data is ready")
//                  reject("your data is faild")
//             }, 1000);
//       })
//       return myPromise
// }

// fetchMyCustomPorise().then((result)=>{
//      console.log(result);
// }).catch((err)=>{
//      console.log(err);

// })

// fetch("https://dummyjson.com/products").then((response)=>{
//        return response
// })

// .then((rData)=>{
//           return rData.json()
// }).then((actualData)=>{
//      return actualData.products
// }).then((actualProducts)=>{
//      console.log(actualProducts);
// })

const fetcher =  ()=>{
     const myPromise =  new Promise((resolve, reject) => {
          fetch("https://dummyjson.com/products").then((response)=>{
             return response

          }).then((rdata)=>{
               return rdata.json()
          }).then((actualData)=>{
               return actualData.products
          }).then((solidData)=>{
               resolve(solidData);
          }).catch((err)=>{
               reject(err)
          })
     })
     return myPromise

}
   
 function display(data){
     console.log(data);
 let htmlSyntax = ``
 data.map((item)=>{
     htmlSyntax+= `
          <div class="flex justify-center items-center flex-col">
               <h2 class="brand">Brand:${item.brand}</h2>
               <img src=${item.images[0]} class="w-[200px] h-[200px]" alt="">
               <h2 class="title">${item.title}</h2>
               <p class="title">${item.price}$</p>

           </div>
     `

 })

 let box = document.querySelector(".box")
 box.innerHTML = htmlSyntax
}


fetcher().then((data)=>{
     display(data)

})


     
