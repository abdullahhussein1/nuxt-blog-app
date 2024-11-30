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

const handleEdit = (id: number) => {
  console.log("Edit blog with id:", id);
  // Implement edit functionality
};

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
          <TableHead>Title</TableHead>
          <TableHead class="flex items-center gap-2">
            <Select v-model="statusFilter">
              <SelectTrigger class="bg-transparent px-1.5">
                Status
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
        <TableRow v-for="blog in filteredBlogs" :key="blog.id">
          <TableCell>{{ blog.title }}</TableCell>
          <TableCell>{{ blog.status }}</TableCell>
          <TableCell>
            <NuxtLink :href="`/blogs/edit/${blog.id}`"
              ><Button
                variant="outline"
                size="sm"
                class="mr-2"
                @click="handleEdit(blog.id)"
              >
                Edit
              </Button></NuxtLink
            >
            <AlertDialog>
              <AlertDialogTrigger as-child>
                <Button
                  variant="outline"
                  size="sm"
                  @click="handleDelete(blog.id)"
                >
                  Delete
                </Button>
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
                  <AlertDialogAction>Continue</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </div>
</template>
