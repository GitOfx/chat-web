<template>
    <div class="product">
        <img class="vip-flag" src="../assets/vip-subscript.png">
        <div class="top">
            <img src="http://image.jiedianqian.com/product/member/member_icon.png">
            <div class="right">
                <div class="title">
                    <span>正经会员产品 </span><span>1万人申请</span>
                </div>
                <div class="content">
                    <span><b>1-50万</b><em>可贷额度</em><i></i></span>
                    <span><b>2.5%</b> <em>参考日利率</em></span>
                    <button>申请</button>
                </div>
            </div>
        </div>
        <div class="buttom">
            <span>借小二借过几次，确实不错，人间难得的好产品</span>
        </div>

        <div id="heart">

        </div>
        <div id="infinity">

        </div>
        <div id="yin-yang">

        </div>
    </div>
</template>

<script>
    export default {
        name: "ProductItem"
    }
</script>

<style scoped lang="scss">
    #yin-yang {
        width: 96px;
        box-sizing: content-box;
        height: 48px;
        background: #eee;
        border-color: red;
        border-style: solid;
        border-width: 2px 2px 50px 2px;
        border-radius: 100%;
        position: relative;
    }
    #yin-yang:before {
        content: "";
        position: absolute;
        top: 50%;
        left: 0;
        background: #eee;
        border: 18px solid red;
        border-radius: 100%;
        width: 12px;
        height: 12px;
        box-sizing: content-box;
    }
    #yin-yang:after {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        background: red;
        border: 18px solid #eee;
        border-radius: 100%;
        width: 12px;
        height: 12px;
        box-sizing: content-box;
    }
    #infinity {
        position: relative;
        width: 212px;
        height: 100px;
        box-sizing: content-box;
    }
    #infinity:before,
    #infinity:after {
        content: "";
        box-sizing: content-box;
        position: absolute;
        top: 0;
        left: 0;
        width: 60px;
        height: 60px;
        border: 20px solid red;
        border-radius: 50px 50px 0 50px;
        transform: rotate(-45deg);
    }
    #infinity:after {
        left: auto;
        right: 0;
        border-radius: 50px 50px 50px 0;
        transform: rotate(45deg);
    }

    #heart {
        position: relative;
        width: 100px;
        height: 90px;
    }
    #heart:before,
    #heart:after {
        position: absolute;
        content: "";
        left: 50px;
        top: 0;
        width: 50px;
        height: 80px;
        background: #a1ff2c;
        border-radius: 50px 50px 0 0;
        transform: rotate(-45deg);
        transform-origin: 0 100%;
    }
    #heart:after {
        left: 0;
        background: rgba(203, 174, 168, 0.53);
        transform: rotate(45deg);
        transform-origin: 100% 100%;
    }

    .product {
        width: 100%;
        background-color: white;
        border-radius: 8px;
        overflow: hidden;
        position: relative;
        box-shadow: 0 8px 30px -8px rgba(0, 0, 0, 0.15);

        em{
            font-style:normal;
        };
        .vip-flag {
            width: 72PX;
            height: 68PX;
            z-index: 10;
            position: absolute;
        }


        .top {
            margin: 10px;
            img {
                display: inline-block;
                width: 60px;
                height: 60px;
                float: left;
            }

            > div {
                margin-left: 70px;
            }

            .title {
                overflow: hidden;
                margin: 0 auto;
                text-align: center;
                vertical-align: middle;
                position: relative;
                span:first-of-type {
                    float: left;
                    left: 0;
                    top: 0;
                    bottom: 0;
                    text-overflow: ellipsis;
                    vertical-align: middle;
                    font-size: 1.1em;
                    line-height: 30px;
                    &:after{
                        display: inline-block;
                        content: "";
                        width: 40px;
                        height: 30px;
                        background: url("../assets/vip-drill.png") no-repeat 8px 0;
                        background-size: 20px 20px;
                        vertical-align: middle;
                    }
                }

                span:last-of-type {
                    color: rgb(152, 152, 152);
                    float: right;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    text-align: center;
                    vertical-align: middle;
                }
            }

            .content {
                vertical-align: middle;
                position: relative;
                font-style:normal;
                span {
                    display: inline-block;
                    font-size: 0.9em;
                    &:first-of-type {
                        margin-right: 30px;
                    }

                    b:first-of-type {
                        display: block;
                        color: #00c3ac;
                    }

                }

                button {
                    background-color: #00c3ac;;
                    border: none;
                    float: right;
                    top: 0;
                    bottom: 0;
                    vertical-align: middle;
                    color: white;
                    padding: 5px 12px;
                    border-radius: 5px;
                }

            }
        }
    }
</style>
