function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);

var styles = {"form":"_index__form__2EV-Y","inputFieldDiv":"_index__inputFieldDiv__WN_1o","loginLogo":"_index__loginLogo__1WUdp","loginBtn":"_index__loginBtn__2Xifd"};

var LoginForm = function LoginForm(_ref) {
  var loginImage = _ref.loginImage,
      url = _ref.url;

  var _useState = React.useState(''),
      username = _useState[0],
      setUsername = _useState[1];

  var _useState2 = React.useState(''),
      password = _useState2[0],
      setPassword = _useState2[1];

  var submitHandler = function submitHandler() {
    try {
      return Promise.resolve(fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: username,
          password: password
        })
      })).then(function (response) {
        alert(response);
      });
    } catch (e) {
      return Promise.reject(e);
    }
  };

  return /*#__PURE__*/React__default.createElement("div", {
    className: styles.form
  }, loginImage ? /*#__PURE__*/React__default.createElement("img", {
    src: loginImage,
    alt: "Logo",
    className: styles.loginLogo
  }) : null, /*#__PURE__*/React__default.createElement("h1", null, "LOGIN"), /*#__PURE__*/React__default.createElement("div", {
    className: styles.inputFieldDiv
  }, /*#__PURE__*/React__default.createElement("label", {
    htmlFor: "username"
  }, "Username"), /*#__PURE__*/React__default.createElement("input", {
    type: "text",
    name: "username",
    onChange: function onChange(e) {
      return setUsername(e.target.value);
    }
  })), /*#__PURE__*/React__default.createElement("div", {
    className: styles.inputFieldDiv
  }, /*#__PURE__*/React__default.createElement("label", {
    htmlFor: "password"
  }, "Password"), /*#__PURE__*/React__default.createElement("input", {
    type: "password",
    name: "password",
    onChange: function onChange(e) {
      return setPassword(e.target.value);
    }
  })), /*#__PURE__*/React__default.createElement("button", {
    className: styles.loginBtn,
    onClick: function onClick() {
      return submitHandler();
    }
  }, "Login"));
};

var LoginForm$1 = function LoginForm$1(props) {
  return /*#__PURE__*/React__default.createElement(LoginForm, props);
};

exports.LoginForm = LoginForm$1;
//# sourceMappingURL=index.js.map
