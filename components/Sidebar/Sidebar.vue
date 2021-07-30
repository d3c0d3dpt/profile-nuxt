<template lang="pug">
    aside.card
        .rounded-t.overflow-hidden
            .mx-auto.max-w-md(class="lg:max-w-none lg:w-full")
                .aspect-w-1.aspect-h-1
                    img(src="/photo.jpg" alt="Profile Picture")

        .margin-box-container
            .text-center
                h1 Álvaro Ferreira
                h2 Web Engineer

            p {{ $t('sidebar.profile') }}

            sidebar-entry(:title="$t('sidebar.age', [age])" :description="$t('sidebar.birthday')")
                user-icon(size="32")

            sidebar-entry(:title="$t('sidebar.location')" :description="$t('sidebar.locationDescription')")
                map-pin-icon(size="32")

            sidebar-entry(:title="$t('sidebar.locales.0')" :description="$t('sidebar.locales.1')")
                flag-icon(size="32")

        .grid.grid-cols-3
            a.button.flex.flex-col.rounded-bl(href="mailto:me@aferreira.xyz" target="_blank" rel="noreferrer")
                mail-icon(size="32")
                span.text-current E-Mail

            a.button.flex.flex-col(href="https://github.com/d3c0d3dpt" target="_blank" rel="noreferrer")
                github-icon(size="32")
                span.text-current GitHub

            a.button.flex.flex-col.rounded-br(
                href="https://www.linkedin.com/in/alvarojgf"
                target="_blank"
                rel="noreferrer"
            )
                linkedin-icon(size="32")
                span.text-current LinkedIn
</template>

<script lang="ts">
import { FlagIcon, GithubIcon, LinkedinIcon, MailIcon, MapPinIcon, UserIcon } from 'vue-feather-icons';

import { Component, Vue } from 'vue-property-decorator';

import SidebarEntry from './SidebarEntry';

@Component({
    components: { FlagIcon, GithubIcon, LinkedinIcon, MailIcon, MapPinIcon, SidebarEntry, UserIcon }
})
export default class Sidebar extends Vue {
    age = new Date(Date.now() - 731286000000).getUTCFullYear() - 1970;
}
</script>
