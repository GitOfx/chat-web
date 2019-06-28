<template>
    <div id="contain" style="margin: 16px;overflow: auto">
<!--        <v-ons-button style="margin: 6px 0">Normal</v-ons-button>-->
<!--        <v-ons-button modifier="quiet" style="margin: 6px 0">Quiet</v-ons-button>-->
<!--        <v-ons-button modifier="outline" style="margin: 6px 0">Outline</v-ons-button>-->
<!--        <v-ons-button modifier="cta" style="margin: 6px 0">Call to action</v-ons-button>-->
<!--        <v-ons-button @click="click" modifier="large" style="margin: 6px 0">Large</v-ons-button>-->
<!--        {{name}} -&#45;&#45;&#45;&#45;-->
<!--        {{getElementClass()}}-->
<!--        <v-button>vbutton</v-button>-->
        <div style="overflow: auto">
            <h2>下拉菜单</h2>
            数据封装 {{selectValue1}}<br>
            <v-drop-list class="drop-list" :menu-children="menuChildren" :head-icon="true" v-model="selectValue1" :head-style="headStyle" @click="clickItem">
<!--                <v-drop-item v-for="(menu,index) in menuChildren" :key="index" :item-data="menu"></v-drop-item>-->
            </v-drop-list>
            <div class="block">
                手动添加item  手动同步v-model  和click {{selectValue2}}<br>
                <v-drop-list class="drop-list"  :head-icon="true" v-model="selectValue2" :head-style="headStyle" >
                    <v-drop-item v-for="(menu,index) in menuChildren" :key="index" :item-data="menu" @click="clickList2"></v-drop-item>
                </v-drop-list>
            </div>
            <div class="block">
                手动添加自定义 item  {{selectValue3}}<br>
                <v-drop-list class="drop-list" v-model="selectValue3" :head-style="headStyle" >
                    <v-drop-item v-for="(menu,index) in menuChildren1" :key="index"  @click="clickList3(menu)">
                        <div style="color: #00c3ac;background: #ffb836">
                            {{menu}}
                        </div>
                    </v-drop-item>
                </v-drop-list>
            </div>
        </div>

        <div style="margin-top: 200px">
            <v-content-editer  ></v-content-editer>
        </div>

    </div>
</template>

<script>
    import VButton from "@/components/VButton";
    import VDropList from "@/components/VDropList";
    import VDropItem from "@/components/VDropItem";
    import VContentEditer from "@/components/VContentEditer";
    export default {
        name: "ShowPage",
        components: {VContentEditer, VDropItem, VDropList, VButton},
        data() {
            return {
                headStyle:{
                    color:"black",
                },
                selectValue1:"value1",
                selectValue2:"value2",
                selectValue3:"value3",
                name: "typeof HTMLElement",
                menuChildren:[{content:"111",icon:require("../assets/img.png")},"default2","default3"],
                menuChildren1:["111","default2","default3"],
            }
        },
        methods: {
            clickList2(item){
                console.log("clicklist",item)
                this.selectValue2 = item.content
            },
            clickList3(menu){
                console.log("clicklist3",menu)
                this.selectValue3 = menu
            },
            clickItem(item){
                console.log("clickItem",item)
            },
            click() {
                this.name = typeof (document.querySelector("#contain"))
            },

            getElementClass() {
                if (typeof HTMLElement == 'function') { // case of Safari
                    const BaseElement = () => {};
                    BaseElement.prototype = document.createElement('div');
                    return BaseElement;
                } else {
                    return HTMLElement;
                }
            }
        }
    }
</script>

<style scoped>

    .block{
        margin-top: 100px;
    }
    #contain{
        height: 100%;
        overflow: scroll;
        overflow-y: scroll;
    }
    .drop-list {
        text-align: center;
        padding: 0 auto;

    }
</style>
