<template>
  <header class="px-6 py-2 flex max-w-screen-lg mx-auto">
    <NuxtLink
      to="/"
      class="flex border-2 border-transparent hover:border-primary/20 hover:bg-primary/5 hover:brightness-110 transition-all rounded-lg items-center p-2 gap-2"
    >
      <LucideRss class="text-primary" stroke-width="3" />
      <p class="font-black text-lg">Blog App</p>
    </NuxtLink>
  </header>

  <div class="flex flex-col p-8 max-w-screen-lg mx-auto">
    <slot />
  </div>
  <div
    class="absolute size-80 -z-10 rounded-full -top-8 -left-8 bg-primary/10 blur-3xl"
  />
  <div
    class="absolute size-56 -z-10 rounded-full top-80 right-0 bg-secondary/20 blur-3xl"
  />
</template>
