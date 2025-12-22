<script setup lang="ts">
import { ref, PropType, watch } from 'vue';
import { NotebookPen } from 'lucide-vue-next';
import { getNote } from '@/routes';
import axios from 'axios';

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

const details = ref(null);

const loadNoteDetails = async () => {
    if (props.currentFolderId === null || props.currentNoteId === null) {
        return;
    }

    await axios.get(getNote({ notepadFolder: props.currentFolderId, notepadNote: props.currentNoteId }).url)
        .then((response) => {
            details.value = response.data;
        })
}
loadNoteDetails();

watch(() => [props.currentFolderId, props.currentNoteId], () => {
    loadNoteDetails();
});
</script>

<template>
    <div class="w-full border p-2">
        <div class="font-bold">
            <NotebookPen class="inline relative -top-0.5" />
            Details: Name
        </div>
        <hr />

        {{ details }}
    </div>
</template>