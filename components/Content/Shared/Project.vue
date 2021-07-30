<template lang="pug">
    section.space-y-4
        div(v-if="project.title || project.href")
            h4(v-if="project.title") {{ project.title }}
            anchor(v-if="project.href" :href="project.href") {{ project.hrefLabel || project.href }}

        p(v-if="project.description") {{ project.description }}

        div(v-if="hasTechnologies || hasPlatforms")
            p(v-if="hasTechnologies")
                span.text-indigo-800 {{ $t('labels.technologies') }}:
                span  {{ project.technologies.join(', ') }}

            p(v-if="hasPlatforms")
                span.text-indigo-800 {{ $t('labels.platforms') }}:
                span  {{ project.platforms.join(', ') }}
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import Anchor from './Anchor';

@Component({ components: { Anchor } })
export default class Project extends Vue {
    @Prop({ type: Object, required: true }) project!: {
        title?: string;

        href?: string;
        hrefLabel?: string;

        description?: string;

        technologies?: string[];
        platforms?: string[];
    }

    get hasPlatforms (): boolean {
        const platforms = this.project.platforms;

        return platforms !== undefined && Array.isArray(platforms) && platforms.length > 0;
    }

    get hasTechnologies (): boolean {
        const technologies = this.project.technologies;

        return technologies !== undefined && Array.isArray(technologies) && technologies.length > 0;
    }
}
</script>
