<script setup lang="ts">
import { ref, computed } from "vue";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";

import type { Blog } from "~/types";

const { blogs } = defineProps<{ blogs: Blog[] }>();

const statusFilter = ref<"all" | "published" | "unpublished">("all");

const filteredBlogs = computed(() => {
  if (statusFilter.value === "all") {
    return blogs;
  }
  return blogs.filter((blog) => blog.status === statusFilter.value);
});
</script>

<template>
  <div
    class="w-full border rounded-3xl overflow-clip bg-secondary/10 backdrop-blur-3xl"
  >
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead class="hidden md:block"></TableHead>
          <TableHead>Title</TableHead>
          <TableHead class="flex items-center gap-2">
            <Select v-model="statusFilter">
              Status:
              <SelectTrigger
                class="bg-transparent max-w-20 md:max-w-none md:w-32 px-1.5"
              >
                <SelectValue placeholder="All" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="published">Published</SelectItem>
                <SelectItem value="unpublished">Unpublished</SelectItem>
              </SelectContent>
            </Select>
          </TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow v-for="(blog, i) in filteredBlogs" :key="blog.id">
          <TableCell class="text-sm text-muted-foreground hidden md:block">{{
            i + 1
          }}</TableCell>
          <TableCell
            ><NuxtLink :href="`/blogs/${blog.id}`">{{
              blog.title
            }}</NuxtLink></TableCell
          >
          <TableCell>{{ blog.status }}</TableCell>
          <TableCell class="flex items-center gap-1">
            <EditButton :blog-id="blog.id" size="sm" />
            <DeleteButton :blog-id="blog.id" size="sm" />
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </div>
</template>
