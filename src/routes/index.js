import About from "../pages/About";
import HomePage from "../pages/HomePage";
import PostIdPage from "../pages/PostIdPage";
import Posts from "../pages/Posts";

export const routes = [
  {path:'/posts', component: Posts, exact: true},
  {path:'/posts/:id', component: PostIdPage, exact: true},
  {path:'/about', component: About, exact: true},
  {path:'*', component: HomePage, exact: true},
]