export default {
    name: 'car',
    path: '/car',
    component: ()=>import('@/Views/Layout/index.vue'),
    redirect:'/car/carType',
    meta:{title:'车辆管理',icon:'BarChartOutlined',order:2},
    children:[
        {
            name:'car-carType',
            path:'/car/carType',
            meta:{title:'车型管理',parent:'car'},
            component: ()=>import('@/Views/Car/CarType/index.vue'),
        },
        {
            name:'car-carList',
            path:'/car/carList',
            meta:{title:'车辆列表',parent:'car'},
            component: ()=>import('@/Views/Car/CarList/index.vue'),
        },
        {
            name:'car-carCheck',
            path:'/car/carCheck',
            meta:{title:'车辆登记',parent:'car'},
            component: ()=>import('@/Views/Car/CarCheck/index.vue'),
        }
    ]
}