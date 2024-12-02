<script setup>
const config = useRuntimeConfig();

const {
  data: blogs,
  status,
  refresh,
} = await useFetch(`${config.public.apiBaseUrl}/api/blogs`, {
  headers: {
    "x-key": config.public.apiKey,
  },
  transform: (_blogs) => _blogs.data,
});
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
    <LoadingSpinner size="40" v-if="status == 'pending'" />
    <BlogsTable :blogs @delete="refresh" v-else-if="status == 'success'" />
    <div
      v-else-if="status == 'error'"
      class="flex flex-col gap-5 p-5 w-full border rounded-3xl overflow-clip bg-secondary/10 backdrop-blur-2xl items-center text-muted-foreground font-medium justify-center"
    >
      <p>Failed to fetch Data</p>
      <LucideCircleX :size="44" stroke-width="1.5" />
    </div>
  </div>
</template>
