<template>
    <button
        v-on="listeners"
        :class="[
            'c-button',
            { 'c-button--active': !!active },

            // colors
            { 'c-button--primary': !color && !danger && !success && !warning && !dark && !light },
            { 'c-button--success': !!success },
            { 'c-button--warning': !!warning },
            { 'c-button--danger': !!danger },
            { 'c-button--dark': !!dark },
            { 'c-button--light': !!light },

            // types
            { 'c-button--default': !plain && !flat && !outlined && !gradient && !raised && !text && !shadow && !floating },
            { 'c-button--plain' : !!plain },
            { 'c-button--flat' : !!flat },
            { 'c-button--outlined' : !!outlined },
            { 'c-button--gradient' : !!gradient },
            { 'c-button--raised' : !!raised },
            { 'c-button--text' : !!text },
            { 'c-button--shadow' : !!shadow },
            { 'c-button--floating' : !!floating },
        ]"
        :style="{
            '--c-color': $data.__color
        }"
    >
        <div
            :class="[
                'c-button__content',
            ]"
        >
            <slot></slot>
        </div>
    </button>
</template>

<script lang="ts">
    import cComponent from "../cComponent/cComponent.vue";
    import { Component, Prop } from 'vue-property-decorator';

    import createRipple from "../../utils/rippleEffect/index";


    @Component
    export default class cButton extends cComponent {

        @Prop({ type: Boolean, default: true }) public ripple!: boolean;

        @Prop({ type: Boolean, default: false }) public plain!: boolean;
        @Prop({ type: Boolean, default: false }) public flat!: boolean;
        @Prop({ type: Boolean, default: false }) public outlined!: boolean;
        @Prop({ type: Boolean, default: false }) public gradient!: boolean;
        @Prop({ type: Boolean, default: false }) public raised!: boolean;
        @Prop({ type: Boolean, default: false }) public text!: boolean;
        @Prop({ type: Boolean, default: false }) public shadow!: boolean;
        @Prop({ type: Boolean, default: false }) public floating!: boolean;

        @Prop({ type: String, default: null }) public to!: string | null;

        mounted() {
            console.log("cButton");
        }

        get listeners() {
            return Object.assign({}, this.$listeners, {
                click: (event: EventTarget) => {
                    if (this.to) {
                        this.$router.push(this.to);
                    }

                    this.$emit("click", event);
                },
                mousedown: (event: EventTarget) => {
                    if (this.ripple) {
                        if (this.flat) {
                            createRipple(
                                event,
                                !this.active && document.activeElement !== this.$el,
                                !this.active && document.activeElement !== this.$el
                            );
                        } else {
                            createRipple(event);
                        }
                    }

                    this.$emit("mousedow", event);
                }
            })
        }
    }
</script>
