<template lang="pug">
    .bg-white.shadow
        .container.text-right(class="px-4 md:px-6")
            nuxt-link.text-sm.text-indigo-800.inline-block.px-4.py-1(
                v-for="l in availableLocales"

                :key="l.code"
                :to="switchLocalePath(l.code)"
            ) {{ l.name }}
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class LocaleBar extends Vue {
    get availableLocales () {
        const currentLocale: string = this.$i18n.locale;

        // @ts-ignore
        return this.$i18n.locales.filter(i => i.code !== currentLocale);
    }
}
</script>
