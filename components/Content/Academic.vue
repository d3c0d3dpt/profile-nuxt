<template lang="pug">
    article.card.padding-box.space-y-standard
        h2.flex.items-center.space-x-4
            book-icon(:size="48")
            div {{ $t('academic.title') }}

        section.space-y-standard
            .space-y-4(v-for="degree in $t('academic.path')" :key="degree.title")
                section
                    h3 {{ degree.title }}

                    .flex.flex-col
                        anchor(:href="degree.locationHref") {{ degree.location }}

                        span.text-gray-500 {{ degree.date }}

                p {{ degree.description }}
</template>
