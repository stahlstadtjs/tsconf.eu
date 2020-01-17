import Vue from 'vue'

// Content Types
import Page from '@/components/content-types/Page.vue'
import Speaker from '@/components/content-types/Speaker.vue'
import Workshop from '@/components/content-types/Workshop.vue'

// Single Use and Layout Components
import MainFooter from '@/components/MainFooter.vue'
import Newsletter from '@/components/Newsletter.vue'

// Heros and Teaser Components
import Facts from '@/components/Facts.vue'
import Schedules from '@/components/Schedules.vue'
import Gallery from '@/components/Gallery.vue'
import PureText from '@/components/PureText.vue'
import Hero from '@/components/Hero.vue'
import SuperHero from '@/components/SuperHero.vue'
import Teaser from '@/components/Teaser.vue'
import MapTeaser from '@/components/MapTeaser.vue'
import PrimeTeaser from '@/components/PrimeTeaser.vue'
import SensationTeaser from '@/components/SensationTeaser.vue'

// Reference Components
import NightlifeReference from '@/components/NightlifeReference.vue'
import SightseeingReference from '@/components/SightseeingReference.vue'
import WorkshopReference from '@/components/WorkshopReference.vue'
import TalkReference from '@/components/TalkReference.vue'
import SponsorReference from '@/components/SponsorReference.vue'
import TicketReference from '@/components/TicketReference.vue'

// Art Elements
import RedLines from '@/components/art-elements/RedLines.vue'


/* Map components to names in Storyblok */
// TODO: Use webpack require.context to import automatically

Vue.component('page', Page)
Vue.component('speaker', Speaker)
Vue.component('workshop', Workshop)


// Single Use and Layout Components
Vue.component('main-footer', MainFooter)
Vue.component('newsletter', Newsletter)

// Full Section Components
Vue.component('facts', Facts)
Vue.component('schedules', Schedules)
Vue.component('gallery', Gallery)
Vue.component('pure-text', PureText)
Vue.component('hero', Hero)
Vue.component('super-hero', SuperHero)
Vue.component('teaser', Teaser)
Vue.component('map-teaser', MapTeaser)
Vue.component('prime-teaser', PrimeTeaser)
Vue.component('sensation-teaser', SensationTeaser)

// Reference Components
Vue.component('nightlife-reference', NightlifeReference)
Vue.component('sightseeing-reference', SightseeingReference)
Vue.component('workshop-reference', WorkshopReference)
Vue.component('talk-reference', TalkReference)
Vue.component('sponsor-reference', SponsorReference)
Vue.component('ticket-reference', TicketReference)
