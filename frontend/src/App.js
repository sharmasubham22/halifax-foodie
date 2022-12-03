import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import FirstFactor from "./register"
import SecondFactor from "./qasignup"
import LoginFirst from './login';
import LoginSecond from './qalogin';
import ThirdFactor from './cipherRegister';
import LoginThird from './cipherLogin';
import Visualize from './visualize';
import SimilarRecipes from "./SimilarRecipes";
import DataProcessing from "./DataProcessing";
import Polarity from "./Polarity";
import AgentChat from "./AgentChat";
import Chat from "./Chat";
import ProtectedRoute from "./Protected";
// import LexBot from "./lex-bot";
import ProfilePage from "./ProfilePage"
import OldChat from "./OldChatPage"

function App() {
  return (
    <Routes>
        <Route path="/" element={<FirstFactor />}/>
        <Route path="/qa-signup" element={<SecondFactor />}/>
        <Route path='/login' element={<LoginFirst />}/>
        <Route path='/qa-login' element={<LoginSecond />}/>
        <Route path='/signup-cipher' element={<ThirdFactor />}/>
        <Route path='/login-cipher' element={<LoginThird />}/>
        <Route
          path="/visual"
          element={
            <ProtectedRoute>
              <Visualize />
            </ProtectedRoute>
          }
        />    
        <Route
          path="/similar-recipes"
          element={
            <ProtectedRoute>
              <SimilarRecipes />
            </ProtectedRoute>
          }
        />    
        <Route
          path="/polarity"
          element={
            <ProtectedRoute>
              <Polarity />
            </ProtectedRoute>
          }
        />
        
        <Route path="/profile" element={<ProfilePage/>}></Route>
        <Route path="/oldChat" element={<OldChat/>}></Route>
        {
          localStorage.getItem("type") === "user" ? <Route path='/chat' element={<Chat />}/> : <Route path='/chat' element={<AgentChat />}/>
        }
    </Routes>
  );
}

export default App;
