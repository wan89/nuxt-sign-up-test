<template>
    <div class="contents-title">
        <h2>{{ title }}</h2>
        <p>{{ summery }}</p>
    </div>
</template>
  
<script lang="ts" setup>
    const props = defineProps({
        title:String,
        summery:String,
    });
</script>