<template>
    <div class="c-row">
        <slot></slot>
    </div>
</template>

<script lang="ts">
    import Vue from "vue"
    import { Component, Prop } from 'vue-property-decorator';

    @Component
    export default class cRow extends Vue {
        static install: (vue: any) => void;
    }
</script>
