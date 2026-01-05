<!--suppress SpellCheckingInspection -->
<script setup lang="ts">

import {computed, type CSSProperties} from "vue";
import {__} from "@/utils/useLocale";
import ArgButton from "@/components/ui/ArgButton.vue";
import Icon from "@/components/ui/Icon.vue";
import BoxCornerCross from "@/components/BoxCornerCross.vue";

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

const projects = computed<Project[]>(() => {
    return [
        {
            title: 'Gotingeh',
            logoUrl: 'gotingeh.png',
            websiteUrl: 'https://gotingeh.com',
            androidUrl: 'com.arges.mazlum.gotinenstranan',
            iosUrl: 'id1610520176',
            description: __('gotingeh_description'),
        },
        {
            title: 'Asoya Helbesta Kurdî',
            logoUrl: 'aso.png',
            websiteUrl: 'https://helbestakurdi.com',
            androidUrl: 'com.arges.sepan.helbest',
            iosUrl: 'id1610507295',
            description: __('asoya_helbesta_description'),
        },
        {
            title: 'tirşik.net',
            logoUrl: 'tirsik-with-bg.png',
            websiteUrl: 'https://tirsik.net',
            description: __('tirsik_description'),
        },
        {
            title: 'Peyvdank',
            logoUrl: 'peyvdank.png',
            websiteUrl: 'https://peyvdank.com',
            androidUrl: 'dev.mergesoft.peyvdank',
            iosUrl: 'id6754227033',
            description: __('peyvdank_description'),
            logoStyle: {
                backgroundColor: 'transparent',
            },
        },
        // {
        //     title: 'Li Hev Bîne',
        //     logoUrl: 'lihevbine.png',
        //     androidUrl: 'com.arges.sepan.listikalihevanine',
        //     description: __('li_hev_bine_description'),
        //     logoStyle: {
        //         backgroundColor: '#de64d7',
        //     },
        // },
        {
            title: 'WîkîFerheng',
            logoUrl: 'wikiferheng.png',
            androidUrl: 'dev.mergesoft.wikiferheng',
            iosUrl: 'id6757323156',
            description: __('wikiferheng_description'),
            logoStyle: {
                backgroundColor: 'transparent',
            },
        },
        {
            title: __('others_projects'),
            logoUrl: 'mergesoft.png',
            githubUrl: 'https://github.com/mergehez',
            description: __('check_github'),
            // class: 'col-span-full's,
        },
    ];
})
</script>

<template>
    <div class="grid md:grid-cols-2 border-t border-x4 *:p-7 *:border-b *:border-x4 ">
        <template v-for="(proj,index) in projects" :key="proj.title">
            <div class="font-sans" :class="[{'sm:border-l relative': index % 2 === 1}, proj.class]">
                <div class="flex">
                    <div>
                        <img
                            :src="`https://mergesoft.dev/images/${proj.logoUrl}`"
                            :alt="proj.title"
                            class="w-22 h-22 mr-4 border border-x4 dark:border-0"
                            :style="{
                                borderRadius: '30%',
                                backgroundColor: '#fff',
                                ...(proj.logoStyle ?? {}),
                            }"
                        />
                    </div>
                    <div class="flex-1">
                        <div class="text-xl font-semibold">{{ proj.title }}</div>
                        <div class="text-t2 mt-2">
                            <slot>
                                <div v-html="proj.description"></div>
                            </slot>
                            <div class="flex gap-2 mt-2" v-if="proj.websiteUrl || proj.androidUrl || proj.iosUrl || proj.githubUrl">
                                <ArgButton as="a" severity="secondary" v-if="proj.githubUrl" :href="proj.githubUrl" target="_blank" small>
                                    <Icon icon="icon-mdi--github text-lg"/>
                                    GitHub
                                </ArgButton>
                                <ArgButton as="a" severity="secondary" v-if="proj.websiteUrl" :href="proj.websiteUrl" target="_blank" small>
                                    <Icon icon="icon-mdi--web text-lg"/>
                                    {{ __('website') }}
                                </ArgButton>
                                <ArgButton as="a" severity="secondary" v-if="proj.androidUrl" :href="'https://play.google.com/store/apps/details?id='+proj.androidUrl" target="_blank" small>
                                    <Icon icon="icon-bxl--play-store text-lg"/>
                                    Android
                                </ArgButton>
                                <ArgButton as="a" severity="secondary" v-if="proj.iosUrl" :href="'https://apps.apple.com/app/'+proj.iosUrl" target="_blank" small>
                                    <Icon icon="icon-mdi--apple text-lg"/>
                                    iOS
                                </ArgButton>
                            </div>
                        </div>
                    </div>
                </div>
                <BoxCornerCross v-if="index >2 && index % 2 === 1"/>
            </div>
        </template>
    </div>
</template>