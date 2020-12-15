export default {
    name: "social",
    title: "Social Links",
    type: "document",
    icon: () => "🔗",
    fields: [
        {
            name: "icon",
            title: "Icon",
            type: "string",
            description: "Name of an Icon from React Icons library"
        },
        {
            name: "link",
            title: "Link",
            type: "url"
        },
        {
            name: "color",
            title: "Background Color",
            type: "string"
        }
    ]
}