<template>
    <div class="auto-layout">
        <div class="auto-layout__body">
            <slot></slot>
        </div>
    </div>
</template>

<style lang="less">
    .auto-layout{
        // background-color: #eee;
        &__body{
            min-width: 320px;
            max-width: 1200px;
            margin: 20px auto 0;
        }
    }
</style>
