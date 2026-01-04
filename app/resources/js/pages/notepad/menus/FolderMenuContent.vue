<script setup lang="ts">
import { PropType } from 'vue';
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

                <DropdownMenuItem :as-child="true" @click="removeFolder">
                    <div class="block w-full cursor-pointer hover:bg-red-500">
                        <Trash2 class="mr-2 h-4 w-4" />
                        Remove permanently
                    </div>
                </DropdownMenuItem>
            </DropdownMenuGroup>

        </DropdownMenuContent>
    </DropdownMenu>
</template>