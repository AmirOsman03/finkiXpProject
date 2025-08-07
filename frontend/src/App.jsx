import './App.css'
import {BrowserRouter, Route, Routes} from "react-router";
import HomePage from "./ui/pages/HomePage/HomePage.jsx";
import TasksPage from "./ui/pages/TasksPage/TasksPage.jsx";
import Layout from "./ui/components/Layout/Layout/Layout.jsx";
import TaskDetails from "../src/ui/components/Task/TaskDetails/TaskDetails.jsx";
import SubjectsPage from "./ui/pages/SubjectsPage/SubjectsPage.jsx";
import SubjectDetails from "./ui/components/Subject/SubjectDetails/SubjectDetails.jsx";
import Login from "./ui/components/Auth/Login/Login.jsx";
import LeaderboardPage from "./ui/pages/LeaderboardPage/LeaderboardPage.jsx";
import AboutUsPage from "./ui/pages/AboutUsPage/AboutUsPage.jsx";
import MePage from "./ui/pages/MePage/MePage.jsx";
import ProtectedRoute from "./ui/components/Routing/ProtectedRoute.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path={"/"} element={<Layout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path="aboutUs" element={<AboutUsPage/>}/>
                    <Route element={<ProtectedRoute/>}>
                        <Route path="tasks" element={<TasksPage/>}/>
                        <Route path="tasks/:id" element={<TaskDetails/>}/>
                        <Route path="subject" element={<SubjectsPage/>}/>
                        <Route path="subject/:id" element={<SubjectDetails/>}/>
                        <Route path="leaderboard" element={<LeaderboardPage/>}/>
                        <Route path="me" element={<MePage/>}/>
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
