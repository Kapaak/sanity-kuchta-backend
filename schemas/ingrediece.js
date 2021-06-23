export default {
	name: "ingredience",
	title: "Ingredience",
	type: "document",
	fields: [
		{
			name: "nazev",
			title: "ingredience",
			type: "string",
		},
		{
			name: "koreni",
			title: "Koreni",
			type: "array",
			of: [
				{
					type: "string",
				},
			],
			options: {
				layout: "tags",
			},
		},
	],
};
