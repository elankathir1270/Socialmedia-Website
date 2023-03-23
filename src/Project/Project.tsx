import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Navbar } from "./components/navbar"
import { Login } from "./Login"
import { Main } from "./Main/Main"
import { CreatePost } from "./create-post/CreatePost"

export function Project() {


    return(
        <div>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Main />}/>
                    <Route path="/login" element={<Login />}/>
                    <Route path="/createpost" element={<CreatePost />}/>
                </Routes>
            </Router>
        </div>
    )
} 