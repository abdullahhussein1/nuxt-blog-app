<script setup lang="ts">
import { ref, computed } from "vue";
import { Button } from "@/components/ui/button";
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

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import type { Blog } from "~/types";

const { blogs } = defineProps<{ blogs: Blog[] }>();

const statusFilter = ref<string>("all");

const filteredBlogs = computed(() => {
  if (statusFilter.value === "all") {
    return blogs;
  }
  return blogs.filter((blog) => blog.status === statusFilter.value);
});

const handleDelete = (id: number) => {
  console.log("Delete blog with id:", id);
  // Implement delete functionality
};
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
                <SelectValue />
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
          <TableCell>{{ blog.title }}</TableCell>
          <TableCell>{{ blog.status }}</TableCell>
          <TableCell class="flex gap-1">
            <NuxtLink :href="`/blogs/edit/${blog.id}`"
              ><Button variant="outline" size="sm" class="hidden md:block">
                Edit </Button
              ><Button variant="outline" size="icon" class="md:hidden">
                <LucideEdit3 /> </Button
            ></NuxtLink>
            <AlertDialog>
              <AlertDialogTrigger as-child>
                <div>
                  <Button variant="outline" size="sm" class="hidden md:block">
                    Delete </Button
                  ><Button variant="outline" size="icon" class="md:hidden">
                    <LucideTrash />
                  </Button>
                </div>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete
                    the blog and remove your data from our servers.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction @click="handleDelete(blog.id)"
                    >Continue</AlertDialogAction
                  >
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </div>
</template>
