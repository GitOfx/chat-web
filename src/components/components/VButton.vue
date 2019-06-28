<template>
    <button class="v-btn" :class="modifier">
        <i class="loading">1232</i>
        <span v-if="$slots.default"><slot></slot></span>
    </button>
</template>

<script>
    export default {
        name: "VButton",
        props:{
            /* default outline large quiet*/
            modifier:{
                type: String,
                default:"default"

            }
        },
        data(){
            return {
                // modifier:this.modifier
            }
        }

    }
</script>

<style scoped>

    .loading{
        width: 20px;
        height: 20px;
        background: #979944;
        display: inline-block;
        vertical-align: middle;
    }
    .v-btn{
        padding: 30px;
        border: none;
        outline-style: none;
    }

    .outline{

    }
</style>
