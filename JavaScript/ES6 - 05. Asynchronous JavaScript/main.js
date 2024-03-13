////  ASYNCHRONOUS JS

function fetchData(executor) {
  let state = "pending";
  let value = null;
  let handlers = [];

  let resolve = (result) => {
    if (state == "pending") {
      state = "Success";
      value = result;
      handlers.forEach((handler) => handler.onFulfilled(value));
    }
  };

  let reject = (error) => {
    if (state == "pending") {
      state = "Fail";
      value = error;
      handlers.forEach((handler) => handler.onRejected(value));
    }
  };

  this.then = (onFulfilled, onRejected) => {
    handlers.push({ onFulfilled, onRejected });
    return this;
  };

  try {
    executor(resolve, reject);
  } catch (err) {
    reject(err);
  }
}

const specificCustomPromiseData = new fetchData((resolve, reject) => {
  setTimeout(() => {
    const data = {
      name: "Georges",
      age: 10,
    };

    if (data) {
      resolve(`Name: ${data.age}`);
    } else {
      reject(new Error(`Fail: ${data}`));
    }
  }, 1000);
});

specificCustomPromiseData.then((result) => {
  console.log(`Success: ${result}`);
});



const specificPromiseData = new Promise((resolve, reject) => {
  setTimeout(() => {
    const data = {
      name: "Georges",
      age: 10,
    };

    if (data) {
      resolve(`Name: ${data.name}`);
    } else {
      reject(new Error(`Fail: ${data}`));
    }
  }, 1000);
});

specificPromiseData.then((result) => {
  console.log(`Success: ${result}`);
});
