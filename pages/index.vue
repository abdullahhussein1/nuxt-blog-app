<script setup>
const { data: blogs } = await useFetch(
  "http://blog-panel.suly-soft.com.www67.your-server.de/api/blogs",
  {
    headers: {
      "x-key": "44bf6c39-4b23-3b43-89ef-b07af6f67cad",
    },
    transform: (_blogs) => _blogs.data,
  }
);
</script>

<template>
  <div class="flex flex-col gap-5">
    <div class="flex items-center justify-between">
      <h1
        class="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl"
      >
        All Blogs
      </h1>
      <NuxtLink to="/blogs/add"
        ><Button class="font-semibold">Add Blog</Button></NuxtLink
      >
    </div>
    <BlogsTable :blogs />
  </div>
</template>
