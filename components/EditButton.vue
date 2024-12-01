<script setup lang="ts">
const { blogId } = defineProps<{
  blogId: number;
  size?: "default" | "sm" | "lg" | "icon" | null | undefined;
}>();
</script>

<template>
  <NuxtLink :href="`/blogs/edit/${blogId}`"
    ><Button variant="outline" :size class="hidden md:block"> Edit </Button
    ><Button variant="outline" size="icon" class="md:hidden">
      <LucideEdit3 /> </Button
  ></NuxtLink>
</template>
