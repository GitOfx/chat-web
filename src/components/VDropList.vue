<template>
    <div class="drop-list" ref="dropContain">
        <div class="list-head" @mouseover="onDropShow($event)" @mouseout="onDropHide($event)" @click="clickHead" :style="headStyle">
            <span>{{selectMenu}}</span>
            <img @click="clickImg" src="@/assets/arrow-down.png" style="width: 1.5em;vertical-align: middle"
                 v-if="headIcon">
        </div>

        <transition name="drop-anima">
            <div>
                <ul v-show="showDrop" @mouseover="onDropShow($event)" @mouseout="onDropHide($event)" ref="menus"
                    class="menus" :class="{'menus-top':this.position=='top','menus-bottom':this.position=='bottom'}">
                    <v-drop-item v-for="(menu,index) in dataList" :key="index" :item-data="menu"
                                 @click="clickItem(menu)">
                    </v-drop-item>
                    <slot/>
                </ul>
            </div>
        </transition>

    </div>
</template>

<script>
    import VDropItem from "@/components/VDropItem";

    export default {
        name: "VDropList",
        components: {VDropItem},
        props: {
            menuChildren: {
                type: Array,
                default: () => []
            },
            dropAction: {
                type: String,
                default: "click"
            },
            dropIcon: {
                type: String,
                default: ""
            },
            headIcon: {
                type: Boolean,
                default: false
            },
            value: {
                type: [Boolean, String, Number],
                default: "select",
            },
            headStyle:{
                type:Object,
                default:()=>{}
            }
        },
        data() {
            return {
                position:'bottom',
                selectMenu: this.value,
                showDrop: false,
                showFlag: false,
                dataList: this.menuChildren.map((item) => {
                    // console.log("item ", item)
                    if (typeof item != "object") {
                        return {content: item}
                    }
                    return item;
                }),
                menusOffsetHeight:0 //初始化高度问题
            }
        },
        watch: {
            value: function (newShow, oldShow) {
                this.selectMenu = newShow;
            },
            showDrop: function (newShow, oldShow) {
                let contain = this.$refs.dropContain
                let menus = this.$refs.menus
                    console.log("contain ", this.$refs,contain)
                let containOffsetHeight = this.getElementTop(contain)
                this.menusOffsetHeight = menus.offsetHeight > 0?menus.offsetHeight:this.menusOffsetHeight
                let docScrollHei = document.body.scrollTop
                    || document.documentElement.scrollTop || 0;

                let docHeight = document.documentElement.clientHeight
                    || document.body.clientHeight || 0;

                if ((containOffsetHeight + this.menusOffsetHeight - docScrollHei) > docHeight) {
                    this.position = 'top';
                } else {
                    this.position = 'bottom';
                }
                
                console.log("showDrop ", newShow,this.position)
                console.log("containOffsetHeight menusOffsetHeight docScrollHei docHeight", containOffsetHeight,this.menusOffsetHeight,docScrollHei,docHeight)
            }
        },
        methods: {
            clickItem(item) {
                let seletValue = item
                if (typeof item == "object") {
                    seletValue = item.content
                }
                this.$emit('input', seletValue); //触发 input 事件，并传入新值
                this.$emit('click', seletValue)
                this.selectMenu = seletValue;
            },

            getElementTop(element) {
                var actualTop = element.offsetTop;
                var current = element.offsetParent;
                while (current !== null) {
                    actualTop += current.offsetTop;
                    current = current.offsetParent;
                }
                return actualTop;
            },
            onDropShow(event) {
                if (this.dropAction == "click" && !this.showDrop) {
                    return
                }
                this.show()
            },
            onDropHide(event) {
                this.hide()
            },
            clickImg() {

            },
            clickHead() {
                this.show()
            },
            show() {
                this.showDrop = true;
                this.showFlag = true;
            },
            hide() {
                this.showFlag = false;
                setTimeout(() => {
                        if (this.showFlag) return
                        this.showDrop = false
                    },
                    500)
            }
        }
    }
</script>

<style scoped lang="scss">

    .menus-top {
        bottom: 100%;
        
    }
    .menus-bottom {
        top: 110%;
         
    }

    .drop-list {
        position: relative;
        display: inline-block;

        .list-head {
            background: #DA5926;
            text-align: center;
            color: white;
            border-radius: 5px;
            padding: 10px 15px;
            font-size: 22px;

            &:hover {
                opacity: 0.6;
            }

            img {
                margin-left: 8px;
            }

            span {


            }
        }


        ul {
            list-style: none;
            width: 100%;
            padding: 0;
            border-radius: 4px;
            position: absolute;
            border: 1px solid grey;
            margin: 0px;
            box-shadow: 2px 2px 5px 2px #aaaaaa;
            font-size: 22px;
        }
    }

    .drop-anima-leave-active, .list-leave-to {
        transition: all 1s;
    }

    /*.list-enter, .list-leave-to*/
    /*    !* .list-leave-active for below version 2.1.8 *! {*/
    /*    opacity: 0;*/
    /*    transform: translateY(30px);*/
    /*}*/
    /*.drop-anima{*/

    /*}*/
</style>
