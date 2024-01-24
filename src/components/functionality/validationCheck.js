export default function validationCheck(value, field, minLength = 0, regex = null) {
	const fieldName = field[0].toUpperCase() + field.slice(1);
	console.log(fieldName);
	if (!value.trim().length) {
		return {
			field: field,
			payload: `${fieldName} is required`
		};
	} else if (minLength > 0 && value.trim().length < minLength) {
		return {
			field: field,
			payload: `${fieldName} must be ${minLength} characters or more`
		};
	} else if (regex && !regex.test(value)) {
		return {
			field: field,
			payload: `Invalid ${fieldName}`
		};
	} else {
		return {
			field: field,
			payload: ''
		};
	}
}

//{ field: 'name', payload: '' }

let name = validationCheck('', 'Name');
let email = validationCheck(
	'email',
	'Email',
	0,
	/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
);
let password = validationCheck('password', 'Password', 6);
console.log(name, email, password);
