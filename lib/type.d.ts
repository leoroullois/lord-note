interface INote {
	title: string;
	tags: string[];
	date: string;
	text: string;
}

interface ITest {
	fetching: boolean;
	error:boolean;
	data: any;
}
