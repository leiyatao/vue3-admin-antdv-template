export default {
    name: 'dispatch',
    path: '/dispatch',
    component: ()=>import('@/Views/Layout/index.vue'),
    redirect:'/car/courier',
    meta:{title:'调度管理',icon:'SendOutlined',order:5},
    children:[
        {
            name:'dispatch-task',
            path:'/dispatch/task',
            meta:{title:'运输任务管理',parent:'dispatch'},
            component: ()=>import('@/Views/Dispatch/Task/index.vue'),
        },
        {
            name:'dispatch-line',
            path:'/dispatch/line',
            meta:{title:'线路管理',parent:'dispatch'},
            component: ()=>import('@/Views/Dispatch/Line/index.vue'),
        },
        {
            name:'dispatch-pickWork',
            path:'/dispatch/pickWork',
            meta:{title:'取件作业管理',parent:'dispatch'},
            component: ()=>import('@/Views/Dispatch/Pick/index.vue'),
        }
        ,
        {
            name:'dispatch-dispatch',
            path:'/dispatch/dispatch',
            meta:{title:'派件作业管理',parent:'car'},
            component: ()=>import('@/Views/Dispatch/Dispatch/index.vue'),
        }
    ]
}