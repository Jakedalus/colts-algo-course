function collectStrings(obj) {
  
  let arr = [];

  function collect(obj) {

    if (Object.keys(obj).length === 0) return;

    for (let key in obj) {
      let val = obj[key];
      if (typeof val === 'string') {
        arr.push(val);
      }

      if (typeof val === 'object') {
        collect(val);
      }
    }

  }

  collect(obj);

  return arr;

}


const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

console.log(collectStrings(obj)); // ["foo", "bar", "baz"])




