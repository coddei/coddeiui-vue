<template>
    <div
        :class="[
            'c-col',
            `c-col--col-${cols}`,
            `c-col--offset-${offset}`,

            // responsive | {} with ` doesn't work
            xs > 0 ? `c-col--col-xs-${xs}` : '',
            sm > 0 ? `c-col--col-sm-${sm}` : '',
            md > 0 ? `c-col--col-md-${md}` : '',
            lg > 0 ? `c-col--col-lg-${lg}` : '',
            xl > 0 ? `c-col--col-xl-${xl}` : '',
            // offset
            offsetXs > 0 ? `c-col--offset-xs-${offsetXs}` : '',
            offsetSm > 0 ? `c-col--offset-sm-${offsetSm}` : '',
            offsetMd > 0 ? `c-col--offset-md-${offsetMd}` : '',
            offsetLg > 0 ? `c-col--offset-lg-${offsetLg}` : '',
            offsetXl > 0 ? `c-col--offset-xl-${offsetXl}` : '',
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

        // cols
        @Prop({ type: [String, Number], default: "12" }) public cols!: string | number;
        @Prop({ type: [String, Number], default: "0" }) public xs!: string | number;
        @Prop({ type: [String, Number], default: "0" }) public sm!: string | number;
        @Prop({ type: [String, Number], default: "0" }) public md!: string | number;
        @Prop({ type: [String, Number], default: "0" }) public lg!: string | number;
        @Prop({ type: [String, Number], default: "0" }) public xl!: string | number;

        // offset
        @Prop({ type: [String, Number], default: "0" }) public offset!: string | number;
        @Prop({ type: [String, Number], default: "0" }) public offsetXs!: string | number;
        @Prop({ type: [String, Number], default: "0" }) public offsetSm!: string | number;
        @Prop({ type: [String, Number], default: "0" }) public offsetMd!: string | number;
        @Prop({ type: [String, Number], default: "0" }) public offsetLg!: string | number;
        @Prop({ type: [String, Number], default: "0" }) public offsetXl!: string | number;
    }
</script>
