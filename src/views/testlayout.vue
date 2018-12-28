<template>
    <div class="">
        <div class="layout clearfix" v-for="(item,index) in layoutData" :key="index">
            <!-- 通栏布局 -->
            <div v-if="item.layout==='01'">
                <div class="layout01">
                      <div v-for="component in item.model"> 
                        <layout01 v-if="component.name==='BannerA'"></layout01>
                        <layoute v-else-if="component.name==='BannerB'"></layoute>
                    </div>
                </div>
            </div>
            <!-- 左390右800布局 -->
            <div class="clearfix fixedCenterStyle" v-else-if="item.layout==='02'">
                <div class="layout02model01 layout02">
                   <div v-for="component in item.model"> 
                        <layouta v-if="component.name==='W390A'"></layouta>
                        <layoutd v-else-if="component.name==='W390B'"></layoutd>
                    </div>
                </div>
                <div class="layout02model02 layout02">
                    <div v-for="component in item.model"> 
                        <layoutb v-if="component.name==='W800A'"></layoutb>
                        <layoutc v-else-if="component.name==='W800B'"></layoutc>
                    </div>
                </div>
            </div>
            <!-- 左800右390布局 -->            
            <div class="clearfix fixedCenterStyle" v-else-if="item.layout==='03'">
                <div class="layout03model01 layout03">
                    <div v-for="component in item.model"> 
                        <layoutb v-if="component.name==='W800A'"></layoutb>
                        <layoutc v-else-if="component.name==='W800B'"></layoutc>

                    </div>
                </div>
                <div class="layout03model02 layout03">
                    <div v-for="component in item.model"> 
                        <layouta v-if="component.name==='W390A'"></layouta>
                        <layoutd v-else-if="component.name==='W390B'"></layoutd>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import layout01 from '@/components/layoutModel/layout01'
import layouta from '@/components/layoutModel/layouta'
import layoutb from '@/components/layoutModel/layoutb'
import layoutc from '@/components/layoutModel/layoutc'
import layoutd from '@/components/layoutModel/layoutd'
import layoute from '@/components/layoutModel/layoute'
import componentIf from '@/components/componentIf'
export default{
    data(){
        return {
            /*
            * 布局类型     别名
            *  窗口通栏     01
            * 左390右800    02
            * 左800右390    03
            /*

            /*类型（以宽度划分）      与后台数据对应的别名              现已开发组件文件名
            *   通栏宽度             Banner(A、B、C.....)   layout01.vue  layoute.vue
            *   宽度390px            w390(A、B、C.....)       layouta.vue   layoutd.vue
            *   宽度800px            w800(A、B、C.....)       layoutb.vue   layoutc.vue
            * */
           layoutData:[ //从后台拿到的运营平台保存的数据
{
    "layout": "01",
    "model": [{
        "name": "BannerA",
        "layoutDivClass": "layoutBoxBanner"
    }]
},
{
    "layout": "02",
    "model": [{
        "name": "W800A",
        "layoutDivClass": "layoutBox800"
    },
    {
        "name": "W390A",
        "layoutDivClass": "layoutBox390"
    }]
}
               ]
        }
    },
     components:{layout01,layouta,layoutb,layoutc,layoutd,layoute,componentIf}
}
</script>
<style lang="less" scoped>
    .layout{
        margin-bottom: 20px;
        text-align: center;
    }
    .layout01{
        width: 100%;
    }
    .layout02,.layout03{
        float: left;
    }
    .layout02model01,.layout03model01{
        margin-right: 10px
    }
    .layout02model01,.layout03model02{
        width: 390px;
    }
    .layout02model02,.layout03model01{
        width: 800px;
    }
</style>
