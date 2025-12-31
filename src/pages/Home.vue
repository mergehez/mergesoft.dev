<script setup lang="ts">
import ProjectBox from "@/components/FeatureBox.vue";
import Layout from "@/components/Layout.vue";
import {computed} from "vue";
import {__} from "@/utils/useLocale.ts";

</script>

<template>
    <Layout isHome>
        <div class="container  border-b border-x5 ">
            <section class="py-20 mx-auto px-2 sm:px-4 text-center relative border-x-0!">
                <div class="w-full flex justify-center mb-8">
                    <img src="/images/mergesoft.png" alt="" class="w-52 h-52">
                </div>
                <h1 class="text-5xl font-bold mb-4 leading-tight">
                    {{ __('mobile_web_projects') }} <br>
                    {{ __('all_in_kurdish') }}
                </h1>
                <p class="text-xl opacity-80 mb-8">
                    {{ __('team_specializes') }}
                </p>
            </section>
        </div>
        <section id="projects" class="py-20 container flex-1">
            <div class="mb-24 text-center">
                <span class="px-5 py-2.5 rounded-full bg-x0 text-t0 invert mx-4">
                    {{ __('projects') }}
                </span>

                <h2 class="text-4xl mt-12 px-2" v-html="__('projects_delivered')"></h2>

                <h3 class="text-t1 mt-6 max-w-2xl mx-auto px-2">
                    {{__('waiting_to_be_delivered') }}
                </h3>
            </div>

            <div class="grid md:grid-cols-2 border-t border-x4 *:p-7 *:border-b *:border-x4 ">
                <ProjectBox
                    :index="0"
                    title="Gotingeh"
                    logo-url="/images/gotingeh.png"
                    website-url="https://gotingeh.com"
                    android-url="https://play.google.com/store/apps/details?id=com.arges.mazlum.gotinenstranan"
                    ios-url="https://apps.apple.com/de/app/gotin%C3%AAn-stranan/id1610520176"
                    :description="__('gotingeh_description')"
                />
                <ProjectBox
                    :index="1"
                    title="Asoya Helbesta Kurdî"
                    logo-url="/images/aso.png"
                    website-url="https://helbestakurdi.com"
                    android-url="https://play.google.com/store/apps/details?id=com.arges.sepan.helbest"
                    ios-url="https://apps.apple.com/tr/app/asoya-helbesta-kurd%C3%AE/id1610507295"
                    :description="__('asoya_helbesta_description')"
                />
                <ProjectBox
                    :index="2"
                    title="tirşik.net"
                    logo-url="/images/tirsik-with-bg.png"
                    website-url="https://tirsik.net"
                    :description="__('tirsik_description')"
                />
                <ProjectBox
                    :index="3"
                    title="Peyvdank"
                    logo-url="/images/peyvdank.png"
                    website-url="https://peyvdank.com"
                    android-url="https://play.google.com/store/apps/details?id=dev.mergesoft.peyvdank"
                    ios-url="https://apps.apple.com/us/app/gotin%C3%AAn-stranan/id6754227033"
                    :description="__('peyvdank_description')"
                />
                <ProjectBox
                    :index="4"
                    title="Li Hev Bîne"
                    logo-url="/images/lihevbine.png"
                    android-url="https://play.google.com/store/apps/details?id=com.arges.sepan.listikalihevanine"
                    :description="__('li_hev_bine_description')"
                />
                <ProjectBox
                    :index="5"
                    :title="__('others_projects')"
                    logo-url="/images/mergesoft.png"
                    github-url="https://github.com/mergehez"
                    :description="__('check_github')"
                />
            </div>

            <div>
                <h3 class="text-t1 mt-20 max-w-2xl mx-auto px-2 text-center">
                    {{ __('contact_us_text') }} <br>
                    <a href="mailto:argesozdogan@gmail.com" class="text-blue-500 hover:underline">argesozdogan@gmail.com</a>
                </h3>
            </div>
        </section>
    </Layout>
</template>

