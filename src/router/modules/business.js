export default {
    name: 'business',
    path: '/business',
    component: ()=>import('@/Views/Layout/index.vue'),
    redirect:'/business/orderlist',
    meta:{title:'业务管理',icon:'ScheduleOutlined',order:4},
    children:[
        {
            name:'business-orderlist',
            path:'/business/orderlist',
            meta:{title:'运单管理',parent:'business'},
            component: ()=>import('@/Views/Business/WayBill/index.vue'),
        },
        {
            name:'business-departwork',
            path:'/business/departwork',
            meta:{title:'订单管理',parent:'business'},
            component: ()=>import('@/Views/Business/Order/index.vue'),
        }
    ]
}