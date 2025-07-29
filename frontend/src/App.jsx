import './App.css'
import {BrowserRouter, Route, Routes} from "react-router";
import HomePage from "./ui/pages/HomePage/HomePage.jsx";
import TasksPage from "./ui/pages/TasksPage/TasksPage.jsx";
import Layout from "./ui/components/Layout/Layout/Layout.jsx";
import TaskDetails from "../src/ui/components/Task/TaskDetails/TaskDetails.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Layout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path="tasks" element={<TasksPage/>}/>
                    <Route path="tasks/:id" element={<TaskDetails/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
