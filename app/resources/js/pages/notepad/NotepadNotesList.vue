<script setup lang="ts">
import { ref, watch } from 'vue';
import axios from 'axios';
import NotepadNotesRow from './NotepadNotesRow.vue';
import { Notebook } from 'lucide-vue-next';
import { PropType } from 'vue';
import { Note } from './interfaces/Note';
import { CirclePlus } from 'lucide-vue-next';
import { getNotesList, createNote } from '@/routes';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import { useSidebar } from '@/components/ui/sidebar/utils';

const props = defineProps({
    currentFolderId: {
        type: [Number, null] as PropType<number|null>,
        default: null,
        required: true,
    },
    currentNoteId: {
        type: [Number, null] as PropType<number|null>,
        default: null,
        required: true,
    },
    foldersCount: {
        type: Number as PropType<number>,
        default: 0,
    }
});

const list = ref<Note[]>([]);
const { isMobile } = useSidebar()
const iconSize = ref<number>(isMobile.value ? 17 : 20);

const loadNotesList = (withoutSetActive: boolean = false) => {
    if (props.currentFolderId === null) {
        return;
    }

    axios.get(getNotesList({ notepadFolder: props.currentFolderId }).url)
        .then((response) => {
            list.value = response.data.list;

            if (withoutSetActive) {
                return;
            }

            emit('setAsActive', response.data.list[0].id ?? null);
        })
        .catch(() => {

        });
};
loadNotesList();

watch(() => props.currentFolderId, () => {
    loadNotesList();
})

const createNewNote = async () => {
    if (props.currentFolderId === null) {
        return;
    }

    await axios.post(createNote({ notepadFolder: props.currentFolderId }).url)
        .then((response) => {
            if (response.data.success) {
                loadNotesList();
                toastAddedNote();
            }
        });
};

const emit = defineEmits<{
  (e: 'setAsActive', id: number): void
}>()

const setAsActive = (id: number) => {
    emit('setAsActive', id);
};

const toastAddedNote = () => {
  toast.success('New note added', {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 2000,
  })
}

defineExpose({
  loadNotesList,
});
</script>

<template>
    <div class="h-full border border-gray-200 p-2">
        <div class="flex font-bold">
            <div class="flex-1 text-sm md:text-base">
                <Notebook class="inline relative -top-0.5" :size="iconSize" />
                Notes
            </div>
            <CirclePlus v-if="foldersCount > 0" class="cursor-pointer" @click="createNewNote" />
        </div>

        <hr />

        <div class="h-[calc(100%-22px)] overflow-auto">
            <NotepadNotesRow
                v-for="note in list"
                :key="note.id"
                :data="note"
                :is-active="note.id === props.currentNoteId"
                @set-as-active="setAsActive"
                @update-notes-list="loadNotesList"
            />
        </div>

        <div v-if="foldersCount === 0" class="p-2 text-center">
            Before creating a note, create a folder.
        </div>
        <div v-else-if="list.length === 0" class="p-2 text-center">
            <p>Your folder is empty.</p>
            <p>Add your first note by clicking above.</p>
            <p></p>
        </div>
    </div>
</template>