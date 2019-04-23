import compose from './components/compose';
import inbox from './components/inbox';
import send from './components/send';
import showMassage from './components/showMassage';
import editMassage from './components/edit';
import userList from './components/userList';

export  const routes = [
    { path: '/', name: 'userList', component: userList},
    { path: '/compose/:id', name: 'compose', component: compose },
    { path: '/edit/:id', name: 'edit', component: editMassage},
    { path: '/show/:id', name: 'show', component: showMassage},
    { path: '/send/:id', name: 'send', component: send},
    { path: '/inbox/:id', name: 'inbox', component: inbox }
];