<template lang="pug">
    article.card.p-4r.space-y-6r
        h2.flex.items-center
            book-icon.mr-4r(:size="48")
            | {{ $t('academic.title') }}

        section.space-y-4r
            .space-y-4r(v-for="degree in $t('academic.path')" :key="degree.title")
                section
                    h3 {{ degree.title }}

                    .flex.flex-col
                        anchor(:href="degree.locationHref") {{ degree.location }}

                        span.text-gray-500 {{ degree.date }}

                p {{ degree.description }}
</template>
