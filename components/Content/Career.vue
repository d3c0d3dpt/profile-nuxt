<template lang="pug">
    article.card.padding-box.space-y-standard
        h2.flex.items-center.space-x-4
            briefcase-icon(size="48")
            div {{ $t('career.title') }}

        section.space-y-4
            .space-y-4(v-for="job in $t('career.path')" :key="job.company")
                section.grid.gap-4(class="grid-cols-1 lg:grid-cols-3 xl:grid-cols-4")
                    .flex.flex-col
                        h3 {{ job.role }}

                        anchor(:href="job.companyHref") {{ job.company }}

                        anchor(:href="job.locationHref") {{ job.location }}

                        span.text-gray-500 {{ job.date }}

                    .space-y-4(class="col-span-1 lg:col-span-2 xl:col-span-3")
                        project.card.border.px-4.py-2(v-for="p in job.projects" :key="p.title" :project="p")
</template>

<script lang="ts">
import { BriefcaseIcon } from 'vue-feather-icons';

import { Component, Vue } from 'vue-property-decorator';

import Anchor from './Shared/Anchor';
import Project from './Shared/Project.vue';

@Component({ components: { Anchor, BriefcaseIcon, Project } })
export default class Career extends Vue {
}
</script>
