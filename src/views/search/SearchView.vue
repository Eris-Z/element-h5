<template>
    <div class="search-view" @click="emits('cancel')">搜索页</div>
</template>

<script setup lang="ts">
interface IEmits {
    (e: 'cancel'): void
}
const emits = defineEmits<IEmits>()

</script>

<style scoped lang="scss">
.search-view {
   position: absolute;
   background-color: #ffffff;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   z-index: 999; 
}
</style>