// Activity 1: Understanding Promises

// Task 1
const promise1 = new Promise((resolve) => {
    setTimeout(() => {
      resolve('This is the resolved message after 2 seconds');
    }, 2000);
  });
  
  promise1.then((message) => {
    console.log(message); // Output: This is the resolved message after 2 seconds
  });
  
  // Task 2
  const promise2 = new Promise((_, reject) => {
    setTimeout(() => {
      reject('This is the error message after 2 seconds');
    }, 2000);
  });
  
  promise2.catch((errorMessage) => {
    console.log(errorMessage); // Output: This is the error message after 2 seconds
  });
  
  // Activity 2: Chaining Promises
  
  // Task 3
  const fetchData1 = () => new Promise((resolve) => {
    setTimeout(() => {
      resolve('Data from server 1');
    }, 1000);
  });
  
  const fetchData2 = () => new Promise((resolve) => {
    setTimeout(() => {
      resolve('Data from server 2');
    }, 1000);
  });
  
  const fetchData3 = () => new Promise((resolve) => {
    setTimeout(() => {
      resolve('Data from server 3');
    }, 1000);
  });
  
  fetchData1()
    .then((data1) => {
      console.log(data1); // Output: Data from server 1
      return fetchData2();
    })
    .then((data2) => {
      console.log(data2); // Output: Data from server 2
      return fetchData3();
    })
    .then((data3) => {
      console.log(data3); // Output: Data from server 3
    });
  
  // Activity 3: Using Async/Await
  
  // Task 4
  const asyncFunction4 = async () => {
    const message = await promise1;
    console.log(message); // Output: This is the resolved message after 2 seconds
  };
  
  asyncFunction4();
  
  // Task 5
  const asyncFunction5 = async () => {
    try {
      const message = await promise2;
      console.log(message);
    } catch (error) {
      console.log(error); // Output: This is the error message after 2 seconds
    }
  };
  
  asyncFunction5();
  
  // Activity 4: Fetching Data from an API
  
  // Task 6
  const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';
  
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => console.log(data)) // Output will be the JSON data from the API
    .catch(error => console.log('Error:', error));
  
  // Task 7
  const asyncFetchData = async () => {
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      console.log(data); // Output will be the JSON data from the API
    } catch (error) {
      console.log('Error:', error);
    }
  };
  
  asyncFetchData();
  
  // Activity 5: Concurrent Promises
  
  // Task 8
  const promiseA = Promise.resolve('Value A');
  const promiseB = Promise.resolve('Value B');
  const promiseC = Promise.resolve('Value C');
  
  Promise.all([promiseA, promiseB, promiseC])
    .then((values) => {
      console.log(values); // Output: ['Value A', 'Value B', 'Value C']
    })
    .catch((error) => {
      console.log('Error:', error);
    });
  
  // Task 9
  const promiseRace1 = new Promise((resolve) => setTimeout(() => resolve('Race 1'), 1000));
  const promiseRace2 = new Promise((resolve) => setTimeout(() => resolve('Race 2'), 500));
  const promiseRace3 = new Promise((resolve) => setTimeout(() => resolve('Race 3'), 1500));
  
  Promise.race([promiseRace1, promiseRace2, promiseRace3])
    .then((value) => {
      console.log(value); // Output: Race 2 (as it resolves first)
    })
    .catch((error) => {
      console.log('Error:', error);
    });
  