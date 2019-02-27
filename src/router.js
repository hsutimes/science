import Vue from 'vue';
import Router from 'vue-router';
import Login from './view/Login';
import Basic from './view/Basic';
import Dashboard from './components/Dashboard';
import Content from './components/Content';
import AddProject from './components/AddProject';
import Table from './components/Table';
import User from './components/User';
import Check from './components/Check';
import Alluser from './components/Alluser';
import Test from './components/Test';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [{
            path: '*',
            redirect: 'login'
        }, {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/test',
            name: 'test',
            component: Test
        },
        {
            path: '/',
            component: Basic,
            children: [{
                    path: '/',
                    name: 'dashboard',
                    component: Dashboard
                },
                {
                    path: 'user',
                    name: 'user',
                    component: User
                },
                {
                    path: 'content',
                    name: 'content',
                    component: Content
                },
                {
                    path: 'addproject',
                    name: 'addproject',
                    component: AddProject
                },
                {
                    path: 'check',
                    name: 'check',
                    component: Check
                },
                {
                    path: 'alluser',
                    name: 'alluser',
                    component: Alluser
                },
                {
                    path: 'log',
                    name: 'log',
                    component: Alluser
                }
            ]
        }
    ]
});