<template lang="pug">
    aside.card
        img.rounded-t(src="/photo.jpg")

        .p-4r.space-y-4r
            .text-center
                h1 Álvaro Ferreira
                h3 Web Engineer

            p {{ $t('sidebar.profile') }}

            sidebar-entry(:title="$t('sidebar.age', [age])" :description="$t('sidebar.birthday')")
                user-icon(:size="32")

            sidebar-entry(
                :title="$t('sidebar.location')"
                :description="$t('sidebar.locationDescription')"

                href="https://www.openstreetmap.org/relation/3372453"
            )
                map-pin-icon(:size="32")

            sidebar-entry(title="me@aferreira.xyz" :description="$t('sidebar.contact')" href="mailto:me@aferreira.xyz")
                mail-icon(:size="32")

            sidebar-entry(title="LinkedIn" description="@alvarojgf" href="https://www.linkedin.com/in/alvarojgf")
                linked-in-icon(:size="32")

            sidebar-entry(:title="$t('sidebar.locales.0')" :description="$t('sidebar.locales.1')")
                flag-icon(:size="32")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Sidebar extends Vue {
    age = new Date(Date.now() - 731286000000).getUTCFullYear() - 1970;
}
</script>
