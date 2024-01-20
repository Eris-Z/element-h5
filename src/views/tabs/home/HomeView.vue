<template>
    <div class="home-page">
        <SearchView v-if="isSearchViewShow" @cancel="toggleSearchView"></SearchView>
        <TheTop :recomments="recomments" @searchClick="toggleSearchView"/>
    </div>
</template>

<script setup lang="ts">
import TheTop from '../home/components/TheTop.vue';
import SearchView from '../../search/SearchView.vue';
import { useToggle } from '@/useHooks/useToggle';
const recomments = [
    {
        value: 1,
        label: '牛腩',
    },
    {
        value: 1,
        label: '番茄',
    },
]
const [isSearchViewShow, toggleSearchView] = useToggle(false)
</script>

<style scoped>
.test {
    font-size: 39px;
}

</style>