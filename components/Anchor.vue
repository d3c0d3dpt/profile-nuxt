<template lang="pug" functional>
    a.text-indigo-800.text-sm(v-bind="data.attrs" v-on="listeners" target="_blank")
        slot

        external-link-icon.inline.align-text-top(class="ml-0.5" :size="8")
</template>
