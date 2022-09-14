<template>
  <div class="library-nav">
    <span
      class="category"
      v-for="(item, index) in categoryList"
      :key="item.id"
      :class="{ active: selectFlag[index] }"
      @click="select(index, item.id)"
      >{{ item.name }}</span
    >
  </div>
</template>
<script lang="ts" setup>
import { reactive } from "vue";

type categoryItem = {
  name: string;
  id: number;
};
interface Props {
  categoryList: categoryItem[];
}
const props = defineProps<Props>();

const selectFlag: boolean[] = reactive(new Array(props.categoryList.length));
if (selectFlag.length > 0) {
  selectFlag[0] = true;
}

const select = (index: number, id: number) => {
  console.log("selectID: " + id);
  for (let i = 0; i < selectFlag.length; i++) {
    if (selectFlag[i]) {
      selectFlag[i] = false;
      break;
    }
  }
  selectFlag[index] = true;
};
</script>

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
