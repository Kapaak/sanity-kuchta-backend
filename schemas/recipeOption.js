export default {
	name: "recipeOption",
	title: "Typy receptů",
	type: "document",
	fields: [
		{
			name: "title",
			title: "Title",
			type: "recipeOptionType",
		},
	],
	preview: {
		select: {
			title: "title.name",
		},
	},
};
