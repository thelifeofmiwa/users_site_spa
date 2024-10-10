<template>
    <div id="app">
        <user-page-composition />
    </div>
</template>

<script lang="ts">
import UserPageComposition from "./components/UserPageComposition.vue";
export default {
    components: { UserPageComposition },
};
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
</style>
