import "./App.css";
import Routes from "./Routes/Routes";
import "./App.css";
import { LoginDetails } from "./Components/LoginPage/LoginPage";
import { LandingPage } from "./Components/LandingPage/LandingPage";
import { SignUpEmail } from "./Components/SignUpEmail/SignUpEmail";
import DiscussionForum from "./Components/DiscussionForum/DiscussionForum";
export default function App() {
  return (
    <div className="App">
      <Routes />
      <SignUpEmail></SignUpEmail>
    </div>
  );
}
