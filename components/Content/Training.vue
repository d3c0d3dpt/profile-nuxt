<template lang="pug">
    article.card.padding-box.space-y-standard
        h2.flex.items-center
            award-icon.mr-4(:size="48")
            | {{ $t('training.title') }}

        section.grid.gap-4(class="grid-cols-1 sm:grid-cols-2 xl:grid-cols-3")
            div(v-for="i in $t('training.list')" :key="i.title + i.date")
                h3 {{ i.title }}
                    span.font-normal  ({{ i.type }})

                span.text-gray-500 {{ i.date }}
</template>
