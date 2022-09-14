<template>
  <div class="gallery-wrapper">
    <div class="toolbar">
      <span class="back">
        <span class="back-icon"></span>
      </span>
      <span class="title">数字藏品</span>
      <span class="collection-add">上架</span>
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
          <div class="collection-wrapper">
            <div class="collection">
              <div class="collection-image-wrapper">
                <img class="collection-image" src="../assets/pic1.png" alt="" />
                <div class="image-desc">永远的女神#15</div>
                <div class="tags">
                  <img
                    class="tag"
                    :src="myRequire('../../images/tag1')"
                    alt=""
                  />
                  <img
                    class="atlas"
                    :src="myRequire('../../images/atlas')"
                    alt=""
                  />
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

              <div class="identification">
                <span class="collection-id">#100</span>
                <span class="collection-tag">
                  <img :src="myRequire('../../images/2d')" alt="" />
                </span>
              </div>

              <div class="operation">
                <span class="collection-remove">下架</span>
              </div>
            </div>
          </div>
          <div class="collection-wrapper">
            <div class="collection">
              <div class="collection-image-wrapper">
                <img class="collection-image" src="../assets/pic1.png" alt="" />
                <div class="image-desc">永远的女神#15</div>
                <div class="tags">
                  <img
                    class="tag"
                    :src="myRequire('../../images/tag1')"
                    alt=""
                  />
                  <img
                    class="atlas"
                    :src="myRequire('../../images/atlas')"
                    alt=""
                  />
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

              <div class="identification">
                <span class="collection-id">#100</span>
                <span class="collection-tag">
                  <img :src="myRequire('../../images/2d')" alt="" />
                </span>
              </div>

              <div class="operation">
                <span class="collection-remove">下架</span>
              </div>
            </div>
          </div>
          <div class="collection-wrapper">
            <div class="collection">
              <div class="collection-image-wrapper">
                <img class="collection-image" src="../assets/pic1.png" alt="" />
                <div class="image-desc">永远的女神#15</div>
                <div class="tags">
                  <img
                    class="tag"
                    :src="myRequire('../../images/tag1')"
                    alt=""
                  />
                  <img
                    class="atlas"
                    :src="myRequire('../../images/atlas')"
                    alt=""
                  />
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

              <div class="identification">
                <span class="collection-id">#100</span>
                <span class="collection-tag">
                  <img :src="myRequire('../../images/2d')" alt="" />
                </span>
              </div>

              <div class="operation">
                <span class="collection-remove">下架</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
//自定义require方法
const myRequire = (name: string) => {
  return new URL(`/src/assets/${name}.png`, import.meta.url).href;
};
</script>

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
  > .library-nav {
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
  > .library {
    // border: 1px solid #fff;
    flex: 1;
    .collections {
      display: flex;
      flex-wrap: wrap;
      // border: 1px solid #fff;

      .collection-wrapper {
        width: 50%;
        display: flex;
        justify-content: center;
        margin-bottom: 10px;
      }
      .collection {
        box-sizing: border-box;

        // outline: 1px solid #fff;
        position: relative;
        width: 182px;
        height: 226px;

        .collection-image-wrapper {
          position: relative;
          display: flow-root;
          line-height: 0;
        }
        img.collection-image {
          // outline: 1px solid #fff;
          // box-sizing: border-box;
          width: 182px;
          height: 182px;
          border-radius: 10%;
          background-color: #fff;
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
          background-image: linear-gradient(
            rgba(0, 0, 0, 0),
            rgba(0, 0, 0, 0.8)
          );
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
          > img.is-cast {
            width: 29px;
            position: absolute;
            right: 0;
            bottom: 30px;
          }
          > img.is-exchange {
            width: 29px;
            position: absolute;
            right: 0;
            bottom: 60px;
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
            box-sizing: border-box;
            float: right;
            background: rgb(227, 81, 81);
            border-radius: 4px;
            margin: 1px 0px 1px 0px;
            padding: 2px 11px;
            font-size: 10px;
            font-weight: 400;
            line-height: 13px;
            text-align: center;
          }
        }
      }
    }
  }
}
</style>
