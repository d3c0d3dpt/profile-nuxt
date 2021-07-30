<template lang="pug">
    article.card
        .padding-box.space-y-standard
            h2.flex.items-center.space-x-4
                list-icon(size="48")
                div {{ $t('projects.title') }}

            section.space-y-4
                .space-y-4(v-for="p in $t('projects.list')" :key="p.title")
                    h3 {{ p.title }}

                    project(:project="{ ...p, title: undefined }")

        .buttons
            a.button.rounded-b.space-x-2(href="https://github.com/d3c0d3dpt" target="_blank" rel="noreferrer")
                github-icon.mr-1
                div GitHub
</template>
