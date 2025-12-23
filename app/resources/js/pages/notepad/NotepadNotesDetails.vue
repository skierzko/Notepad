<script setup lang="ts">
import { ref, PropType, watch } from 'vue';
import { NotebookPen } from 'lucide-vue-next';
import { getNote } from '@/routes';
import axios from 'axios';
import { Note } from './interfaces/Note';
import dayjs from "dayjs";

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
    }
});

const details = ref<Note>({} as Note);

const loadNoteDetails = async () => {
    if (props.currentFolderId === null || props.currentNoteId === null) {
        return;
    }

    await axios.get(getNote({ notepadFolder: props.currentFolderId, notepadNote: props.currentNoteId }).url)
        .then((response) => {
            details.value = response.data.note;
        })
}
loadNoteDetails();

const formatDate = (date: string) => {
    return dayjs(date).format("DD.MM.YYYY");
};

watch(() => [props.currentFolderId, props.currentNoteId], () => {
    loadNoteDetails();
});
</script>

<template>
    <div class="w-full border p-2">
        <div class="flex gap-4 font-bold">
            <div>
                <NotebookPen class="inline relative -top-0.5" />
                Note:
            </div>
             <div class="flex-1">
                <input type="text" v-model="details.title" class="w-full ml-2 border-b border-gray-300 focus:outline-none" />
             </div>
        </div>
        <hr />
        <div class="flex gap-4 opacity-30 text-sm mt-1">
            <div>First modity: {{ formatDate(details.created_at) }}</div>
            <div>Last modify: {{ formatDate(details.updated_at) }}</div>
        </div>
        

        <textarea v-model="details.description" class="w-full h-[400px] mt-2 border p-2 focus:outline-none" />
    </div>
</template>