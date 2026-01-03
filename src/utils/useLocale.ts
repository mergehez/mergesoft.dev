// noinspection SpellCheckingInspection

import {onMounted, reactive, ref} from "vue";

type Locale = 'en' | 'ku';
const currentLocale = ref<Locale>('en');

export function useLocale() {
    onMounted(() => {
        const savedLocale = localStorage.getItem('locale');
        if (savedLocale && (savedLocale === 'en' || savedLocale === 'ku')) {
            currentLocale.value = savedLocale;
        } else {
            const browserLocale = navigator.language.split('-')[0];
            currentLocale.value = browserLocale == 'ku' ? 'ku' : 'en';
        }
    })

    function setLocale(locale: Locale) {
        currentLocale.value = locale;
        localStorage.setItem('locale', locale);
    }

    function toggleLocale() {
        if (currentLocale.value === 'en') {
            setLocale('ku');
        } else {
            setLocale('en');
        }
    }


    return reactive({
        currentLocale,
        toggleLocale,
    });
}

const translations = {
    mobile_web_projects: {
        "en": "Mobile and Web Projects",
        "ku": "Projeyên Mobîl û Webê",
    },
    all_in_kurdish: {
        "en": "all in Kurdish",
        "ku": "hemû bi Kurdî",
    },
    team_specializes: {
        "en": "A team that specializes in the development of Kurdish web and mobile applications",
        "ku": "Tîmeke teknîkî ku li ser projeyên kurdî dixebite",
    },
    projects_delivered: {
        "en": `We delivered some of the best-known <br class="max-sm:hidden">Kurdish mobile and web applications`,
        "ku": `Me hin sepanên kurdî yên mobîl <br class="max-sm:hidden">û webê yên herî navdar weşandin`,
    },
    waiting_to_be_delivered: {
        "en": "And some are waiting to be delivered...",
        "ku": "Û hin li benda weşandinê ne...",
    },
    others_projects: {
        "en": "Others projects",
        "ku": "Projeyên din",
    },
    gotingeh_description: {
        "en": "The largest collection of Kurdish song lyrics! <br> 7500+ songs and 900+ singers",
        "ku": "Koleksiyona herî mezin a gotinên stranên kurdî! <br> 7500+ stran û 900+ stranbêj",
    },
    asoya_helbesta_description: {
        "en": "The largest collection of Kurdish poems! <br> 3500+ poems and 500+ poets",
        "ku": "Koleksiyona herî mezin a helbestên kurdî! <br> 3500+ helbest û 500+ helbestvan",
    },
    tirsik_description: {
        "en": "The interactive Kurdish dictionary. Read and write about everything on Tirsik.",
        "ku": "Ferhenga înteraktîf a kurdî. Di tirşikê de li ser her tiştî bixwîne, binivîsîne.",
    },
    peyvdank_description: {
        "en": "Scrabble in Kurdish! Play with your friends and learn new words!",
        "ku": "Scrabble bi zimanê kurdî! Bi hevalên xwe re bilîze, peyvên nû hîn bibe!",
    },
    li_hev_bine_description: {
        "en": "A game for kids. Kids can learn basic words with this game!",
        "ku": "Lîstîka ji bo zarokan. Zarok dikarin bi vê lîstikê têgehên bingehîn hîn dibin!",
    },
    wikiferheng_description: {
        "en": "A better mobile app of Wîkîferheng (Wiktionary).",
        "ku": "Sepana mobîlê ya Wîkîferhengê (Wiktionary).",
    },
    check_github: {
        "en": "Check out our GitHub page for more projects and open-source contributions!",
        "ku": "Ji bo projeyên me yên din li rûpela me ya GitHubê binere!",
    },
    projects: {
        "en": "Projects",
        "ku": "Projeyên Me",
    },
    website: {
        "en": "Website",
        "ku": "Malper",
    },
    contact_us_text: {
        "en": "Any questions? Feel free to contact us:",
        "ku": "Pirsek te heye? Ji me re binivîsîne:",
    },
} as const;

export function __(key: keyof typeof translations): string {
    const locale = currentLocale.value;
    const translation = translations[key];
    if (translation && translation[locale]) {
        return translation[locale];
    }
    return key;
}