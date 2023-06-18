document.addEventListener('DOMContentLoaded', function () {

  // task 1 : object properties ---------------------------------------
  let user = {};
  user.name = "john";
  user.surname = "Smith";
  alert("user.name is : " + user.name);

  user.name = "Pete";
  alert("user.name is : " + user.name);

  delete user.name;
  alert("user.name is " + "'" + user.name + "'" + " because user.name was deleted");


  // task 2 : isEmpty function ---------------------------------------
  // function isEmpty(obj) {
  //   let obj_keys = Object.keys(obj)
  //   if (obj_keys.length) {
  //     alert("false ==> object is not empty")
  //   } else {
  //     alert("true  ==> object is empty")
  //   }
  // }

  // let user = {};
  // user.name = "john";

  // isEmpty(user);

  // let company = {};

  // isEmpty(company);


  // task 3 : summation of object values ---------------------------------------
  // function sum(obj) {
  //   let sum = 0;
  //   for (let key in obj) {
  //     sum += obj[key];
  //   }

  //   alert("total value is : " + sum);
  // }


  // let salaries = {
  //   John: 100,
  //   Ann: 160,
  //   Pete: 130
  // }

  // sum(salaries);
  // alert("total salary is : " + sum);


  // let price = {
  // }

  // sum(price);



  // task 4 : multiplies all numeric values by 2---------------------------------------
  // function multiplyNumeric(obj) {
  //   for (let key in obj) {
  //     if (typeof obj[key] == 'number') {
  //       alert("original value for " + "'" + key + "'" + " is : " + obj[key]);
  //       obj[key] *= 2;
  //       alert("value multiplied by 2 for " + "'" + key + "'" + " is : " + obj[key]);
  //     }
  //   }
  // }

  // let menu = {
  //   width: 200,
  //   height: 300,
  //   title: "My menu"
  // };

  // multiplyNumeric(menu);

});
