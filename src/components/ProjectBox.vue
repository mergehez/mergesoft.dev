<script setup lang="ts">

import BoxCornerCross from "@/components/BoxCornerCross.vue";
import ArgButton from "@/components/ui/ArgButton.vue";
import Icon from "@/components/ui/Icon.vue";
import {__} from "@/utils/useLocale.ts";
import {type CSSProperties} from "vue";

export type Project = {
    title: string;
    description?: string;
    logoUrl: string;
    androidUrl?: string;
    iosUrl?: string;
    websiteUrl?: string;
    githubUrl?: string;
    logoStyle?: CSSProperties;
    class?: string;
};

const props = defineProps<Project & {
    index: number;
}>()
</script>

<template>
    <div class="font-sans" :class="[{'sm:border-l relative': index % 2 === 1}, props.class]">
        <div class="flex">
            <div>
                <img
                    :src="logoUrl"
                    :alt="title"
                    class="w-22 h-22 mr-4 border border-x4 dark:border-0"
                    :style="{
                        borderRadius: '30%',
                        backgroundColor: '#fff',
                        ...logoStyle,
                    }"
                />
            </div>
            <div class="flex-1">
                <div class="text-xl font-semibold">{{ title }}</div>
                <div class="text-t2 mt-2">
                    <slot><div v-html="description"></div></slot>
                    <div class="flex gap-2 mt-2" v-if="websiteUrl || androidUrl || iosUrl || githubUrl">
                        <ArgButton as="a" severity="secondary" v-if="githubUrl" :href="githubUrl" target="_blank" small>
                            <Icon icon="icon-mdi--github text-lg" />
                            GitHub
                        </ArgButton>
                        <ArgButton as="a" severity="secondary" v-if="websiteUrl" :href="websiteUrl" target="_blank" small>
                            <Icon icon="icon-mdi--web text-lg" />
                            {{ __('website') }}
                        </ArgButton>
                        <ArgButton as="a" severity="secondary" v-if="androidUrl" :href="androidUrl" target="_blank" small>
                            <Icon icon="icon-bxl--play-store text-lg" />
                            Android
                        </ArgButton>
                        <ArgButton as="a" severity="secondary" v-if="iosUrl" :href="iosUrl" target="_blank" small>
                            <Icon icon="icon-mdi--apple text-lg" />
                            iOS
                        </ArgButton>
                    </div>
                </div>
            </div>
        </div>
        <BoxCornerCross v-if="index >2 && index % 2 === 1"/>
    </div>
</template>