export default {
	name: "post",
	title: "Recept",
	type: "document",
	fields: [
		{
			name: "title",
			title: "Titulek",
			type: "string",
		},
		{
			name: "slug",
			title: "Adresa",
			type: "slug",
			options: {
				source: "title",
				maxLength: 96,
			},
		},
		{
			name: "author",
			title: "Autor",
			type: "reference",
			to: { type: "author" },
		},
		{
			name: "mainImage",
			title: "Hlavni obrazek",
			type: "image",
			options: {
				hotspot: true,
			},
		},
		{
			name: "category",
			title: "Kategorie",
			type: "array",
			of: [{ type: "reference", to: { type: "category" } }],
		},

		{
			name: "publishedAt",
			title: "Datum zverejneni",
			type: "datetime",
		},
		{
			name: "ingredience",
			title: "Ingredience",
			type: "blockContent",
		},
		{
			name: "body",
			title: "Postup",
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
