<script setup lang="ts">
import AppLayout from '@/layouts/AppLayout.vue';
import { dashboard } from '@/routes';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/vue3';
import NotepadApp from './notepad/NotepadApp.vue';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'My Notepad',
        href: dashboard().url,
    },
];

defineProps({
    foldersList: {
        type: Array,
        required: true,
    },
    notesList: {
        type: Array,
        required: true,
    },
});
</script>

<template>
    <Head title="My Notepad" />

    <AppLayout :breadcrumbs="breadcrumbs">
       <div class="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
            <NotepadApp :folders-list="foldersList" :notes-list="notesList" />
       </div>
    </AppLayout>
</template>
