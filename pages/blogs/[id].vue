<script setup>
import { blogs } from "~/data";

const route = useRoute();
const blogId = route.params.id;
const blog = blogs.find((blog) => blog.id == blogId);
</script>

<template>
  <div class="flex flex-col">
    <p class="leading-7 font-medium text-muted-foreground">
      {{ blog.author }}
    </p>
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
