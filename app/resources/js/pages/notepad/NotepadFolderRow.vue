<script setup lang="ts">
import { Folder } from './interfaces/Folder';
import { ref, PropType } from 'vue';
import dayjs from "dayjs";
import FolderMenuContent from './menus/FolderMenuContent.vue';
import FolderWizardDialog from './dialog/FolderWizardDialog.vue';

const props = defineProps({
  data: {
    type: Object as PropType<Folder>,
    required: true,
  },
  isActive: {
    type: Boolean,
    default: false,
  }
})

const folderWizardDialog = ref<InstanceType<typeof FolderWizardDialog> | null>(null);

const emit = defineEmits<{
  (e: 'setAsActive', id: number): void;
}>()

const formatDate = (date: string) => {
    return dayjs(date).format("DD.MM.YYYY");
};

const setAsActive = () => {
    emit('setAsActive', props.data.id);
};

const renameFolder = () => {
  console.log('renameFolder');
  folderWizardDialog.value?.openDialog();
};

const removeFolder = () => {
};
</script>

<template>
    <div
        class="flex p-1 mt-2 bg-gray-200/50 cursor-pointer [.active]:bg-cyan-700 [.active]:text-white items-center hover:bg-gray-200/80"
        :class="[isActive && 'active']"
        @click="setAsActive"
    >
        <div class="flex-1">
            <div class="text-nowrap text-ellipsis">{{ data.title }}</div>
            <div class="text-sm">{{ formatDate(data.updated_at) }}</div>
        </div>
        <div @click.stop>
          <FolderMenuContent
            :data="data"
            @renameFolder="renameFolder"
            @removeFolder="removeFolder"
            />
        </div>
    </div>
    <FolderWizardDialog
      ref="folderWizardDialog"
      :showDialogTrigger="false"
      :data="data"
      />
</template>