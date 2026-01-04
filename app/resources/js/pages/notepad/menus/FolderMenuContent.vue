<script setup lang="ts">
import { ref, PropType } from 'vue';
import { Folder } from '../interfaces/Folder';
import { CircleEllipsis } from 'lucide-vue-next';
import { Trash2, FolderPen } from 'lucide-vue-next';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';

const props = defineProps({
  data: {
    type: Object as PropType<Folder>,
    required: true,
  },
});

const showDeleteConfirmation = ref<boolean>(false);
const deleteConfirmation = () => {
    showDeleteConfirmation.value = !showDeleteConfirmation.value;

    setTimeout(() => {
        showDeleteConfirmation.value = false;
    }, 5000);
};

const emit = defineEmits<{
    (e: 'renameFolder', id: number): void;
    (e: 'removeFolder', id: number): void;
}>();

const renameFolder = () => {
    emit('renameFolder', props.data.id);
};

const removeFolder = () => {
    emit('removeFolder', props.data.id);
};
</script>

<template>
    <DropdownMenu>
        <DropdownMenuTrigger :as-child="true">
            <CircleEllipsis class="opacity-30 hover:opacity-80" />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" class="w-56"> 

            <DropdownMenuLabel class="p-0 font-normal">
                <div class="p-2">
                    <div class="text-left text-[8pt] font-medium">
                        Folder options
                    </div>
                    <div class="text-left font-medium">
                        {{ data.title }}
                    </div>
                </div>
            </DropdownMenuLabel>

            <DropdownMenuSeparator />

            <DropdownMenuGroup>

                <DropdownMenuItem :as-child="true" @click="renameFolder">
                    <div class="block w-full cursor-pointer">
                        <FolderPen class="mr-2 h-4 w-4" />
                        Rename
                    </div>
                </DropdownMenuItem>

                <DropdownMenuSeparator />

                <div
                    class="flex lock w-full cursor-pointer hover:bg-red-500 px-2 py-1.5 gap-2 text-sm select-none [&_svg:not([class*='text-'])]:text-muted-foreground"
                    @click.stop="deleteConfirmation"
                >
                    <Trash2 class="mr-2 h-4 w-4" />
                    Remove permanently
                </div>

                <div v-if="showDeleteConfirmation" class="p-4">
                    <div class="text-sm">Are you sure to delete this folder?</div>
                    <div class="flex mt-2">
                        <div
                            class="flex-1 text-center bg-red-800 text-sm cursor-pointer hover:bg-red-700 active:bg-red-900"
                            @click="showDeleteConfirmation = false"
                        >
                            No
                        </div>
                        <div
                            class="flex-1 text-center bg-green-800 text-sm cursor-pointer hover:bg-green-700 active:bg-green-900"
                            @click="removeFolder"
                        >
                        Yes
                        </div>
                    </div>
                </div>
            </DropdownMenuGroup>

        </DropdownMenuContent>
    </DropdownMenu>
</template>