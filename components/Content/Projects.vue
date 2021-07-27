<template lang="pug">
    article.card
        .p-4r.space-y-6r
            h2.flex.items-center
                list-icon.mr-4r(:size="48")
                | {{ $t('projects.title') }}

            section.space-y-4r
                .space-y-4r(v-for="p in $t('projects.list')" :key="p.title")
                    h3 {{ p.title }}

                    project(:project="{ ...p, title: undefined }")

        .buttons
            a.button(href="https://github.com/d3c0d3dpt" target="_blank" )
                github-icon.mr-1

                | GitHub
</template>
