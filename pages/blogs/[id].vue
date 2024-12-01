<script setup>
import Badge from "~/components/ui/badge/Badge.vue";

const route = useRoute();
const blogId = route.params.id;
const config = useRuntimeConfig();

const { data: blog } = await useFetch(
  `${config.public.apiBaseUrl}/api/blogs/${blogId}`,
  {
    headers: {
      "x-key": config.public.apiKey,
    },
  }
);
</script>

<template>
  <div class="flex flex-col gap-3">
    <div class="flex items-center gap-2">
      <p class="leading-7 font-medium text-muted-foreground">
        {{ blog.author }}
      </p>
      <Badge
        class="text-[11px] border-primary/40 bg-primary/10 hover:bg-primary/20 text-foreground font-medium"
        >{{ blog.status }}</Badge
      >
    </div>
    <h1 class="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl">
      {{ blog.title }}
    </h1>
    <p class="leading-7 [&:not(:first-child)]:mt-6">
      {{ blog.content }}
    </p>
    <div class="flex items-center justify-end gap-2 mt-4">
      <EditButton :blog-id="blog.id" size="lg" />
      <DeleteButton :blog-id="blog.id" size="lg" />
    </div>
  </div>
</template>
