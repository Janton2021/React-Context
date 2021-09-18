import details from '../pages/details'
import index from '../pages/home/index'

export default [
    {
        path: '/',
        component: index,
        exact: true,
    },
    {
        path:'/details',
        component: details,
        exact: true,
    }
]