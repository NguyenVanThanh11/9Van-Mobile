import { memo } from 'react';
import type { FC } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import classes from './App.module.css';
import resets from './components/_resets.module.css';
import { SignIn } from './components/SignIn/SignIn.js';
import { HomeTeacher } from './components/HomeTeacher/HomeTeacher';
import { Role } from './components/Role/Role';
import { HomeStudent } from './components/student/src/components/HomeStudent/HomeStudent';
import { HomeCategoriesDesignFilterRoad } from './components/HomeCategoriesDesignFilterRoad/HomeCategoriesDesignFilterRoad';
import { DetailCourseTeacher } from './components/DetailCourseTeacher/DetailCourseTeacher';
import { CourseTeacher } from './components/CourseTeacher/CourseTeacher';
import { EditProfileTeacher } from './components/EditProfileTeacher/EditProfileTeacher';
import { CourseGrub } from './components/CourseGrub/CourseGrub';
import { List } from './components/List/List';
import { DetailCourseEditTeacher } from './components/DetailCourseEditTeacher/DetailCourseEditTeacher';
import { NewCourse } from './components/NewCourse/NewCourse';
import { NewDetail } from './components/NewDetail/NewDetail';
import { NewDetailCheckbox } from './components/NewDetailCheckbox/NewDetailCheckbox';
import { Sucess } from './components/Sucess/Sucess';

interface Props {
  className?: string;
}
export const App: FC<Props> = memo(function App(props = {}) {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/role" element={<Role />} />
        <Route path="/giao-vien" element={<HomeTeacher />} />
        <Route path="/hoc-sinh" element={<HomeStudent />} />
        <Route path="/lop-hoc" element={<HomeCategoriesDesignFilterRoad />} />
        <Route path="/chi-tiet-bai-hoc" element={<DetailCourseTeacher />} />
        <Route path="/danh-sach-lop-hoc" element={<CourseTeacher />} />
        <Route path="/profile" element={<EditProfileTeacher />} />
        <Route path="/chat" element={<CourseGrub />} />
        <Route path="/danh-sach-de-bai" element={<List />} />
        <Route path="/sua-bai" element={<DetailCourseEditTeacher />} />
        <Route path="/tao-moi-lop" element={<NewCourse />} />
        <Route path="/tao-moi-bai-hoc" element={<NewDetail />} />
        <Route path="/tao-bai-hoc-thanh-cong" element={<NewDetailCheckbox />} />
        <Route path="/tao-lop-hoc-thanh-cong" element={<Sucess />} />
      </Routes>
    </Router>
  );
});
