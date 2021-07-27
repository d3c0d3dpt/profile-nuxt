import { FeatherAttributes } from 'feather-icons';

export default function (icon: { contents: string; attrs: FeatherAttributes }) {
    return {
        functional: true,

        props: {
            size: { type: Number, default: 24 }
        },

        // @ts-ignore
        render (createElement, context) {
            return createElement('svg', {
                attrs: { ...icon.attrs, height: context.props.size, width: context.props.size },

                domProps: { innerHTML: icon.contents }
            });
        }
    };
}
