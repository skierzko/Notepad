<script setup lang="ts">
import { ref } from 'vue';
import { PropType } from 'vue';
import NotepadFolderRow from './NotepadFolderRow.vue';
import { Folder } from 'lucide-vue-next';
import FolderWizardDialog from './dialog/FolderWizardDialog.vue';
import { Folder as FolderInterface } from './interfaces/Folder';
import { useSidebar } from '@/components/ui/sidebar/utils';

const props = defineProps({
    list: {
        type: Array as PropType<FolderInterface[]>,
        required: true,
    },
    currentFolderId: {
        type: [Number, null] as PropType<number|null>,
        default: null,
        required: true,
    }
});

const { isMobile } = useSidebar()
const iconSize = ref<number>(isMobile.value ? 17 : 20);

const emit = defineEmits<{
  (e: 'setAsActive', id: number): void;
  (e: 'updateFoldersList'): void;
}>()

const setAsActive = (id: number) => {
    emit('setAsActive', id);
};

const updateFoldersList = () => {
    emit('updateFoldersList');
};
</script>

<template>
    <div class="h-full border border-gray-200 p-2">
        <div class="flex font-bold">
            <div class="flex-1 text-sm md:text-base">
                <Folder class="inline relative -top-0.5" :size="iconSize" />
                Folders
            </div>
            <FolderWizardDialog
                :only-icon="true"
                @update-folders-list="updateFoldersList"
            />
        </div>
        <hr />

        <FolderWizardDialog
            v-if="list.length === 0"
            @update-folders-list="updateFoldersList"
        />

        <div class="h-[calc(100%-22px)] overflow-auto">
            <NotepadFolderRow
                v-for="folder in list"
                :data="folder"
                :key="folder.id"
                :is-active="folder.id === currentFolderId"
                @set-as-active="setAsActive"
                @update-folders-list="updateFoldersList"
            />
        </div>
    </div>
</template>