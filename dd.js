const dd = new Promise((resolve,reject)=>{
    console.log('dd')
    setTimeout(()=>{
        resolve("resolved after 3")

    },5000)
})

const dd1 = new Promise((resolve,reject)=>{
   
    console.log('dd1')
    setTimeout(()=>{

        resolve("resolved after 5")

    },7000)
})


async function func(){


    console.log("hello world")

    setTimeout(()=>{

        console.log("timeout printed")

    },1000)

        const data = await dd;
     console.log(data)
     //console.log('dd');
     const data1 = await dd1;
     console.log(data1)

   


    
}
func()

console.log('after calling function')