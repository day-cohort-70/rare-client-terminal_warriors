import { Route, Routes } from "react-router-dom"
import { Login } from "../components/auth/Login"
import { Register } from "../components/auth/Register"
import { Authorized } from "./Authorized"
import { AllPosts } from "../components/posts/AllPosts"
import { TagForm } from '../components/tags/TagForm';
import { TagList } from '../components/tags/TagList.js';

export const ApplicationViews = ({ token, setToken }) => {

  return (

    <Routes>
      <Route path="/login" element={<Login setToken={setToken} />} />
      <Route path="/register" element={<Register setToken={setToken} />} />
      <Route element={<Authorized token={token} />}>
        <Route path="/allposts" element={<AllPosts/>}/>
        <Route path="/tags/create" element={<TagForm />} />
        <Route path='/tags' element={<TagList />} />
      </Route>
    </Routes>
  );
};

