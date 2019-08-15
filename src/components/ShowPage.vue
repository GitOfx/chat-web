<template>
    <div >
        <!-- <Clippathview></Clippathview> -->
        <!-- <Css3D> </Css3D> -->
        <!-- <FlexDoc></FlexDoc> -->
        <!-- <Svgg></Svgg> -->
        <VPregress></VPregress>
    </div>
</template>

<script>
    import VButton from "@/components/VButton";
    import VDropList from "@/components/VDropList";
    import VDropItem from "@/components/VDropItem";
    import VContentEditer from "@/components/VContentEditer";
    import Clippathview from "@/components/Clippath"
    import CssWether from "@/components/CssWether"
     import Css3D from "@/components/Css3D"
     import FlexDoc from "@/components/FlexDoc"
     import Svgg from "@/components/Svg"
     import VPregress from "@/components/css-effect/proress"
    export default {
        name: "ShowPage",
        components: {VContentEditer, VDropItem, VDropList, VButton,Clippathview,CssWether,Css3D,FlexDoc,Svgg,VPregress},
        data() {
            return {
                
            }
        },
        methods: {
           
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
