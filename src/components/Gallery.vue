<template>
  <div class="gallery-wrapper">
    <Toolbar />
    <LibraryNav
      :category-list="categoryList"
      @select="(id) => (selectedCategoryID = id)"
    />
  </div>
  <div class="library">
    <div class="collections">
      <Collection
        v-for="item in currentCollections"
        :key="'' + item.category_id + item.id"
        :collect="item"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import Toolbar from "./Toolbar.vue";
import LibraryNav from "./LibraryNav.vue";
import Collection from "./Collection.vue";
import { onMounted, reactive, ref, watch } from "vue";
import { CollectionList } from "./type";
import axios from "axios";

const categoryList = [
  {
    name: "藏品",
    id: 1,
  },
  {
    name: "头像",
    id: 2,
  },
  {
    name: "盲盒",
    id: 3,
  },
  {
    name: "其他",
    id: 4,
  },
];

/* 藏品展示 */
let collections: CollectionList = [];
let currentCollections: CollectionList = reactive([]);

const loadCurrentCollection = (id: number) => {
  console.log("loadCollection:", id);
  while (currentCollections.pop());

  collections
    .filter((item) => {
      return item.category_id === id;
    })
    .forEach((item) => {
      currentCollections.push(item);
    });
  console.log(currentCollections);
};

onMounted(async () => {
  const url = "/v1/data/getDataList";
  const { data: res } = await axios.get(url);
  if (res.code !== 0) {
    window.alert("载入藏品失败！请刷新重试");
    return;
  }
  collections = res.data;
  console.log(res.data);
  // 载入藏品
  loadCurrentCollection(categoryList[0].id); //init
});

const selectedCategoryID = ref();
watch(selectedCategoryID, (newID) => {
  console.log("watch");
  loadCurrentCollection(newID);
});
</script>

<style lang="scss" scoped>
.gallery-wrapper {
  // overflow-y: auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: rgb(21, 22, 42);
  color: rgb(255, 255, 255);
}

.library-wrapper {
  display: flex;
  flex-direction: column;
  flex: 1;
}
.library {
  overflow-y: auto;
  position: absolute;
  left: 0;
  top: 103px;
  bottom: 0;
  right: 0;
  padding: 0 0.18rem 0.3rem 0.18rem;
  .collections {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
