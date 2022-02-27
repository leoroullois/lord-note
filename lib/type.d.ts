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
	id:string;
	email: string;
	username: string;
}
interface IAuth {
	isAuthenticated: boolean;
	loading: boolean;
	user: IUser;
}
