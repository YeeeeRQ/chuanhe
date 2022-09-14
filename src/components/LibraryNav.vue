<template>
  <div class="library-nav">
    <span class="category">藏品</span>
    <span class="category">头像</span>
    <span class="category">盲盒</span>
    <span class="category active">其他</span>
  </div>
</template>
<script lang="ts" setup></script>

<style lang="scss" scoped>
.library-nav {
  // border: 1px solid gold;
  height: 42px;
  display: flex;
  justify-content: space-between;
  margin: 0px 76px;
  margin-top: 19px;
  .category {
    color: rgba(255, 255, 255, 0.65);
    font-family: Microsoft YaHei;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0%;
    text-align: left;
    display: flex;
    flex-direction: column;
    // border: 1px solid white;
    &.active {
      color: rgb(255, 255, 255);
    }
    &.active::after {
      content: "";
      width: 16px;
      border-bottom: 3px solid rgb(78, 159, 255);
      border-radius: 19px;
      margin: 0 auto;
      margin-top: 2px;
    }
  }
}
</style>
