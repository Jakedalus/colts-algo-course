function stringifyNumbers(obj) {

  // console.log(obj);

  let tempObj = {};

  function stringifier(obj) {
    if (Object.keys(obj).length === 0) return;

    for (let key in obj) {
      let val = obj[key];

      // console.log(key, val);

      if (typeof val === 'number') {
        tempObj[key] = val.toString();
      } else if (typeof val === 'object' && !Array.isArray(val)) {
        tempObj[key] = stringifyNumbers(val);
      } else {
        tempObj[key] = val;
      }
    }
  }

  stringifier(obj);

  console.log(obj);

  return tempObj;

}




let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
};


console.log(stringifyNumbers(obj));


// {
//     num: "1",
//     test: [],
//     data: {
//         val: "4",
//         info: {
//             isRight: true,
//             random: "66"
//         }
//     }
// }
