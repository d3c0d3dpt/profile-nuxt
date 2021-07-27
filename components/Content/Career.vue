<template lang="pug">
    article.card.p-4r.space-y-6r
        h2.flex.items-center
            briefcase-icon.mr-4r(:size="48")
            | {{ $t('career.title') }}

        section.space-y-4r
            .space-y-4r(v-for="job in $t('career.path')" :key="job.company")
                section.grid.gap-4r(class="grid-cols-1 lg:grid-cols-3 xl:grid-cols-4")
                    .flex.flex-col
                        h3 {{ job.role }}

                        anchor(:href="job.companyHref") {{ job.company }}

                        anchor(:href="job.locationHref") {{ job.location }}

                        span.text-gray-500 {{ job.date }}

                    .space-y-4r(class="col-span-1 lg:col-span-2 xl:col-span-3")
                        project.card.border.p-4r(v-for="p in job.projects" :key="p.title" :project="p")
</template>
