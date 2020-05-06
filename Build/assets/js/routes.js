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
    },
    {
        name: 'cards',
        path: '/cards',
        component: require('./screens/cards').default
    },
    {
        name: 'buttons',
        path: '/buttons',
        component: require('./screens/buttons').default
    }
,
    {
        name: 'grid-component',
        path: '/grid-component',
        component: require('./screens/GridComponent').default
    }


]

