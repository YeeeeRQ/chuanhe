<template>
  <div class="gallery-wrapper">
    <Toolbar />
    <div class="library-wrapper">
      <LibraryNav
        :category-list="categoryList"
        @select="(id) => (selectedCategoryID = id)"
      />
      <div class="library">
        <div class="collections">
          <Collection />
          <Collection />
          <Collection />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Toolbar from "./Toolbar.vue";
import LibraryNav from "./LibraryNav.vue";
import Collection from "./Collection.vue";
import { onMounted, ref, watch } from "vue";
import axios from "axios";

let categoryList = [
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

onMounted(async () => {
  const url = "/v1/data/getDataList";
  const { data: res } = await axios.get(url);
  console.log(res.data);
});

const selectedCategoryID = ref();
watch(selectedCategoryID, (newID) => {
  // filter
  // show
});
</script>

<style lang="scss" scoped>
.gallery-wrapper {
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

  > .library {
    flex: 1;
    .collections {
      display: flex;
      flex-wrap: wrap;
    }
  }
}
</style>
