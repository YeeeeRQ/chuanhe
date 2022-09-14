<template>
  <div class="collection-wrapper">
    <div class="collection">
      <div class="collection-image-wrapper">
        <img class="collection-image" src="../assets/pic1.png" alt="" />
        <div class="image-desc">永远的女神#15</div>
        <div class="tags">
          <img class="tag" :src="myRequire('../../images/tag1')" alt="" />
          <img class="atlas" :src="myRequire('../../images/atlas')" alt="" />
          <div class="right-tags">
            <div class="right-tags-wrapper">
              <img
                class="is-cast"
                :src="myRequire('../../images/cast')"
                alt=""
              />
              <img
                class="is-exchange"
                :src="myRequire('../../images/exchange')"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div class="identification">
        <span class="collection-id">#100</span>
        <span class="collection-tag">
          <img :src="myRequire('../../images/2d')" alt="" />
        </span>
      </div>

      <div class="operation">
        <Button class="collection-remove">下架</Button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { myRequire } from "../utils";
import Button from "./Button";
</script>

<style lang="scss" scoped>
.collection-wrapper {
  width: 50%;
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
}
.collection {
  box-sizing: border-box;

  position: relative;
  width: 182px;
  height: 226px;

  .collection-image-wrapper {
    position: relative;
    display: flow-root;
    line-height: 0;
  }
  img.collection-image {
    width: 182px;
    height: 182px;
    border-radius: 10%;
  }
  .image-desc {
    height: 40px;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));
    padding-bottom: 5px;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
  }
  .tags {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    right: 0;
    bottom: 0;

    > img.tag {
      width: 48px;
      position: absolute;
      top: 8px;
      left: 8px;
    }
    > img.atlas {
      width: 25px;
      position: absolute;
      top: 6px;
      right: 6px;
    }
    > .right-tags {
      position: absolute;
      right: 0;
      bottom: 36px;
      > .right-tags-wrapper {
        display: flex;
        flex-direction: column;
        > img {
          width: 29px;
        }
      }
    }
  }
  > .identification {
    height: 23px;
    display: flex;
    justify-content: space-between;
    > .collection-id {
      font-size: 14px;
      font-weight: 400;
      line-height: 18px;
      text-align: left;
      vertical-align: center;
    }
    > .collection-tag {
      > img {
        height: 23px;
      }
    }
  }

  .operation {
    display: flow-root;

    > .collection-remove {
      border: none;
      color: #fff;

      box-sizing: border-box;
      float: right;
      background-color: rgb(227, 81, 81);
      border-radius: 4px;
      margin: 1px 0px 1px 0px;
      padding: 2px 11px;
      font-size: 10px;
      font-weight: 400;
      line-height: 13px;
      text-align: center;

      &:active {
        background-color: rgba(227, 81, 81, 0.8);
      }
    }
  }
}
</style>
