import { memo } from 'react';
import type { FC } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import classes from './App.module.css';
import resets from './components/_resets.module.css';
import { HomeStudent } from './components/HomeStudent/HomeStudent.js';
import { HomeCategoriesDesignFilterRoad } from './components/HomeCategoriesDesignFilterRoad/HomeCategoriesDesignFilterRoad';
import { CourseGrub } from './components/CourseGrub/CourseGrub';
import { CourseQuiz1 } from './components/CourseQuiz1/CourseQuiz1';
import { CourseQuiz1Success } from './components/CourseQuiz1Success/CourseQuiz1Success';
import { EditProfileStudent } from './components/EditProfileStudent/EditProfileStudent';
import { DetailCourseTeacher } from './components/DetailCourseTeacher/DetailCourseTeacher';
import { SignIn } from './components/SignIn/SignIn';

interface Props {
  className?: string;
}
export const App: FC<Props> = memo(function App(props = {}) {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/hoc-sinh" element={<HomeStudent />} />
        <Route path="/lop-hoc" element={<HomeCategoriesDesignFilterRoad />} />
        <Route path="/chat" element={<CourseGrub />} />
        <Route path="/nop-bai" element={<CourseQuiz1 />} />
        <Route path="/profile" element={<EditProfileStudent />} />
        <Route path="/chi-tiet-bai-hoc" element={<DetailCourseTeacher />} />
        <Route path="/nop-bai-thanh-cong" element={<CourseQuiz1Success />} />
      </Routes>
    </Router>
  );
});
