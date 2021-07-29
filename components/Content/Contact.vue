<template lang="pug">
    form.card(@submit.prevent="submit")
        .padding-box.space-y-standard
            h2.flex.items-center
                phone-icon.mr-4(:size="48")
                | {{ $t('contact.title') }}

            .space-y-4
                .grid.gap-4(class="grid-cols-1 lg:grid-cols-2")
                    labeled-input(v-model="name" type="text" name="name" :label="$t('contact.name')")
                    labeled-input(v-model="email" type="email" name="email" :label="$t('contact.email')")

                    labeled-textarea(
                        v-model="message"

                        class="lg:col-span-2"
                        name="message"

                        :label="$t('contact.message')"
                    )

        .buttons
            button.button.rounded-b.w-full(v-if="!sent" type="submit")
                send-icon.mr-1

                | {{ $t('contact.send') }}

            button.button.rounded-b.w-full.cursor-default(v-else-if="sentFailed" type="submit")
                x-icon.mr-1

                | {{ $t('contact.sendFailed') }}

            button.button.rounded-b.w-full.cursor-default(v-else-if="sentSuccessful" disabled)
                check-icon.mr-1

                | {{ $t('contact.sendSuccessful') }}

            button.button.rounded-b.w-full.cursor-wait(v-else disabled)  {{ $t('contact.sendPending') }}
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Contact extends Vue {
    name = '';
    email = '';
    message = '';

    sent = false;
    sentFailed = false;
    sentSuccessful = false;

    async submit () {
        this.sent = true;

        try {
            const result = await this.$fire.functions.httpsCallable('sendMail')({
                name: this.name,
                email: this.email,
                message: this.message
            });

            if (result.data.success) {
                this.sentSuccessful = true;
                return;
            }
        } catch (e) {
            console.error(e);
        }

        this.sentFailed = true;
    }
}
</script>