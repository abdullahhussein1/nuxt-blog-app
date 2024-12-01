<script setup lang="ts">
const { blogId } = defineProps<{
  blogId: number;
  size?: "default" | "sm" | "lg" | "icon" | null | undefined;
}>();

const emit = defineEmits(["delete"]);

const config = useRuntimeConfig();

const handleDelete = async (blogId: number) => {
  await $fetch(`${config.public.apiBaseUrl}/api/blogs/${blogId}`, {
    method: "delete",
    headers: {
      "x-key": config.public.apiKey,
    },
    onResponse() {
      emit("delete");
    },
  });
};
</script>

<template>
  <AlertDialog>
    <AlertDialogTrigger as-child>
      <div>
        <Button variant="outline" :size class="hidden md:block"> Delete </Button
        ><Button variant="outline" size="icon" class="md:hidden">
          <LucideTrash />
        </Button>
      </div>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
        <AlertDialogDescription>
          This action cannot be undone. This will permanently delete the blog
          and remove your data from our servers.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction @click="handleDelete(blogId)"
          >Continue</AlertDialogAction
        >
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
</template>
