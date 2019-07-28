<template>
    <div>
        <div @click="goSearch">我要去测试搜索功能</div>

        <router-link to="/v-search-page2">标签跳转测试搜索</router-link>
    </div>
</template>

<script>
export default {
    data() {
        return{}
    },
    methods: {
        goSearch() {
            this.$router.push({
                path: '/v-search-page2'
            })
        }
    }
}
</script>

