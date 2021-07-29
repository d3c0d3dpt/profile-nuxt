<template lang="pug">
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
