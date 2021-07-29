<template lang="pug">
    label.input-container.cursor-text(:class="[activeClass, focusClass]")
        textarea(v-model="inputValue" @focus="focused = true" @blur="focused = false" rows="5" required)

        span {{ label }}
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator';

import LabeledInput from '~/components/Content/Shared/LabeledInput.vue';

@Component
export default class LabeledTextarea extends LabeledInput {
}
</script>
