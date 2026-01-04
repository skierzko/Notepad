<script setup lang="ts">
import AppLayout from '@/layouts/AppLayout.vue';
import { notepad } from '@/routes';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/vue3';
import NotepadApp from './notepad/NotepadApp.vue';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'My Notepad',
        href: notepad().url,
    },
];
</script>

<template>
    <Head title="My Notepad" />

    <AppLayout :breadcrumbs="breadcrumbs">
       <div class="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
            <NotepadApp />
       </div>
    </AppLayout>
</template>
