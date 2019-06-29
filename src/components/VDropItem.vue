<template>
    <div @click="onClick" :class="{itemStyle:defalutSlot}">
        <!--  itemData 设置       -->
        <div v-if="$slots.default"><span><slot></slot></span></div>
        <div v-else>
            <img v-if="!!contentData.icon" :src="contentData.icon" style="width: 1em;vertical-align: middle;">
            <span v-if="!$slots.default" :style="contentData.style" style="width: 1.5em;vertical-align: middle;">
            {{contentData.content}}
             </span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "VDropItem",
        props: {
            itemData: { //nvalid default value for prop "itemData": Props with type Object/Array must use a factory function to return the default value.
                type: [Object, String, Number],
                default: () => {
                    return {
                        content: "",
                        icon: "",
                        disabled: false,
                        isTitle: false,
                        contentStyle: {},
                        iconStyle: {}

                    }
                }
            },
        },
        data() {
            return {

                defalutSlot: !this.$slots.default,
                contentData: typeof this.itemData == "object" ? this.itemData : {content: this.itemData}
            }
        },
        methods: {
            onClick() {
                console.log("slogt",this.defalutSlot)
                if (!this.$slots.default) {
                    this.$emit('click', this.contentData)
                } else {
                    this.$emit('click')
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    .itemStyle {
        padding-top: 8px;
        padding-bottom: 8px;
    }

    div {
        border-bottom: 1px solid grey;
        background: #DA5926;
        text-align: center;

        &:last-of-type {
            border-bottom: none;
        }

        &:hover {
            background: #EF2F29;
        }
    }
</style>
