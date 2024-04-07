//event delegation in java script
const fnamechange = (e) => {
  //    console.log('first name');
  //    console.log(e);
  const val = e.target.value;
  if (val.length > 3) {
    console.log("correct");
  }
};

const submitForm = (el) => {
  el.preventDefault();
  //  const va = el.target.value;
  const t = el.target;
  const res = {
    hobbies: [],
  };
  for (let i = 0; i < t.length; i++) {
    // console.dir(t[i].value);
    // console.dir(t[i].type);
    // console.dir(t[i]);

    const ty = t[i].type;
    if (ty != "submit") {
      const vl = t[i].value;
      const nm = t[i].name;

      if (ty == "checkbox" && t[i].checked) {
        // console.log(t[i].checked);
        res.hobbies.push(vl);
      }
      if (ty != "checkbox") {
        res[nm] = vl;
      }
    }
  }
  console.log(res);
};
 //functions are first-class citizens in javascript

 //higher order functio / callback ----------------------------------------- validation(form completly submitted or not) 