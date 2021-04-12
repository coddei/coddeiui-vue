<template>
    <div
        :class="[
            'c-col',
            `c-col--cols-${this.cols}`
        ]"
    >
        <slot></slot>
    </div>
</template>

<script lang="ts">
    import Vue from "vue"
    import { Component, Prop } from 'vue-property-decorator';

    @Component
    export default class cCol extends Vue {
        static install: (vue: any) => void;

        @Prop({ type: [String, Number], default: "12" }) public cols!: string | number;
    }
</script>
