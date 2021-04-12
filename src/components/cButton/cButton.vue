<template>
    <button
        :class="[
            'c-button',
            { 'c-button--active': !!this.active },

            { 'c-button--primary': !this.color && !this.danger && !this.success && !this.warning && !this.dark && !this.light },
            { 'c-button--success': !!this.success },
            { 'c-button--warning': !!this.warning },
            { 'c-button--danger': !!this.danger },
            { 'c-button--dark': !!this.dark },
            { 'c-button--light': !!this.light }
        ]"
        :style="{
            '--c-color': this.$data.__color
        }"
    >
        <div
            :class="[
                'c-button__content',
            ]"
        >
            TEST
        </div>
    </button>
</template>

<script lang="ts">
    import cComponent from "../cComponent/cComponent.vue";
    import { Component, Prop } from 'vue-property-decorator';

    @Component
    export default class cButton extends cComponent {

        mounted() {
            console.log("cButton");
        }
    }
</script>

<style></style>
