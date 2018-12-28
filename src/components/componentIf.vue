<template>
    <div class="componentIf">
        <div v-for="component in item.model"> 
            <layouta v-if="component.name==='w390A'"></layouta>
            <layoutb v-if="component.name==='W800A'"></layoutb>
            <layoutc v-if="component.name==='W800B'"></layoutc>
            <layoutd v-if="component.name==='w390B'"></layoutd>
            <layout01 v-if="component.name==='layoutBannerA'"></layout01>
            <layoute v-if="component.name==='layoutBannerB'"></layoute>
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
    export default{
        components:{layout01,layouta,layoutb,layoutc,layoutd,layoute}
    }
</script>
<style>

</style>
