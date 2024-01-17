<template>
    <div class="contents-title">
        <h2>{{ title }}</h2>
        <p>{{ summary }}</p>
    </div>
</template>
  
<script lang="ts" setup>
    const props = defineProps({
        title:String,
        summary:String,
    });
</script>