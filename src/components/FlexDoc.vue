<template>
    <div class="contain">
        <h1>Flex布局</h1>
        <p>弹性盒子是 CSS3 的一种新的布局模式。
            CSS3 弹性盒（ Flexible Box 或 flexbox），是一种当页面需要适应不同的屏幕大小以及设备类型时确保元素拥有恰当的行为的布局方式。
            引入弹性盒布局模型的目的是提供一种更加有效的方式来对一个容器中的子元素进行排列、对齐和分配空白空间。</p>
        <p>Flex提供容器和字项两类属性，容器属性可以统一控制子项的位置偏移，排列、对齐方式</p>
        <div class="menu-contain">
            <div class="menu-item">
                <p v-for="item in containAttr">{{item}}</p>
            </div>
            <div class="menu-item">
                <p v-for="item in childAttr">{{item}}</p>
            </div>
        </div>
        <h2>属性</h2>

        <div class="show-contain">
            <div>
                <p><strong>flex-direction:</strong> 可以控制容器内的排列顺序，水平排列或者竖直，或者反着</p>
                <div class="radio">
                    <label v-for="item in flexDirectionAttr" :key="item.name" @mouseover="showDesc(item,$event)"
                           @mouseleave="hideDesc(item,$event)">
                        <input type="radio" name="direction" :value="item.name" v-model="directValue"/>{{item.name}}
                    </label>
                </div>

                <p><strong>flex-wrap:</strong>用来控制子项整体单行显示还是换行显示，如果换行，则下面一行是否反方向显示。</p>
                <div class="radio">
                    <label v-for="item in flexWapAttr" :key="item.name" @mouseover="showDesc(item,$event)"
                           @mouseleave="hideDesc(item,$event)">
                        <input type="radio" name="wrap" :value="item.name" v-model="wrapValue"/>{{item.name}}
                    </label>
                </div>
                <p><strong>justify-content:</strong>属性决定了水平方向子项的对齐和分布方式</p>
                <div class="radio">
                    <label v-for="item in justifyContentAttr"
                           :key="item.name" @mouseover="showDesc(item,$event)"
                           @mouseleave="hideDesc(item,$event)">
                        <input type="radio" name="justify-content" :value="item.name" v-model="justifyContentValue"/>{{item.name}}
                    </label>
                </div>
                <p><strong>align-content:</strong>可以看成和justify-content是相似且对立的属性，justify-content指明水平方向flex子项的对齐和分布方式，而align-content则是指明垂直方向每一行flex元素的对齐和分布方式。如果所有flex子项只有一行，则align-content属性是没有任何效果的。
                </p>
                <div class="radio">
                    <label v-for="item in alignContentAttr"
                           :key="item.name" @mouseover="showDesc(item,$event)"
                           @mouseleave="hideDesc(item,$event)">
                        <input type="radio" name="align-content" :value="item.name" v-model="alignContentValue"/>{{item.name}}
                    </label>
                </div>
                <p><strong>align-items:</strong>中的items指的就是flex子项们，因此align-items指的就是flex子项们相对于flex容器在垂直方向上的对齐方式</p>
                <div class="radio">
                    <label v-for="item in alignItemsAttr" :key="item.name" @mouseover="showDesc(item,$event)"
                           @mouseleave="hideDesc(item,$event)">
                        <input type="radio" name="align-items" :value="item.name" v-model="alignItemsValue"/>{{item.name}}
                    </label>
                </div>
            </div>

            <div style="min-height: 500px">
                <div class="flex-content"
                     :style="{flexDirection:directValue,flexWrap:wrapValue,justifyContent:justifyContentValue,alignContent:alignContentValue,alignItems:alignItemsValue}">
                    <!--                <div v-for="(item,index) in animaSrc" :data-index="index" >-->
                    <!--                    <img :src="item">-->
                    <!--                    &lt;!&ndash;                    <span style="position: relative;border-radius: 50%;background-color: red;padding: 8px;bottom: 100%;top:-100%;">{{index}}</span>&ndash;&gt;-->
                    <!--                </div>-->
                    <div v-for="(item,index) in dataSrc" class="show-item" :key="index"
                         :class="{'selectItem':item.selected}" @click="clickItem(item)"
                         :style="{background:item.color,width:item.w,height:item.h,marginLeft:'10px',textAlign:'center',
                         order:item.order,flexGrow: item.grow,flexShrink: item.shrink,flexBasis: item.basic,alignSelf:item.alignSelf}">
                        <span>{{item.index}}</span>
                        <!--                    <span style="position: relative;border-radius: 50%;background-color: red;padding: 8px;bottom: 100%;top:-100%;">{{index}}</span>-->
                    </div>
                </div>
            </div>
            <div>
                <p><strong>order:</strong> flex子项的排序位置 <input type="range" min="-20" max="20"
                                                              v-model="selectItemStyle.order" style="margin: 10px">{{selectItemStyle.order}}
                </p>
                <p><strong>flex-grow:</strong> flex子项所占据的宽度，扩展所侵占的空间就是除去元素外的剩余的空白间隙。不支持负值 <input type="range" min="0"
                                                                                                 max="10"
                                                                                                 v-model="selectItemStyle.flexGrow"
                                                                                                 style="margin: 10px">{{selectItemStyle.flexGrow}}
                </p>
                <p><strong>flex-shrink:</strong> 主要处理当flex容器空间不足时候，单个元素的收缩比例。<input type="range" min="0" max="10"
                                                                                    v-model="selectItemStyle.flexShrink"
                                                                                    style="margin: 10px">{{selectItemStyle.flexShrink}}
                </p>
                <p><strong>flex-basis:</strong> 定义了在分配剩余空间之前元素的默认大小 <input type="range" min="0" max="300"
                                                                           v-model="selectItemStyle.flexBasis"
                                                                           style="margin: 10px">{{selectItemStyle.flexBasis
                    == 300? "auto":selectItemStyle.flexBasis}}</p>
                <p><strong>align-self:</strong>指控制单独某一个flex子项的垂直对齐方式</p>
                <div class="radio">
                    <label v-for="item in alignSelfAttr" :key="item.name" @mouseover="showDesc(item,$event)"
                           @mouseleave="hideDesc(item,$event)">
                        <input type="radio" name="align-items" :value="item.name" v-model="selectItemStyle.alignSelf"/>{{item.name}}
                    </label>
                </div>
            </div>
        </div>
        <p><strong>flex-flow: <‘flex-direction’> || <‘flex-wrap’></strong></p>
        <p><strong>place-content: <'align-content'> <'justify-content'></strong></p>
        <p><strong>flex: none | auto | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]</strong></p>
        <p>align-content为flex-end的时候 滚动条问题</p>
        <p>可乐图片过大挤压问题</p>
        <p>just content空间分配</p>
        <div id="attDesc" style="display: none">
            <div>
                <span>{{showPopDesc}}</span>
            </div>
        </div>

        <h2>应用</h2>
        <p>信用生活</p>
        <div style="width: 540px;height: 960px;border-radius: 4px;border: grey solid 1px; margin: 0 auto;display: flex;flex-direction: column">
            <div style="border-bottom: 1px solid grey;text-align:center;padding: 15px;">
                <span style="font-weight: bolder;font-size: 20px;">信用生活</span>
            </div>

            <div style="width: 100%;height: 100%;overflow: auto">
                <!--上面文字-->
                <div style="display: flex;justify-content: space-between ;padding: 0 10px">
                    <p>我的信用分： 100</p>
                    <span style="border-radius: 8px; border: #0099CC solid 1px;color: #0099CC;align-self: center;padding: 5px 15px">登录查看</span>
                </div>
                <!--banner图片-->
                <div style="padding: 0 10px;margin-top: 10px">
                    <img style="width: 100%;border-radius: 8px;"
                         src="http://image.jiedianqian.com/activity/1561538214912.png">
                </div>

                <div style="display: flex;justify-content: space-between">
                    <p style="padding-left:30px;font-size: 20px;color: black;background-image: url('http://m.jiedianqian.com/public/creditdetect/bg-title-icon.png'); background-repeat: no-repeat;  ">
                        信用检测</p>
                    <p style="align-self: center;margin-right: 10px">会员免检测，立省<span style="color: #ffb836">218</span>元，立即开通
                        ></p>
                </div>

                <div style="display: flex;justify-content: space-around">
                    <div style="display: flex;flex-direction: column;align-items: center;flex: 1">
                        <img style="width: 50px" src="https://image.jiedianqian.com/member/credit/credit-blacklist.png">
                        <span style="align-self: center">黑名单</span>
                    </div>
                    <div style="display: flex;flex-direction: column;align-items: center;flex: 1">
                        <img style="width: 50px" src="https://image.jiedianqian.com/member/credit/credit-call-risk.png">
                        <span style="align-self: center">通话风险</span>
                    </div>
                    <div style="display: flex;flex-direction: column;align-items: center;flex: 1">
                        <img style="width: 50px"
                             src="https://image.jiedianqian.com//member/credit/credit-many-loans.png">
                        <span style="align-self: center">多头借贷</span>
                    </div>
                    <div style="display: flex;flex-direction: column;align-items: center;flex: 1">
                        <img style="width: 50px"
                             src="https://image.jiedianqian.com//member/credit/credit-contact-risk.png">
                        <span style="align-self: center">联系人风险</span>
                    </div>
                </div>
                <br>
                <div style="width: 100% ;height: 20px; background: #B9C8CB"></div>

                <div>
                    <p style="padding-left:30px;font-size: 20px;color: black;background-image: url('http://m.jiedianqian.com/public/creditdetect/bg-title-icon.png'); background-repeat: no-repeat;  ">
                        便捷工具</p>
                </div>

                <div style="display: flex;">
                    <div style="display: flex;flex-direction: column;align-items: center;flex: 1">
                        <img style="width: 50px"
                             src="https://image.jiedianqian.com//member/credit/credit-product-parity.png">
                        <span style="align-self: center">产品PK</span>
                    </div>
                    <div style="display: flex;flex-direction: column;align-items: center;flex: 1">
                        <img style="width: 50px" src="https://image.jiedianqian.com//member/credit/credit-taobao.png">
                        <span style="align-self: center">淘宝消费测评</span>
                    </div>
                    <div style="display: flex;flex-direction: column;align-items: center;flex: 1">
                        <img style="width: 50px" src="https://image.jiedianqian.com//member/credit/credit-gjj.png">
                        <span style="align-self: center">公积金分析</span>
                    </div>
                    <div style="display: flex;flex-direction: column;align-items: center;flex: 1">
                        <img style="width: 50px" src="https://image.jiedianqian.com//member/credit/credit-calc.png">
                        <span style="align-self: center">贷款计算器</span>
                    </div>
                </div>
                <br>
                <div style="width: 100% ;height: 20px; background: #B9C8CB"></div>

                <div style="display: flex;justify-content: space-between">
                    <p style="padding-left:30px;font-size: 20px;color: black;background-image: url('http://m.jiedianqian.com/public/creditdetect/bg-title-icon.png'); background-repeat: no-repeat;  ">
                        金币秒杀</p>
                    <p style="align-self: center;margin-right: 10px">火爆抢购中，进入游戏大厅 ></p>
                </div>

                <div style="margin: 0 10px 10px 10px;border-radius: 10px;box-shadow:#d4d4d48a 6px 7px 10px 0px;">
                    <p style="margin:0;padding: 10px;border-radius:10px 10px 0 0;background: linear-gradient(#FC3E48,#FC4D55);color: white;">
                        <span style="font-size: 20px;font-weight: bold;margin-right: 15px;font-style: italic">秒杀规则</span>今日秒杀
                    </p>
                    <div style="display: flex;width: 100%;justify-content: space-around;">
                        <div style="flex: 1;align-self: center;text-align: center">
                            <img style="width: 100px" src="http://image.jiedianqian.com//activity/可乐460.png">
                            <p style="margin: 0;background: rgba(247,130,12,.8);border-radius: 15px;padding: 5px 8px;color: white">
                                价值￥48</p>
                        </div>
                        <div style="display: flex;flex-direction: column;align-items: flex-start;justify-content: space-around;flex: 1.5;padding-left: 10px">
                            <p style="margin: 0;font-weight: bold;font-size: 20px">可口可乐 330ml*24罐 整箱装</p>
                            <p style="margin: 0;">已参与21/50人次</p>
                            <p style="margin: 0;color: #FC4D55">限时1金币 <span style="font-size: 20px;text-decoration: line-through;color: #817f7f">100金币</span>
                            </p>
                        </div>
                        <div style="flex: 1;text-align: center">
                            <div class="progress" style="text-align: center;padding-top:30px;padding-left: 20px"><span style="">50%</span></div>
                            <p style="margin: 0 auto; color: #FC4D55">召集进度</p>
                            <p style="margin: 0;background: red;border-radius: 16px;padding: 8px 10px;color: white">
                                立即秒杀</p>
                        </div>
                    </div>
                    <p style="color: #DA5926;background: #ffb836;border-radius: 5px;padding: 4px 8px;margin-top: 18px">恭喜尾号3939的玩家在金币大战中胜出</p>
                </div>

                <div style="width: 100% ;height: 20px; background: #B9C8CB"></div>

                <div>
                    <p style="padding-left:30px;font-size: 20px;color: black;background-image: url('http://m.jiedianqian.com/public/creditdetect/bg-title-icon.png'); background-repeat: no-repeat;  ">
                        便利生活</p>
                </div>

                <div style="display: flex;margin-bottom: 20px">
                    <div style="display: flex;flex-direction: column;align-items: center;flex: 1">
                        <img style="width: 50px"
                             src="https://image.jiedianqian.com//member/credit/credit-mobile-recharge.png">
                        <span style="align-self: center">手机充值</span>
                    </div>
                    <div style="display: flex;flex-direction: column;align-items: center;flex: 1">
                        <img style="width: 50px" src="https://image.jiedianqian.com//member/credit/credit-card.png">
                        <span style="align-self: center">赚钱</span>
                    </div>
                    <div style="display: flex;flex-direction: column;align-items: center;flex: 1">
                        <img style="width: 50px" src="https://image.jiedianqian.com//member/credit/credit-jietiao.png">
                        <span style="align-self: center">信用卡</span>
                    </div>
                    <div style="display: flex;flex-direction: column;align-items: center;flex: 1">
                        <img style="width: 50px"
                             src="https://image.jiedianqian.com//member/credit/credit-gold-mall.png">
                        <span style="align-self: center">金币商城</span>
                    </div>
                </div>

                <div style="width: 100% ;height: 20px; background: #B9C8CB"></div>

                <div style="display: flex;justify-content: space-between">
                    <p style="padding-left:30px;font-size: 20px;color: black;background-image: url('http://m.jiedianqian.com/public/creditdetect/bg-title-icon.png'); background-repeat: no-repeat;  ">
                        热门卡片</p>
                    <p style="align-self: center;margin-right: 10px">查看更多 ></p>

                </div>

                <div style="display: flex;">
                    <div style="display: flex;flex-direction: column;align-items: center;flex: 1">
                        <img style="width: 50px"
                             src="https://image.jiedianqian.com//member/credit/credit-mobile-recharge.png">
                        <span style="align-self: center">手机充值</span>
                    </div>
                    <div style="display: flex;flex-direction: column;align-items: center;flex: 1">
                        <img style="width: 50px" src="https://image.jiedianqian.com//member/credit/credit-card.png">
                        <span style="align-self: center">赚钱</span>
                    </div>
                    <div style="display: flex;flex-direction: column;align-items: center;flex: 1">
                        <img style="width: 50px" src="https://image.jiedianqian.com//member/credit/credit-jietiao.png">
                        <span style="align-self: center">信用卡</span>
                    </div>
                    <div style="display: flex;flex-direction: column;align-items: center;flex: 1">
                        <img style="width: 50px"
                             src="https://image.jiedianqian.com//member/credit/credit-gold-mall.png">
                        <span style="align-self: center">金币商城</span>
                    </div>
                </div>


            </div>

            <div style="border-bottom: 1px solid grey;text-align:center;padding: 10px;border-top: grey solid 1px">
                <div style="display: flex;justify-content: space-around;">
                    <div style="display: flex;flex-direction: column;align-items: center;flex: 1">
                        <img style="width: 30px" src="../assets/home_tab_focused.png">
                        <span style="align-self: center">首页</span>
                    </div>
                    <div style="display: flex;flex-direction: column;align-items: center;flex: 1">
                        <img style="width: 30px" src="../assets/main_search_focused.png">
                        <span style="align-self: center">借钱</span>
                    </div>
                    <div style="display: flex;flex-direction: column;align-items: center;flex: 1">
                        <img style="width: 30px" src="../assets/my_focused.png">
                        <span style="align-self: center">我的</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "FlexDoc",
        data() {
            return {
                selectItemStyle: {
                    order: 0,
                    flexGrow: 0,
                    flexShrink: 1,
                    flexBasis: 'auto',
                    alignSelf: 'auto',
                },
                containAttr: ['flex-direction', 'flex-wrap', 'flex-flow', 'justify-content', "align-items", "align-content"],
                childAttr: ['order', 'flex-grow', 'flex-shrink', 'flex-basis', "flex", "align-self"],
                animaSrc: [
                    "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4065270481,1049841685&fm=27&gp=0.jpg",
                    "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3737209718,3558618958&fm=27&gp=0.jpg",
                    "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2279055805,3887160486&fm=27&gp=0.jpg",
                    "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=452966427,3842240659&fm=27&gp=0.jpg",
                    "http://img.mp.itc.cn/upload/20161201/156b54efb6674347a15fbffbf84841d0.jpg",
                ],
                dataSrc: new Array(20).toString().split(',').map(function (item, index) {
                    let w = index % 2 == 0 ? '200px' : '150px'
                    let h = index % 2 == 0 ? '100px' : '200px'
                    return {
                        index: index,
                        color: "#CC7A31", w: w,
                        h: h,
                        order: 0,
                        grow: 0,
                        shrink: 1,
                        basic: 'auto',
                        alignSelf: "auto",
                        selected: false
                    };
                }),
                directValue: "row",
                wrapValue: "nowrap",
                justifyContentValue: "flex-start",
                alignContentValue: "flex-start",
                alignItemsValue: "flex-start",
                //['row','row-reverse','column','column-reverse']
                flexDirectionAttr: [
                    {
                        name: 'row',
                        desc: '默认值，显示为行。方向为当前文档水平流方向，默认情况下是从左往右。',
                    }, {
                        name: 'row-reverse',
                        desc: '显示为行。但方向和row属性值是反的。',
                    }, {
                        name: 'column',
                        desc: '显示为列',
                    }, {
                        name: 'column-reverse',
                        desc: '显示为列。但方向和column属性值是反的。',
                    },
                ],
                flexWapAttr: [
                    {name: "nowrap ", desc: "默认值，表示单行显示，不换行"},
                    {name: "wrap ", desc: "宽度不足换行显示"},
                    {name: "wrap-reverse ", desc: "宽度不足换行显示，但是是从下往上开始，也就是原本换行在下面的子项现在跑到上面"},
                ],
                justifyContentAttr: [
                    {name: "flex-start", desc: "默认值。与文档流方向相关。默认表现为左对齐。"},
                    {name: "flex-end", desc: "与文档流方向相关。默认表现为右对齐。"},
                    {name: "center", desc: "表现为居中对齐"},
                    {name: "space-between", desc: "表现为两端对齐。between是中间的意思，意思是多余的空白间距只在元素中间区域分配"},
                    {name: "space-around", desc: "around是环绕的意思，意思是每个flex子项两侧都环绕互不干扰的等宽的空白间距，最终视觉上边缘两侧的空白只有中间空白宽度一半"},
                    {name: "space-evenly", desc: "evenly是匀称、平等的意思。也就是视觉上，每个flex子项两侧空白间距完全相等"},
                ],
                alignItemsAttr: [
                    {
                        name: "stretch",
                        desc: "默认值。flex子项拉伸。在演示中我们可以看到白蓝径向渐变背景区域是上下贯穿flex容器的，就是因为flex子项的高度拉伸到容器高度导致。如果flex子项设置了高度，则按照设置的高度值渲染，而非拉伸"
                    },
                    {name: "flex-start", desc: "与文档流方向相关。默认表现为容器顶部对齐"},
                    {name: "flex-end", desc: "与文档流方向相关。默认表现为容器底部对齐"},
                    {name: "center", desc: "表现为垂直居中对齐"},
                    {name: "baseline", desc: "表现为所有flex子项都相对于flex容器的基线对齐"},
                ],
                alignContentAttr: [
                    {name: "stretch", desc: "默认值。每一行flex子元素都等比例拉伸。例如，如果共两行flex子元素，则每一行拉伸高度是50%。"},
                    {name: "flex-start", desc: "与文档流方向相关。默认表现为顶部堆砌。"},
                    {name: "flex-end", desc: "与文档流方向相关。默认表现为底部堆放。"},
                    {name: "center", desc: "表现为垂直居中对齐"},
                    {name: "space-between", desc: "表现为上下两行两端对齐。剩下每一行元素等分剩余空间。"},
                    {name: "space-around", desc: "每一行元素上下都享有独立不重叠的空白空间。"},
                    {name: "space-evenly", desc: "每一行元素都完全上下等分"},
                ],
                alignSelfAttr: [
                    {name: "auto", desc: "（默认值），表示继承自flex容器的align-items属性值"},
                    {
                        name: "stretch",
                        desc: "默认值。flex子项拉伸。在演示中我们可以看到白蓝径向渐变背景区域是上下贯穿flex容器的，就是因为flex子项的高度拉伸到容器高度导致。如果flex子项设置了高度，则按照设置的高度值渲染，而非拉伸"
                    },
                    {name: "flex-start", desc: "与文档流方向相关。默认表现为容器顶部对齐"},
                    {name: "flex-end", desc: "与文档流方向相关。默认表现为容器底部对齐"},
                    {name: "center", desc: "表现为垂直居中对齐"},
                    {name: "baseline", desc: "表现为所有flex子项都相对于flex容器的基线对齐"},
                ],
                childAttrList: [
                    {name: "order", desc: 'flex子项的排序位置'},
                    {name: "flex-grow", desc: 'flex子项所占据的宽度，扩展所侵占的空间就是除去元素外的剩余的空白间隙。'},
                    {name: "flex-shrink", desc: '主要处理当flex容器空间不足时候，单个元素的收缩比例'},
                    {name: "flex-basis", desc: '定义了在分配剩余空间之前元素的默认大小'},
                    {name: "align-self", desc: '控制单独某一个flex子项的垂直对齐方式'},
                ],
                showPopDesc: "",
                currentItem: null

            }
        },
        methods: {
            clickItem(item) {
                this.dataSrc.forEach((items) => {
                    if (items != item && items.selected) items.selected = false
                })
                item.selected = !item.selected
                this.currentItem = item;
                /*order:0,
                        grow:0,
                        shrink:1,
                        basic:'auto',
                        alignSelf:"auto",*/
                this.selectItemStyle.alignSelf = item.alignSelf
                this.selectItemStyle.flexBasis = item.basic == 300 ? "auto" : item.basic
                this.selectItemStyle.flexShrink = item.shrink
                this.selectItemStyle.flexGrow = item.grow
                this.selectItemStyle.order = item.order
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
            getElementLeft(element) {
                var actualLeft = element.offsetLeft;
                var current = element.offsetParent;
                while (current !== null) {
                    actualLeft += current.offsetLeft;
                    current = current.offsetParent;
                }
                return actualLeft;
            },
            showDesc(item, $event) {

                let tar = $event.target
                var oDiv = document.getElementById('attDesc');
                var scrollTop = this.getElementTop(tar)
                var scrollLeft = this.getElementLeft(tar);
                oDiv.style.display = "block";

                // console.log("scrollTop  scrollLeft",scrollTop,scrollLeft)
                oDiv.style.left = scrollLeft + 10 + 'px';
                oDiv.style.top = scrollTop + 30 + 'px';
                this.showPopDesc = item.desc
            },
            hideDesc(item, $event) {
                // this.showDescFlag = false;
                document.getElementById('attDesc').style.display = "none";
            },

        },
        watch: {
            selectItemStyle: {
                handler(newValue, oldValue) {
                    // this.selectItem
                    console.log("selectItemStyle", newValue)
                    if (!this.currentItem) {
                        return
                    }

                    this.currentItem.alignSelf = newValue.alignSelf
                    this.currentItem.basic = newValue.flexBasis == 300 ? "auto" : newValue.flexBasis
                    this.currentItem.shrink = newValue.flexShrink
                    this.currentItem.grow = newValue.flexGrow
                    this.currentItem.order = newValue.order
                },
                deep: true
            },
            directValue(n, o) {
                console.log("directValue", n, this.directValue)
            }
        }
    }
