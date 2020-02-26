function collectStrings(obj) {
  
  let arr = [];

  function collect(obj) {

    // if (Object.keys(obj).length === 0) return;  // not necessary

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



function collectStringsColtHeplerVersion(obj) {
    var stringsArr = [];
 
    function gatherStrings(o) {
        for(var key in o) {
            if(typeof o[key] === 'string') {
                stringsArr.push(o[key]);
            }
            else if(typeof o[key] === 'object') {
                return gatherStrings(o[key]);  // I don't think this "return" is necessary
            }
        }
    }
 
    gatherStrings(obj);
 
    return stringsArr;
}

console.log(collectStringsColtHeplerVersion(obj)); // ["foo", "bar", "baz"])


function collectStringsColtPure(obj) {
    var stringsArr = [];
    for(var key in obj) {
        if(typeof obj[key] === 'string') {
            stringsArr.push(obj[key]);
        }
        else if(typeof obj[key] === 'object') {
            stringsArr = stringsArr.concat(collectStrings(obj[key]));
        }
    }
 
    return stringsArr;
}

console.log(collectStringsColtPure(obj)); // ["foo", "bar", "baz"])




