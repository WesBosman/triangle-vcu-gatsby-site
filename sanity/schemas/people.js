export default {
    name: "people",
    title: "People",
    type: "document",
    icon: () => "👱",
    fields: [
        {
            name: "name",
            title: "Persons Name",
            type: "string",
            description: "The fraternity members name"
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "name",
                maxLength: 100
            }
        },
        {
            name: "email",
            title: "Email",
            type: "email"
        },
        {
            name: "image",
            title: "Image",
            type: "image",
            options: {
                hotspot: true
            }
        }
    ]
}