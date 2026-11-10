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