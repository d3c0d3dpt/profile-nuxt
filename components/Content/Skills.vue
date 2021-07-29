<template lang="pug">
    article.card.padding-box.space-y-standard
        h2.flex.items-center.space-x-4
            check-circle-icon(:size="48")
            div {{ $t('skills.title') }}

        section.space-y-standard
            .space-y-1
                h3 {{ $t('skills.main') }}

                .grid.gap-y-1.text-center(class="grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6")
                    div(v-for="skill in mainSkills" :key="skill.tech")
                        p.font-medium {{ skill.tech }}

                        p {{ skill.proficiency }}

            .space-y-1
                h3 {{ $t('skills.interests') }}

                .grid.gap-y-2.text-center(class="grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6")
                    span(v-for="item in keen" :key="item") {{ item }}
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Skills extends Vue {
    mainSkills = [
        { tech: 'JavaScript', proficiency: '▓ ▓ ▓ ▓ ▓ ▓ ▓ ▓' },
        { tech: 'Vue.js', proficiency: '▓ ▓ ▓ ▓ ▓ ▓ ▓ ░' },
        { tech: 'PHP', proficiency: '▓ ▓ ▓ ▓ ▓ ▓ ▓ ░' },
        { tech: 'Docker', proficiency: '▓ ▓ ▓ ▓ ▓ ▓ ▓ ░' },
        { tech: 'CI/CD Pipelines', proficiency: '▓ ▓ ▓ ▓ ▓ ▓ ▓ ░' },
        { tech: 'CSS', proficiency: '▓ ▓ ▓ ▓ ▓ ▓ ░ ░' }
    ];

    keen = ['Typescript', 'Nuxt.JS', 'Node.JS', 'Pug', 'Drone CI', 'Feather Icons', 'Firebase', 'Tailwind CSS'].sort();
}
</script>
