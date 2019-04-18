import compose from './components/compose';
import listMassage from './components/listMassage';
import send from './components/send';
import showMassage from './components/showMassage';
import editMassage from './components/edit';

export  const routes = [
    { path: '/', name: 'listMassage', component: listMassage },
    { path: '/compose', name: 'compose', component: compose },
    { path: '/send', name: 'send', component: send},
    { path: '/show/:id', name: 'show', component: showMassage},
    { path: '/edit/:id', name: 'edit', component: editMassage}
];