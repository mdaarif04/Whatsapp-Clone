import { GoogleOAuthProvider } from "@react-oauth/google";
import Messenger from "./component/Messenger";
import AccountProvider from "./context/AccountProvider";

function App() {
  const clientId ='411972228402-tii411jpsf7mjmv8f1jfsfjbjtf435qp.apps.googleusercontent.com';

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
      <Messenger />
      </AccountProvider>
      
    </GoogleOAuthProvider>
  );
}

export default App;
