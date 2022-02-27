interface ITest {
	fetching: boolean;
	error: boolean;
	data: any;
}

interface INote {
	title: string;
	tags: string[];
	date: string;
	text: string;
}

// * Authentification
interface IUser {
	id: string;
	email: string;
	username: string;
}
interface IAuth {
	isAuthenticated: boolean;
	loading: boolean;
	user: IUser;
}

interface IRegisterForm {
	email: string;
	username: string;
	password1: string;
	password2: string;
}
interface ILoginForm {
	username: string;
	password: string;
}
interface IError {
	message: string;
}
interface IValidator {
	errors: IError[];
	isValid: boolean;
}
