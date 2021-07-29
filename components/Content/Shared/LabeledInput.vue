<template lang="pug">
    label.input-container.cursor-text(:class="[activeClass, focusClass]")
        input(v-model="inputValue" :type="type" @focus="focused = true" @blur="focused = false" required)

        span {{ label }}
</template>

<script lang="ts">
import { Component, Prop, VModel, Vue } from 'vue-property-decorator';

@Component
export default class LabeledInput extends Vue {
    @VModel({ type: String }) inputValue?: string;

    @Prop({ type: String, required: true }) label!: string;

    @Prop({ type: String, default: 'text' }) type!: string;

    focused = false;

    get activeClass () {
        return this.focused || !!this.inputValue ? 'active' : '';
    }

    get focusClass () {
        return this.focused ? 'focus' : '';
    }
}
</script>
