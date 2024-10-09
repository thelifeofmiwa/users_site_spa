<template>
    <div id="app">
        <!-- <user-page-options></user-page-options> -->
        <user-page-composition />
    </div>
</template>

<script lang="ts">
import UserPageComposition from "./components/UserPageComposition.vue";
import UserPageOptions from "./components/UserPageOptions.vue";
export default {
    components: { UserPageComposition, UserPageOptions },
};
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
</style>
