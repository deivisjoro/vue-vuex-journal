import HomePage from '@/pages/HomePage.vue'
export default {
    name: 'daybook',
    component: () => import('@/modules/daybook/layouts/DayBookLayout.vue'),
    children: [
        {            
            path: '',
            name: 'no-entry',
            component: () => import('@/modules/daybook/pages/NoEntrySelected.vue')
        },
        {            
            path: ':id',
            name: 'entry',
            component: () => import('@/modules/daybook/pages/EntryPage.vue')
        }
    ]
}