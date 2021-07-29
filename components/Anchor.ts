export default {
    functional: true,

    // @ts-ignore
    render (createElement, context) {
        return createElement(
            'a',
            {
                attrs: {
                    ...context.data.attrs,

                    class: 'text-indigo-800 text-sm',
                    rel: 'noreferrer',
                    target: '_blank'
                }
            },
            [
                context.children,

                createElement(
                    'external-link-icon',
                    {
                        attrs: {
                            class: 'inline align-text-top ml-0.5',
                            size: 8
                        }
                    }
                )
            ]
        );
    }
};
