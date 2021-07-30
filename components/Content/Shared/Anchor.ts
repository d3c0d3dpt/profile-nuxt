import { ExternalLinkIcon } from 'vue-feather-icons';

export default {
    functional: true,

    // @ts-ignore
    render (createElement, context) {
        return createElement('a', {
            attrs: {
                ...context.data.attrs,

                class: 'text-indigo-800 text-sm',
                rel: 'noreferrer',
                target: '_blank'
            }
        }, [
            context.children,

            createElement(ExternalLinkIcon, {
                attrs: {
                    size: '8'
                },

                class: 'inline align-text-top ml-0.5'
            })
        ]);
    }
};
