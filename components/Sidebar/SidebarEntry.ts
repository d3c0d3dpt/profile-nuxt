export default {
    functional: true,

    props: {
        title: { type: String, required: true },
        description: { type: String, required: true },

        href: { type: String }
    },

    // @ts-ignore
    render (createElement, context) {
        function getSidebarEntryComponent (title: string, description: string, href?: string) {
            if (href) {
                return createElement('a', { attrs: { href, target: '_blank' } }, [
                    createElement('p', { class: 'text-indigo-800 text-base font-medium leading-snug' }, title),
                    createElement('p', { class: 'leading-snug' }, description)
                ]);
            }

            return createElement('div', [
                createElement('p', { class: 'text-indigo-800 text-base font-medium leading-snug' }, title),
                createElement('p', { class: 'leading-snug' }, description)
            ]);
        }

        return createElement('div', { class: 'border-t pt-4r flex items-center', ...context.data }, [
            createElement('div', { class: 'text-indigo-800 mr-4r' }, context.children),

            getSidebarEntryComponent(context.props.title, context.props.description, context.props.href)
        ]);
    }
};
