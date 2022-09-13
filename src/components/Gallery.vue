<template>
  <div class="gallery-wrapper">
    <div class="toolbar">
      <span class="back">
        <span class="back-rect"></span>
        <span class="back-rect"></span>
      </span>
      <span class="title">数字藏品</span>
      <span class="add">上架</span>
    </div>

    <div class="library-wrapper">
      <div class="library-nav">
        <span class="category">藏品</span>
        <span class="category">头像</span>
        <span class="category">盲盒</span>
        <span class="category active">其他</span>
      </div>

      <div class="library">
        <div class="collections">
          <div class="collection"></div>
          <div class="collection"></div>
          <div class="collection"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.gallery-wrapper {
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: rgb(21, 22, 42);
  color: rgb(255, 255, 255);
}
.toolbar {
  // border: 2px solid red;
  height: 42px;
  display: flex;
  background: rgba(120, 120, 120, 0.1);
  .back {
    width: 44px;
    // display: flex;
    // flex-direction: column;
    .back-rect:first-child {
      position: absolute;
      width: 2.15px;
      height: 12.64px;
      top: 21.94px;
      left: 16.54px;

      background: rgb(255, 255, 255);
      border-radius: 24px;
      transform: rotate(-135deg);
    }
    .back-rect:last-child {
      position: absolute;
      width: 2.15px;
      height: 12.64px;
      top: 12.94px;
      left: 17.94px;

      background: rgb(255, 255, 255);
      border-radius: 23px;
      transform: rotate(-45deg);
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
  .add {
    width: 49px;
    height: 22px;
    background: rgb(61, 151, 255);
    border-radius: 4px;
    margin: 10px;
    padding: 3px 11px;
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0%;
    text-align: center;
  }
}

.library-wrapper {
  display: flex;
  flex-direction: column;
  flex: 1;
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
      }
    }
  }

  .library {
    // border: 1px solid gray;
    flex: 1;
  }
}
</style>
