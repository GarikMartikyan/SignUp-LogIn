export default function reducer(state, action) {
	switch (action.field) {
		case 'name':
			return { ...state, name: action.payload };
		case 'email':
			return { ...state, email: action.payload };
		case 'password':
			return { ...state, password: action.payload };
	}
}
