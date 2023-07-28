import Users from  "./components/pages/Users"
import Movies from './components/pages/Movies'
import Home from "./components/pages/Home";

export default [
    {
        path: '/',
        component: Home
    },

    {
        path: '/movies',
        component: Movies
    },

    {
        path: '/users',
        component: Users
    },
]

/*기존에 있던 메뉴들을 Routes 파일을 따로 만들어 배열 형식으로 각각 기재해줌*/
