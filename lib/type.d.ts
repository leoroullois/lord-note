interface INote {
	_id: string;
	title: string;
	tags: string[];
	date: number;
	text: string;
	active: boolean;
}
interface IHandleDelete {
	id:string;
}
interface IHandleWrite {
	_id: string;
	content: string;
}
interface IHandleCreate {
	title: string;
	tags: string[];
}
type IHandleActive = string | undefined;
interface IHandleTag {
	_id: string;
	tag: string[];
}
interface IHandleTitle {
	_id: string;
	title: string;
}
interface IAllNotes {
	fetching: boolean;
	error: boolean;
	data: INote[];
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
