<template>
  <div class="container"></div>
  <div class="title">
    <div class="back"></div>
    <div class="added"></div>
  </div>

  <div class="toolbar">
    <span>藏品</span>
    <span>头像</span>
    <span>盲盒</span>
    <span>其他</span>
  </div>

  <div class="library">
    <div class="collections">
      <div class="collection"></div>
      <div class="collection"></div>
      <div class="collection"></div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.title {
  border: 2px solid red;
  height: 42px;
}

.toolbar {
  border: 1px solid gold;
  height: 42px;
}

// .library {
//   border: 1px solid gray;
//   height: 100%;
// }
</style>
