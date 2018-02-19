function yearOfBirth(age) {
    try {
		if(age < 0){
			throw new Error("Age can not be negative");
		}
	  let yearOfBirth = 2018 - age;
	  return yearOfBirth;	
	}

	catch (e) {
   console.log(e);
	}

}
function whoAmI(name, age){
	let yob = yearOfBirth(age);
console.log(`Hi, my name is ${name} and I'm ${age} years old`);
console.log(`I was born in ${yob}`);

}
whoAmI("Tharaka", -28);