</script>

<style scoped lang="scss">

    .progress {
        color: red;
        position: relative;
        width: 80px;
        height: 40px;
        &:before{
            content: " ";
            display: block;
            left: 30px;
            top: 10px;
            width: 60px;
            position: absolute;
            height: 60px;
            border-radius: 50%;
            border-top: green solid 6px;
            border-left: green solid 6px;
        }
        &:after{
            left: 30px;
            top: 10px;
            content: " ";
            display: block;
            position: absolute;
            width: 60px;
            height: 60px;
            border-radius: 50%;
            border-right: firebrick solid 6px;
            border-bottom: firebrick solid 6px;
            overflow: hidden;
        }
    }

    .show-item {
        border: #8f244c solid 1px;
    }

    .selectItem {
        border: #EF2F29 solid 2px;
    }

    #attDesc {
        position: absolute;

        &::before {
            display: block;
            position: absolute;
            content: " ";
            width: 0;
            height: 0;
            left: 50px;
            top: -20px;
            border-width: 10px;
            border-style: solid;
            border-color: transparent transparent #0099CC transparent;
        }

        div {
            padding: 8px;
            max-width: 200px;
            background: #ffb836;
            border-radius: 4px;
            border: #00c3ac solid 1px;
        }
    }

    .contain {
        width: 70%;
        margin: 0 auto;
    }

    .menu-contain {
        display: flex;
        width: 100%;
        border-radius: 5px;
        background-color: #2D2B55;
        padding: 10px;
        color: white;
        text-align: center;

        div {
            flex: 1;
            height: 100%;
            border: #8f244c dashed 1px;

            &:nth-child(2) {
                margin-left: 10px;
            }

            p:hover {
                color: #ffb836;
                transform: scale(2);
            }
        }
    }

    .show-contain {
        border-radius: 4px;
        border: #2D2B55 solid 1px;
        padding: 8px;
        overflow: auto;
        background: rgba(146, 144, 144, 0.78);

        .radio {
            input {
                width: 30px;
                height: 30px;
                vertical-align: middle;
            }

            label {
                line-height: 30px;
                margin-left: 10px;

            }
        }


        .flex-content {
            overflow: auto;
            border: #2D2B55 dashed 1px;
            margin-top: 15px;
            padding: 8px;
            display: flex;
            height: 500px;
        }


    }
</style>
