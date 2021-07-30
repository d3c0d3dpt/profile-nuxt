<template lang="pug">
    form.card(@submit.prevent="submit")
        .padding-box.space-y-standard
            h2.flex.items-center.space-x-4
                phone-icon(size="48")
                div {{ $t('contact.title') }}

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
            button.button.rounded-b.w-full.space-x-2(v-if="!sent" type="submit")
                send-icon
                div {{ $t('contact.send') }}

            button.button.rounded-b.w-full.cursor-default.space-x-2(v-else-if="sentFailed" type="submit")
                x-icon
                div {{ $t('contact.sendFailed') }}

            button.button.rounded-b.w-full.cursor-default.space-x-2(v-else-if="sentSuccessful" disabled)
                check-icon
                div {{ $t('contact.sendSuccessful') }}

            button.button.rounded-b.w-full.cursor-wait(v-else disabled)  {{ $t('contact.sendPending') }}
</template>

<script lang="ts">
import { CheckIcon, PhoneIcon, SendIcon, XIcon } from 'vue-feather-icons';

import { Component, Vue } from 'vue-property-decorator';

import LabeledInput from './Shared/LabeledInput.vue';
import LabeledTextarea from './Shared/LabeledTextarea.vue';

@Component({ components: { CheckIcon, LabeledInput, LabeledTextarea, PhoneIcon, SendIcon, XIcon } })
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
            await this.$fire.functionsReady();

            this.$fire.analytics.logEvent('contact request');
            const result = await this.$fire.functions.httpsCallable('sendMail')({
                name: this.name,
                email: this.email,
                message: this.message
            });

            if (result.data.success) {
                this.$fire.analytics.logEvent('contact request succeeded');
                this.sentSuccessful = true;
                return;
            }
        } catch (e) {
            console.error(e);
        }

        this.$fire.analytics.logEvent('contact request failed');
        this.sentFailed = true;
    }
}
</script>
