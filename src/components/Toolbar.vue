<template>
  <div class="toolbar">
    <span class="back">
      <span class="back-icon"></span>
    </span>
    <span class="title">数字藏品</span>
    <Button class="collection-add">上架</Button>
  </div>
</template>

<script lang="ts" setup>
import Button from "./Button";
</script>

<style lang="scss" scoped>
.toolbar {
  // border: 2px solid red;
  height: 42px;
  display: flex;
  background: rgba(120, 120, 120, 0.1);
  .back {
    width: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    .back-icon {
      content: "";
      display: inline-block;
      height: 13px;
      width: 13px;
      border-width: 0px 0px 2px 2px;
      border-color: #fff;
      border-style: solid;
      transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
    }
  }
  .title {
    flex: 1;
    font-family: Microsoft YaHei;
    font-size: 18px;
    font-weight: 400;
    line-height: 24px;
    text-align: left;
    padding-top: 11px;
    padding-bottom: 11px;
  }
  .collection-add {
    border: none;
    color: #fff;
    background-color: rgb(61, 151, 255);
    border-radius: 4px;
    margin: 10px;
    padding: 3px 14px;
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    text-align: center;

    &:active {
      background-color: rgba(61, 151, 255, 0.8);
    }
  }
}
</style>
