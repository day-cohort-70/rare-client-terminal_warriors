import { Route, Routes } from "react-router-dom"
import { Login } from "../components/auth/Login"
import { Register } from "../components/auth/Register"
import { Authorized } from "./Authorized"
import { AllPosts } from "../components/posts/AllPosts"
import { TagForm } from '../components/tags/TagForm';
import { TagList } from '../components/tags/TagList.js';
import { CategoryList } from '../components/categories/CategoryList.js';
import { EditCategory } from "../components/categories/EditCategory.js"
import { MyPosts } from "../components/posts/MyPosts.js"


export const ApplicationViews = ({ token, setToken }) => {

  return (
    <Routes>
      <Route path="/login" element={<Login setToken={setToken} />} />
      <Route path="/register" element={<Register setToken={setToken} />} />
      <Route element={<Authorized token={token} />}>

        <Route path="/tags/create" element={<TagForm />} />
        <Route path='/tags' element={<TagList />} />
        <Route path='/categories'>
          <Route index element={<CategoryList/>}/>
          <Route path=":categoryId" element={<EditCategory/>}/>
        </Route>
        <Route path="/allposts" element={<AllPosts/>}/>
        <Route path="/myposts" element={<MyPosts token={token}/>}/>

      </Route>
    </Routes>
  );
};
