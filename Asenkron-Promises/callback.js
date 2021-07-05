

// 1

// setTimeout(()=>{
// console.log("merhaba")
// },2000)


// setInterval(() => {
//     console.log("Merhaba ben Her Saniye Çalışacağım")
// }, 1000);

//2

// const sayHi = (cb) =>{
//    cb();
// }

// sayHi(()=>{
//     console.log("Hello")
// });

//3

import fetch from "node-fetch"
import axios from "axios"
// dışarda yaptığımız takdirde asenkton yapıda olduklarından ne zaman cevap döneceğini bilmediğimizden asenkron-wait yapısı ile sıraya koyuyoruz
// bu fetchleri dışarı çıkarıp tek tek yaparsam hangisinin önce geleceğini bilemem

//1. kullanım

// fetch("https://jsonplaceholder.typicode.com/users").
// then((data)=> data.json()).
// then(users=>{
//     console.log("Users yüklendi",users)
//     fetch("https://jsonplaceholder.typicode.com/posts/1").
//     then((data)=>data.json()).
//     then((posts)=>{
//         console.log("Postlar yüklendi",posts)
//         fetch("https://jsonplaceholder.typicode.com/posts/2").
//         then((data)=>data.json()).
//         then((posts)=>{
//             console.log("Post2 yüklendi yüklendi",posts)   })
//  }
// )
// })

// 2. kullanım

// async-await keywordleri ile yukarıdaki kodun daha temiz halini yazıyoruz

// async function getData()
// {
//     const users= await (await fetch("https://jsonplaceholder.typicode.com/users")).json();

//     const post1= await (await fetch("https://jsonplaceholder.typicode.com/posts/1")).json();

//     const post2 = await(await fetch("https://jsonplaceholder.typicode.com/posts/2")).json();

//     console.log("users",users)
//     console.log("post1",post1)
//     console.log("post2",post2)
// }

//getData();

// fonksiyon ismi vermeden direl kullanmak istersek bu şekilde 

// Anonim fonksiyon tanımı ve kullanımı

// (async()=>{
//     const users= await (await fetch("https://jsonplaceholder.typicode.com/users")).json();

//     const post1= await (await fetch("https://jsonplaceholder.typicode.com/posts/1")).json();

//     const post2 = await(await fetch("https://jsonplaceholder.typicode.com/posts/2")).json();

//     console.log("users",users)
//     console.log("post1",post1)
//     console.log("post2",post2)
// })();

// Axios olarak kullanımı

// (async()=>{
//     // bunların altında data adında bir fielt getiriyor bize biz bunu yeniden isimlendirerek kullandık
//     const {data:users}= await  axios("https://jsonplaceholder.typicode.com/users");

//     const {data:post1}= await  axios("https://jsonplaceholder.typicode.com/posts/1");

//     const {data:post2} = await  axios("https://jsonplaceholder.typicode.com/posts/2")

//     console.log("users",users)
//     console.log("post1",post1)
//     console.log("post2",post2)
// })();


 const getUsers = ()=>{
    // resolve = bu işllem başarı ile gerçekleşmiş al sana data demek , reject ise bu kod çalışırken hata oluştu reddettim demek
    return new Promise( async(resolve, rejected)=>{
        const {data}= await  axios("https://jsonplaceholder.typicode.com/users");

        resolve (data)
    })
}
// Bu altlı üstlü iki metodumuzda sıralı gitmediğini anlarız

const getPost = (post_id)=>{
    // resolve = bu işllem başarı ile gerçekleşmiş al sana data demek , reject ise bu kod çalışırken hata oluştu reddettim demek
    return new Promise( async(resolve, rejected)=>{
        const {data}= await  axios("https://jsonplaceholder.typicode.com/posts/"+post_id);

        resolve (data)
    })
}

// (async()=>{
//    await getUsers().then((data)=>console.log(data)).catch((e)=>console.log(e))
//   await  getPost(1).then((data)=>console.log(data)).catch((e)=>console.log(e))
// })();


// (async()=>{
// try{
//     const users=  await getUsers();
//     const post = await  getPost(1);
//      console.log(users)
//      console.log(post)
// }catch(e){
// console.log(e)
// }

 
//  })();

Promise.all([getUsers,getPost(1)]).then(console.log).catch(console.log)


