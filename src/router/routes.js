
const Home = () => import('@/views/Home');
const Blog = () => import('@/views/Blog');
const About = () => import('@/views/About');
const Project = () => import('@/views/Project');
const Message = () => import('@/views/Message');
const Detail = () => import('@/views/Blog/Detail');


export default [
    {
        name: "Home",
        path: "/",
        component: Home
    },
    {
        name: "Blog",
        path: "/article",
        component: Blog
    },
    {
        name: "BlogCategory",
        path: "/article/cate/:categoryId",
        component: Blog
    },
    {
        name: "BlogDetail",
        path: "/article/:id",
        component: Detail
    },
    {
        name: "About",
        path: "/about",
        component: About
    },
    {
        name: "Project",
        path: "/project",
        component: Project
    },
    
    {
        name: "Message",
        path: "/message",
        component: Message
    },
    


]