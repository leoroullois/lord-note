import ReactMarkdown from "react-markdown";
const Previewer = () => {
	return (
		<ReactMarkdown>
			{
				"# Bonjour à tous !\n## Ecrivez du markdown directement dans votre navigateur !\n### Visualisez tous cela en direct !\nVous pouvez écrire du code `<h1>Ceci est un titre</h1>` ou encore \n```\n<h1>Ceci est un titre</h1>\n<section id='header'>Comment allez vous ?</section>\n```\n pour plus d'informations [cliquez ici]('freecodecamp.org')\n- Voici\n- une\n- liste\n> Il y a même possibilité de mettre des citations !\n Il est également possible de mettre des **images** : ![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)"
			}
		</ReactMarkdown>
	);
};

export default Previewer;
