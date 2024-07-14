import { useContext } from "react";
import AuthProvider, { AuthContext } from "./AuthContext";
import Login from "./Login";
import Home from "./Home";
function Conditional() {
    const { user } = useContext(AuthContext);
    return <div className="App">{user ? <Home /> : <Login />}</div>;
}
const App = () => (
    <AuthProvider>
        <Conditional />
    </AuthProvider>
);
export default App;
