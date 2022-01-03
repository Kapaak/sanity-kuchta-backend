export default {
	title: "Ingredience",
	name: "ingredience",
	type: "object",
	fields: [
		{
			name: "ingredienceTitle",
			title: "Nadpis ingrediencí",
			type: "string",
		},
		{
			name: "ingredienceItem",
			title: "Jednotlivé ingredience",
			type: "array",
			of: [{ type: "string" }],
			validation: Rule => Rule.required().error("Nesmí být prázdné."),
		},
	],
};
