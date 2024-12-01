<script setup lang="ts">
import { AutoForm } from "@/components/ui/auto-form";
import { Button } from "@/components/ui/button";
import * as z from "zod";

const { data: authors } = await useFetch(
  "http://blog-panel.suly-soft.com.www67.your-server.de/api/authors",
  {
    headers: {
      "x-key": "44bf6c39-4b23-3b43-89ef-b07af6f67cad",
    },
  }
);

console.log(JSON.parse(JSON.stringify(authors.value)));

const formSchema = z.object({
  title: z
    .string({
      required_error: "Title is required.",
    })
    .min(2, {
      message: "Title must be at least 2 characters.",
    })
    .max(50, {
      message: "Title must not be longer than 50 characters.",
    }),
  content: z
    .string({
      required_error: "Content is required.",
    })
    .min(10, {
      message: "Content must be at least 10 characters.",
    })
    .max(100, {
      message: "Content must not be longer than 100 characters.",
    }),
  author: z.enum(["Muhammed", "ali"]),
  status: z.enum(["published", "unpublished"]),
});

function onSubmit(values: Record<string, any>) {
  $fetch("http://blog-panel.suly-soft.com.www67.your-server.de/api/blogs", {
    method: "post",
    headers: {
      "x-key": "44bf6c39-4b23-3b43-89ef-b07af6f67cad",
    },
    body: {
      author_id: 1,
      title: values.title,
      content: values.content,
      status: values.status,
    },
    onResponse() {
      navigateTo("/");
    },
  });
}
</script>

<template>
  <Head>
    <Title>Add Blog | Blog App</Title>
  </Head>
  <div class="flex flex-col gap-5 max-w-screen-md mx-auto w-full">
    <h1 class="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl">
      Add Blog
    </h1>
    <div class="flex justify-center w-full">
      <AutoForm
        v-if="formSchema"
        class="w-full space-y-6"
        :schema="formSchema"
        @submit="onSubmit"
        :field-config="{
          content: {
            component: 'textarea',
          },
          status: {
            component: 'radio',
          },
        }"
      >
        <Button type="submit" class="font-extrabold"> Add Blog </Button>
      </AutoForm>
    </div>
  </div>
</template>
