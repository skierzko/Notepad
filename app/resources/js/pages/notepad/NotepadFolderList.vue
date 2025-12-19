<script setup lang="ts">
import { PropType, ref } from 'vue';
import NotepadFolderRow from './NotepadFolderRow.vue';
import { Folder } from 'lucide-vue-next';
import FolderCreatingDialog from './dialog/FolderCreatingDialog.vue';
import { Folder as FolderInterface } from './interfaces/Folder';

defineProps({
    list: {
        type: Array as PropType<FolderInterface[]>,
        required: true,
    }
});

const activeFolder = ref<number|null>(null)

const setAsActive = (id: number) => {
    activeFolder.value = id;
}
</script>

<template>
    <div class="min-w-[200px] border border-gray-200 p-2">
        <div class="flex font-bold">
            <div class="flex-1">
                <Folder class="inline relative -top-0.5" />
                Folders
            </div>
            <FolderCreatingDialog :only-icon="true" />
        </div>
        <hr />

        <FolderCreatingDialog v-if="list.length === 0" />
        <NotepadFolderRow
            v-for="folder in list"
            :data="folder"
            :key="folder.id"
            @set-as-active="setAsActive"
            :is-active="folder.id === activeFolder"
        />
    </div>
</template>