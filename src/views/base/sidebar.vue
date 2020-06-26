<template>
    <div>
        <!-- Sidebar menu-->
        <div class="app-sidebar__overlay" data-toggle="sidebar"></div>
        <aside class="app-sidebar">
        <div class="app-sidebar__user"><img class="app-sidebar__user-avatar" src="https://s3.amazonaws.com/uifaces/faces/twitter/jsa/48.jpg" alt="User Image">
            <div>
            <p class="app-sidebar__user-name">John Doe</p>
            <p class="app-sidebar__user-designation">Frontend Developer</p>
            </div>
        </div>
        <ul class="app-menu">
            <template v-for="(item, index) in menu" >
                <li v-if="!item.submenu || item.submenu.length == 0" v-bind:key="index">
                    <router-link v-if="!item.submenu || item.submenu.length == 0" class="app-menu__item" :class="curUrl === item.url.toLowerCase() ? 'active' : ''" :target="item.new_target ? '_blank' : ''" :to='item.url'>
                        <i class="app-menu__icon fa" :class="item.icon ? item.icon : 'fa-dashboard'"></i>
                        <span class="app-menu__label">{{item.name}}</span>
                    </router-link>
                </li>
                <li v-else v-bind:key="index" class="treeview">
                    <a class="app-menu__item" href="#" data-toggle="treeview">
                        <i class="app-menu__icon fa fa-laptop"></i><span class="app-menu__label">{{item.name}}</span><i class="treeview-indicator fa fa-angle-right"></i>
                    </a>
                    <ul class="treeview-menu">
                        <li v-for="(subItem, subIndex) in item.submenu" v-bind:key="subIndex">
                            <router-link class="treeview-item" :to="subItem.url"><i class="icon fa fa-circle-o"></i> {{subItem.name}}</router-link>
                        </li>
                    </ul>
                </li>
            </template>
        </ul>
        </aside>
    </div>
</template>
<script>
export default {
    data: function(){
        return {
            curUrl: this.$route.path,
            menu: [
                {
                    name: 'Home',
                    url: '/Home',
                    icon: 'fa-laptop',
                    // new_target: true
                },
                {
                    name: '公司信息',
                    url: '/Company',
                    icon: 'fa-laptop',
                },
                {
                    name: '菜单配置',
                    url: '/Navigation',
                    icon: 'fa-laptop',
                },
                {
                    name: '栏位配置',
                    url: '/login',
                    icon: '',
                    submenu:[
                        {
                            name: 'banner配置',
                            url: '/sspp',
                            icon: '',
                        },
                        {
                            name: '轮播图配置',
                            url: '/sspp',
                            icon: '',
                        },
                        {
                            name: '产品列表',
                            url: '/sspp',
                            icon: '',
                        },
                    ]
                },
                {
                    name: '文章管理',
                    url: '/Article',
                    icon: '',
                },


                // {
                //     name: '菜单三',
                //     url: '/login',
                //     icon: '',
                //     submenu:[
                //         {
                //             name: 'sspp',
                //             url: '/sspp',
                //             icon: '',
                //         }
                //     ]
                // },
                ]
        }
    },

    mounted: function(){

        //导航栏内容
        "use strict";

        var treeviewMenu = $('.app-menu');

        // Toggle Sidebar
        $('[data-toggle="sidebar"]').click(function(event) {
            event.preventDefault();
            $('.app').toggleClass('sidenav-toggled');
        });

        // Activate sidebar treeview toggle
        $("[data-toggle='treeview']").click(function(event) {
            event.preventDefault();
            if(!$(this).parent().hasClass('is-expanded')) {
                treeviewMenu.find("[data-toggle='treeview']").parent().removeClass('is-expanded');
            }
            $(this).parent().toggleClass('is-expanded');
        });

        // Set initial active toggle
        $("[data-toggle='treeview.'].is-expanded").parent().toggleClass('is-expanded');

        //Activate bootstrip tooltips
        $("[data-toggle='tooltip']").tooltip();
    }
}
</script>
