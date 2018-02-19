function yearOfBirth(age) {
    try {
		if(age < 0){
			throw new Error("Age can not be negative");
		}

	  let yearOfBirth = 2018 - age;
	  return yearOfBirth;	

	} catch (e) {
   	console.log(e);
	}

}
function whoAmI(name, age){

	if(typeof name === 'undefined' || typeof age === 'undefined') {
		console.error("Arguments not valid");
	} else {
		if(!Number.isInteger(age) || typeof name !== 'string') {
			console.log('wrong datatypes');
		} else {
			let yob = yearOfBirth(age);
			console.log(`Hi, my name is ${name} and I'm ${age} years old`);
			console.log(`I was born in ${yob}`);
		}
	}
}

whoAmI(21, "two");
