// // How to make tee
// // 1. Get a Tee
// // 2. Ask for Milk tee Or Black Tee
// // 3. Nedd a Pan
// // 4. Make tee
// // 5. serve the tee

// function step1(step2) {
//     let tee = []
//     setTimeout(() => {
//         tee.push("Tee")
//         console.log("item Added is", tee)
//     }, 1000);
//     step2(tee, true, step3)
// }

// function step2(tee, milktee, step3) {
//     setTimeout(() => {
//         if(milktee) {
//            tee.push("Milk Tee")
//            console.log("item Added is", tee)
//         }
//     }, 1000);
//     step3(tee, step4)
// }

// function step3(tee, step4) {
//     setTimeout(() => {
//         tee.push("Pan")
//            console.log("item Added is", tee)
//     }, 1000);
//     step4(tee, step5)
// }

// function step4(tee, step5) {
//     setTimeout(() => {
//         tee.push("Make Tee")
//            console.log("item Added is", tee)
//     }, 1000);
//     step5(tee, step5)
// }

// function step5(tee) {
//     setTimeout(() => {
//            console.log("Tee Served...........")
//     }, 1000);
// }

// step1(step2)

// fetch apis-------------------------------

// fetch("https://catfact.ninja/fact/")
//   .then((res) => {
//     console.log(res, "========================");
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//     document.body.innerHTML += `
//        <div>
//           <p>Fact - ${data.fact}</p>
//           <p>Length - ${data.length}</p>
//        </div>
//        `;
//   })
//   .catch((err) => {
//     return (document.body.innerHTML += `
//        <div>
//           <p style = "color: red; ">Error - ${err.message}</p>
//        </div>
//        `);
//   });

//   fetch("https://random.imagecdn.app/500/150")
//     .then((res) => {
//         console.log(res)
//         document.body.innerHTML +=
//         `
//           <img src= ${res.url} />
//         `
//     })

// best Waey to write in interview or in industry

// let BASE_URL = 'https://dummyjson.com';
// let USER = 'user';

// async function userData () {
//     try{
//        console.log("API Call Initiated")
//       let res = await fetch(`${BASE_URL}/${USER}`)
//       if(!res.ok) {
//          throw new Error("Network Call Failed")
//       }
//       let data = await res.json()
//       console.log(data.users)

//     } catch(e) {
//         console.log(e)
//     } finally {
//        console.log("API Call Ended")
//     }
// }

// userData()

let ip = document.getElementById("ip");
let btn = document.getElementById("btn");
let output = document.getElementById("output");

btn.onclick = function () {
  let num = Number(ip.value);

  new Promise((resolve) => {
    setTimeout(() => {
      output.innerText = `Result: ${num}`;
      resolve(num);
    }, 2000);
  })

    .then((result) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          let multi = result * 2;
          output.innerText = `Result: ${multi}`;
          resolve(multi);
        }, 2000);
      });
    })

    .then((result) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          let sub = result - 3;
          output.innerText = `Result: ${sub}`;
          resolve(sub);
        }, 1000);
      });
    })

    .then((result) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          let devi = result / 2;
          output.innerText = `Result: ${devi}`;
          resolve(devi);
        }, 1000);
      });
    })

    .then((result) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          let add = result + 10;
          output.innerText = `Result: ${add}`;
          resolve(add);
        }, 1000);
      });
    });
};
