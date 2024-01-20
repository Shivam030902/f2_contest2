let arr = [
    { id: 1, name: 'john', age: 18, profession: 'developer' },
    { id: 2, name: 'jack', age: 20, profession: 'developer' },
    { id: 3, name: 'karen', age: 19, profession: 'admin' },
  ];
  
  // Don't worry about consoling these functions, they are already being called on the button clicks.
  // Please don't change anything in the index.html file.
  
  function PrintDeveloper() {
    //Write your code here , just console.log
  
    arr.forEach((emp) => {
      if(emp.profession === 'developer')
      {
        console.log(emp);
      }
    });
  }
  
  function addData() {
    //Write your code here, just console.log
  
    let newEmp =  {id:4, name:"susan", age:"20", profession:"intern"};
  arr.push(newEmp);
  console.log(arr);
  }
  
  function removeAdmin() {
    //Write your code here, just console.log
  
    let filteredArray = arr.forEach((emp) => {
      if(emp.profession !== 'admin')
      {
        console.log(emp);
      }
    });
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
  
    let newArray = [
      { id: 5, name: "alice", age: "22", profession: "designer" },
      { id: 6, name: "bob", age: "25", profession: "analyst" },
      { id: 7, name: "dave", age: "28", profession: "manager" },
    ];
  
  let concatArr = arr.concat(newArray);
  console.log(concatArr);
  }
  
  // Here is an example of how functions work,
  // basically a function is a block of code which can directly access your 'arr' variable since arr is global.
  // If I have a function called consoleArr(), that can directly access arr like this to console it.
  
  function consoleArr() {
    console.log('Consoling Array Variable', arr);
    // Over here I can directly access the variable.
  }
  