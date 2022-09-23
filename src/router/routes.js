
const Home = () => import('@/views/Home');
const Blog = () => import('@/views/Blog');
const About = () => import('@/views/About');
const Project = () => import('@/views/Project');
const Message = () => import('@/views/Message');


export default [
    {
        name: "Home",
        path: "/",
        component: Home
    },
    {
        name: "Blog",
        path: "/blog",
        component: Blog
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