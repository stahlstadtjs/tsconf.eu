import Vue from 'vue'

// Single Use and Layout Components
import Page from '@/components/Page.vue'
import Facts from '@/components/Facts.vue'
import Footer from '@/components/Footer.vue'
import Newsletter from '@/components/Newsletter.vue'
import Schedules from '@/components/Schedules.vue'

// Heros and Teaser Components
import Hero from '@/components/Hero.vue'
import SuperHero from '@/components/SuperHero.vue'
import Teaser from '@/components/Teaser.vue'
import MapTeaser from '@/components/MapTeaser.vue'
import PrimeTeaser from '@/components/PrimeTeaser.vue'
import SensationTeaser from '@/components/SensationTeaser.vue'

// Reference Components
import NightlifeReference from '@/components/NightlifeReference.vue'
import SightseeingReference from '@/components/SightseeingReference.vue'
import SpeakerReference from '@/components/SpeakerReference.vue'
import SponsorReference from '@/components/SponsorReference.vue'
import TicketReference from '@/components/TicketReference.vue'


/* Map components to names in Storyblok */
// TODO: Use webpack require.context to import automatically

// Single Use and Layout Components
Vue.component('page', Page)
Vue.component('facts', Facts)
Vue.component('main_footer', Footer)
Vue.component('schedules', Schedules)
Vue.component('newsletter', Newsletter)

// Heros and Teaser Components
Vue.component('hero', Hero)
Vue.component('super_hero', SuperHero)
Vue.component('teaser', Teaser)
Vue.component('map_teaser', MapTeaser)
Vue.component('prime_teaser', PrimeTeaser)
Vue.component('sensation_teaser', SensationTeaser)

// Reference Components
Vue.component('nightlife_reference', NightlifeReference)
Vue.component('sightseeing_reference', SightseeingReference)
Vue.component('speaker_reference', SpeakerReference)
Vue.component('sponsor_reference', SponsorReference)
Vue.component('ticket_reference', TicketReference)
