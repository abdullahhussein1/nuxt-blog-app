<script setup lang="ts">
const { size } = defineProps<{ size: number }>();
</script>

<template>
  <div>
    <LucideLoader
      class="animate-spin w-full my-4 text-muted-foreground duration-[2000ms]"
      :size
      stroke-width="1.5"
    />
  </div>
</template>
