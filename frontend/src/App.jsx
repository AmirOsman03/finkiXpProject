import './App.css'
import {BrowserRouter, Route, Routes} from "react-router";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<h1>Home Page</h1>}/>
                <Route path="tasks" element={<h1>Tasks Page</h1>}/>
                <Route path="tasks/:id" element={<h1>Task Details Page</h1>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
