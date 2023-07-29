import axios from "axios";
import "./AuthPage.css";

const AuthPage = (props) => {
  const onSubmit = (e) => {
    e.preventDefault();
    const { value } = e.target[0];
    axios
      .post("http://localhost:3002/authenticate", { username: value })
      .then((r) => props.onAuth({ ...r.data, secret: value }))
      .catch((e) => console.log("error", e));
  };

  return (
    <div className="background">
      <div className="form-card">
        <h1 className="filltext">Chatify</h1>
        <form onSubmit={onSubmit} className="auth">
          <input className="auth-input" name="username" />
          <button className="auth-button" type="submit">
            Enter
          </button>
        </form>
      </div>
    </div>
  );
};

export default AuthPage;
