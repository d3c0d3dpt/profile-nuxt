<template lang="pug">
    div
        locale-bar

        .container.padding-box
            .grid.grid-standard-gap(class="grid-cols-1 lg:grid-cols-7")
                div(class="lg:col-span-2")
                    sidebar

                content.space-y-standard(class="lg:col-span-5")
                    skills
                    career
                    projects
                    training
                    academic
                    contact
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

import LocaleBar from '~/components/LocaleBar.vue';

import Academic from '~/components/Content/Academic.vue';
import Career from '~/components/Content/Career.vue';
import Contact from '~/components/Content/Contact.vue';
import Projects from '~/components/Content/Projects.vue';
import Skills from '~/components/Content/Skills.vue';
import Training from '~/components/Content/Training.vue';

import Sidebar from '~/components/Sidebar/Sidebar.vue';

@Component({ components: { Academic, Career, Contact, LocaleBar, Projects, Sidebar, Skills, Training } })
export default class IndexPage extends Vue {
    head () {
        const title = this.$t('meta.title');
        const description = this.$t('meta.description');

        return {
            title,

            meta: [
                { name: 'title', content: title },
                { name: 'description', content: description },

                // Open Graph / Facebook
                { name: 'og:title', content: title },
                { name: 'og:description', content: description },

                // Twitter
                { name: 'twitter:title', content: title },
                { name: 'twitter:description', content: description }
            ]
        };
    }
}
</script>
