import { useEffect } from 'react';
import AOS from 'aos'
import {Route, Routes} from 'react-router-dom'
import UserpagesOutlet from './pages/user/UserpagesOutlet';
import Home from './pages/user/home/Home';
import Groups from './pages/user/groups/Groups';
import GroupsCategory from './pages/user/groups/GroupsCategory';
import Forums from './pages/user/forums/Forums';
import ForumsCategoryPage from './pages/user/forums/ForumsGategoryPage';
import SingleGropup from './pages/user/groups/SingleGroup';
import SingleForum from './pages/user/forums/SingleForum';
import Physchologist from './pages/user/psychologist/Psychologist';
import PsychologistSessions from './pages/user/psychologist/PsychologistSessions';
import RequestSession from './pages/user/psychologist/RequestSession';
import MemberShipsPage from './pages/user/memberShips/MemberShips';
import GoldenMemberShipPage from './pages/user/memberShips/GoldenMemberShipPage';
import SilverMemberShipPage from './pages/user/memberShips/SilverMemberShipPage';
import ReqularMemberShipPage from './pages/user/memberShips/ReqularMemberShipPage';
import VideoLessons from './pages/user/videoLessons/VideoLessons';
import VideoLessonsCategory from './pages/user/videoLessons/VideoLessonsCategory';
import ViewVideoLessonSingle from './pages/user/videoLessons/ViewSingleLesson';
import PlayerLessonPage from './pages/user/videoLessons/PlayerLessonPage';
import LessonUrlPage from './pages/user/videoLessons/LessonUrlPage';

function App() {
  useEffect(() => {
    AOS.init({
      duration : 600
    });
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<UserpagesOutlet/>}>
          <Route index element={<Home/>}/>
          <Route path='groups' element={<Groups/>}/>
          <Route path='groups/:groupType' element={<GroupsCategory/>}/>
          <Route path="forums" element={<Forums/>}/>
          <Route path='forums/:forumType' element={<ForumsCategoryPage/>}/>
          <Route path='groups/:groupType/:groupId' element={<SingleGropup/>}/>
          <Route path='forums/:forumType/:forumId' element={<SingleForum/>}/>
          <Route path='psychologist' element={<Physchologist/>}/>
          <Route path='psychologist/sessions' element={<PsychologistSessions/>}/>
          <Route path='psychologist/request/:sessionId' element={<RequestSession/>}/>
          <Route path="memberships" element={<MemberShipsPage/>}/>
          <Route path="memberships/golden" element={<GoldenMemberShipPage/>}/>
          <Route path="memberships/silver" element={<SilverMemberShipPage/>}/>
          <Route path="memberships/regular" element={<ReqularMemberShipPage/>}/>
          <Route path='videoLessons' element={<VideoLessons/>}/>
          <Route path='videoLessons/:lessonsType' element={<VideoLessonsCategory/>}/>
          <Route path='videoLessons/watch/url/:lessonType/:lessonId' element={<LessonUrlPage/>}/>
          <Route path='videoLessons/watch/:lessonType/:lessonId' element={<PlayerLessonPage/>}/>
          <Route path='videoLessons/:lessonType/:lessonId' element={<ViewVideoLessonSingle/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
