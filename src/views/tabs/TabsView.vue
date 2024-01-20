<template>
    <div>
      <RouterView/>
      <VanTabbar v-model="active">
        <VanTabbarItem name="home" icon="home-o">首页</VanTabbarItem>
        <VanTabbarItem name="order" icon="bars">订单</VanTabbarItem>
        <VanTabbarItem name="mine" icon="contact">我的</VanTabbarItem>
      </VanTabbar>
    </div>
</template>

<script setup lang="ts">
import { RouterView, useRoute, useRouter } from 'vue-router';
import { ref, watch } from 'vue';

const route = useRoute()
const router = useRouter()
const active = ref(route.name as string)

watch(active, (nv) => {
  router.push({
    name: nv,
  })
})
</script>

<style scoped>

</style>