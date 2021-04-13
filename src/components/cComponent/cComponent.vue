<template>

</template>

<script lang="ts">
    import Vue from "vue";
    import { Component, Prop } from 'vue-property-decorator';

    import { getColor } from '../../utils/index';

    @Component
    export default class cComponent extends Vue {
        static install: (vue: any) => void;

        __color: any = null;

        @Prop({ type: String, default: null }) color!: string;
        @Prop({ type: Boolean, default: false }) primary!: boolean;
        @Prop({ type: Boolean, default: false }) danger!: boolean;
        @Prop({ type: Boolean, default: false }) success!: boolean;
        @Prop({ type: Boolean, default: false }) warning!: boolean;
        @Prop({ type: Boolean, default: false }) dark!: boolean;
        @Prop({ type: Boolean, default: false }) light!: boolean;
        @Prop({ type: Boolean, default: false }) active!: boolean;

        mounted() {
            this.$data.__color = this.color ? getColor(this.color) : '';
        }
    }
</script>
