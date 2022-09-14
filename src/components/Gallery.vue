<template>
  <div class="gallery-wrapper">
    <Toolbar />

    <div class="library-wrapper">
      <LibraryNav />
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
import Collection from "./Collection.vue";
import LibraryNav from "./LibraryNav.vue";
import Toolbar from "./Toolbar.vue";
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
    // border: 1px solid #fff;
    flex: 1;
    .collections {
      display: flex;
      flex-wrap: wrap;
      // border: 1px solid #fff;
    }
  }
}
</style>
