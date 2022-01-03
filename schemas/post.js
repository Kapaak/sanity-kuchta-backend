export default {
	name: "post",
	title: "Recept",
	type: "document",
	fields: [
		{
			name: "title",
			title: "Title",
			type: "string",
		},
		{
			name: "slug",
			title: "Slug",
			type: "slug",
			options: {
				source: "title",
				maxLength: 96,
			},
		},
		// {
		// 	name: "author",
		// 	title: "Author",
		// 	type: "reference",
		// 	to: { type: "author" },
		// },
		{
			name: "mainImage",
			title: "Main image",
			type: "image",
			options: {
				hotspot: true,
			},
		},
		{
			name: "category",
			title: "Kategorie (vegan, paleo, bezlepek)",
			type: "array",
			of: [{ type: "string" }],
			options: {
				list: [
					{ title: "Vegan", value: "vegan" },
					{ title: "Paleo", value: "paleo" },
					{ title: "Bez laktózy", value: "bez-laktozy" },
					{ title: "Bez mouky", value: "bez-mouky" },
				],
			},
		},
		// {
		// 	name: "category",
		// 	title: "Kategorie (vegan, paleo, bezlepek)",
		// 	type: "array",
		// 	of: [{ type: "reference", to: { type: "category" } }],
		// },

		{
			name: "recipeOpt",
			title: "Typ receptu",
			type: "array",
			of: [{ type: "string" }],
			options: {
				list: [
					{ title: "Snídaně", value: "snidane" },
					{ title: "Svačina", value: "svacina" },
					{ title: "Polévka", value: "polevka" },
					{ title: "Oběd", value: "obed" },
					{ title: "Dezert", value: "dezert" },
					{ title: "Ostatní", value: "ostatni" },
				],
			},
			validation: Rule => Rule.required().error("Nesmí být prázdné."),
		},
		// {
		// 	name: "publishedAt",
		// 	title: "Published at",
		// 	type: "datetime",
		// },
		{
			name: "ingredience",
			title: "Ingredience",
			type: "array",
			of: [{ type: "ingredience" }],
			validation: Rule => Rule.required().error("Nesmí být prázdné."),
		},
		{
			name: "body",
			title: "Body",
			type: "blockContent",
		},
	],

	preview: {
		select: {
			title: "title",
			author: "author.name",
			media: "mainImage",
		},
		prepare(selection) {
			const { author } = selection;
			return Object.assign({}, selection, {
				subtitle: author && `by ${author}`,
			});
		},
	},
};
