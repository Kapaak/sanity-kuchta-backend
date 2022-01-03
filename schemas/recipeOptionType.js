export default {
	title: "Typ receptu",
	name: "recipeOptionType",
	type: "object",
	fields: [
		{
			name: "name",
			title: "Název",
			type: "string",
			validation: Rule => Rule.required().error("Nesmí být prázdné."),
		},
		{
			name: "img",
			title: "Obrázek",
			type: "image",
			validation: Rule => Rule.required().error("Nesmí být prázdné."),
		},
	],
};
