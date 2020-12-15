export default {
    name: "scholarship",
    title: "Scholarship Page",
    type: "document",
    icon: () => "❓",
    fields: [
        {
            name: 'faqarray',
            title: 'Frequently Asked Questions',
            description: 'Questions applicants may ask about the scholarship',
            type: 'array',
            of: [
                { 
                    type: 'faq' 
                }
            ]
        }
    ],
}