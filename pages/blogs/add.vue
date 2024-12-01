<script setup>
import { AutoForm } from "@/components/ui/auto-form";
import { Button } from "@/components/ui/button";
import * as z from "zod";

const config = useRuntimeConfig();

const { data } = await useFetch(`${config.public.apiBaseUrl}/api/authors`, {
  headers: {
    "x-key": config.public.apiKey,
  },
});

const authors = toRaw(data.value).data;
const authorsNames = authors.map((author) => author.name);

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
  author: z.enum(authorsNames),
  status: z.enum(["published", "unpublished"]).default("published"),
});

function onSubmit(values) {
  const author = authors.find((author) => author.name == values.author);
  const authorId = Number(author.id);

  $fetch(`${config.public.apiBaseUrl}/api/blogs`, {
    method: "post",
    headers: {
      "x-key": config.public.apiKey,
    },
    body: {
      author_id: authorId,
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
