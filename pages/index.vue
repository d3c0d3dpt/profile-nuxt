<template lang="pug">
    .container.mx-auto
        .grid
            sidebar

            content.space-y-6r
                skills
                career
                projects
                training
                academic
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class MainPage extends Vue {
}
</script>

<style lang="scss">
.container {
    @apply p-2 md:p-6 xl:max-w-screen-xl;

    > .grid {
        @apply gap-2 grid-cols-1 md:gap-6 md:grid-cols-7;

        > :first-child {
            @apply md:col-span-2;
        }

        > :last-child {
            @apply md:col-span-5;
        }
    }
}
</style>
