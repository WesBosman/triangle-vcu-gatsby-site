export default {
    name: "store",
    title: "Store",
    type: "document",
    icon: () => "🏪",
    fields: [
        {
            name: "name",
            title: "Item Name",
            type: "string",
            description: "The name of the product"
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
            name: "image",
            title: "Image",
            type: "image",
            options: {
                hotspot: true
            }
        },
        {
            name: "price",
            title: "Price",
            type: "number",
            description: "Price of the item in cents",
            // Don't sell anything for less than $10
            validation: Rule => Rule.min(1000),
        }
    ]
}