import React, { useState } from 'react';

var styles = {"form":"_index__form__2EV-Y","inputFieldDiv":"_index__inputFieldDiv__WN_1o","loginLogo":"_index__loginLogo__1WUdp","loginBtn":"_index__loginBtn__2Xifd"};

const LoginForm = ({
  loginImage,
  url
}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = async () => {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        password
      })
    });
    alert(response);
  };

  return /*#__PURE__*/React.createElement("div", {
    className: styles.form
  }, loginImage ? /*#__PURE__*/React.createElement("img", {
    src: loginImage,
    alt: "Logo",
    className: styles.loginLogo
  }) : null, /*#__PURE__*/React.createElement("h1", null, "LOGIN"), /*#__PURE__*/React.createElement("div", {
    className: styles.inputFieldDiv
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "username"
  }, "Username"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "username",
    onChange: e => setUsername(e.target.value)
  })), /*#__PURE__*/React.createElement("div", {
    className: styles.inputFieldDiv
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "password"
  }, "Password"), /*#__PURE__*/React.createElement("input", {
    type: "password",
    name: "password",
    onChange: e => setPassword(e.target.value)
  })), /*#__PURE__*/React.createElement("button", {
    className: styles.loginBtn,
    onClick: () => submitHandler()
  }, "Login"));
};

const LoginForm$1 = props => /*#__PURE__*/React.createElement(LoginForm, props);

export { LoginForm$1 as LoginForm };
//# sourceMappingURL=index.modern.js.map
