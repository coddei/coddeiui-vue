<template>
    <div
        :class="[
            'c-col',
            `c-col--col-${cols}`,

            // responsive | {} with ` doesn't work
            xs > 0 ? `c-col--col-xs-${xs}` : '',
            sm > 0 ? `c-col--col-sm-${sm}` : '',
            md > 0 ? `c-col--col-md-${md}` : '',
            lg > 0 ? `c-col--col-lg-${lg}` : '',
            xl > 0 ? `c-col--col-xl-${xl}` : '',
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
        @Prop({ type: [String, Number], default: "0" }) public xs!: string | number;
        @Prop({ type: [String, Number], default: "0" }) public sm!: string | number;
        @Prop({ type: [String, Number], default: "0" }) public md!: string | number;
        @Prop({ type: [String, Number], default: "0" }) public lg!: string | number;
        @Prop({ type: [String, Number], default: "0" }) public xl!: string | number;
    }
</script>
