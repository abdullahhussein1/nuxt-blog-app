<script setup>
const config = useRuntimeConfig();

const { data: blogs, refresh } = await useFetch(
  `${config.public.apiBaseUrl}/api/blogs`,
  {
    headers: {
      "x-key": config.public.apiKey,
    },
    transform: (_blogs) => _blogs.data,
  }
);
</script>

<template>
  <Head>
    <Title>Blog App</Title>
  </Head>
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
    <BlogsTable :blogs @delete="refresh" />
  </div>
</template>
