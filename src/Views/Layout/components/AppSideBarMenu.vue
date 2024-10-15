<script lang="jsx">
import {computed, defineComponent,h,resolveComponent} from 'vue'
import { useRouter } from 'vue-router';
export default defineComponent({
    name:'SiderBarItem',
    setup(){
        const router=useRouter()
        const routes = computed(()=>{
            console.log(router.options.routes)
            return router.options.routes
        })

        // 渲染侧栏菜单的函数
        const renderSubMenu = ()=>{
            // 递归渲染侧边栏菜单
            function travel(_route,nodes=[]){
                if(_route){
                    _route.forEach((element) => {
                        const {icon,title}=element.meta
                        
                        const node=element.children && element.children.length>0?(
                            //一级菜单：渲染 标题 和 图标
                            <a-sub-menu title={title} key={element.name} icon={h(resolveComponent(icon))}>
                            {/* 如果有子路由 递归渲染 */}
                            {travel(element.children)}
                            </a-sub-menu>
                        ):(
                            // 二级菜单：渲染 标题 和 链接
                            <a-menu-item key={element.path}>
                                <router-link to={element.path}>{title}</router-link>
                            </a-menu-item>
                        )
                        nodes.push(node)
                    })
                }
                return nodes
            }
            return travel(routes.value)
        }
        return () =>(
            <a-menu theme="light" mode="inline">
            {renderSubMenu()}
            </a-menu>
        )
    }
})
</script>

<style lang="scss" scoped>
/* */    
</style>