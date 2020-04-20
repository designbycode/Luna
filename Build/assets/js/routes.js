export default [
    {
        path: '/',
        redirect: {name: 'home'}
    },
    {
        name: 'home',
        path: '/',
        component: require('./screens/home').default
    },
    {
        name: 'grid',
        path: '/grid',
        component: require('./screens/grid').default
    }


]

