import { Route, Routes } from "react-router-dom";
import { AuthContainer } from "../screens/AuthContainer";
import { ProtectedRoute } from "./ProtectedRoute";
import { Chat } from "../screens/Chat";
import { Profile } from "../screens/Profile";
import { Chats } from "../screens/Chats";
import { Survey } from "../screens/Survey";
import { SurveyHistory } from "../screens/SurveyHistory";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/register" element={<AuthContainer active="register"/>}/>
      <Route path="/login" element={<AuthContainer active="login"/>}/>

      <Route index path="/chat/:chat_id?" element={<ProtectedRoute><Chat/></ProtectedRoute>}/>
      <Route index path="/profile" element={<ProtectedRoute><Profile/></ProtectedRoute>}/>
      <Route index path="/survey/history" element={<ProtectedRoute><SurveyHistory/></ProtectedRoute>}/>
      <Route index path="/survey" element={<ProtectedRoute><Survey/></ProtectedRoute>}/>
      <Route index path="/" element={<ProtectedRoute><Chats/></ProtectedRoute>}/>

      <Route path="/" element={<AuthContainer active="login"/>}/>
    </Routes>
  );
}