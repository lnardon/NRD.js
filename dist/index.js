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

var styles$1 = {"form":"_styles__form__1dR4_","inputFieldDiv":"_styles__inputFieldDiv__1eXrs","loginLogo":"_styles__loginLogo__1lEc1","loginBtn":"_styles__loginBtn__1yQ_8"};

function ContactForm(_ref) {
  var url = _ref.url;

  var _useState = React.useState(),
      name = _useState[0],
      setName = _useState[1];

  var _useState2 = React.useState(),
      email = _useState2[0],
      setEmail = _useState2[1];

  var _useState3 = React.useState(),
      message = _useState3[0],
      setMessage = _useState3[1];

  var submitHandler = function submitHandler() {
    try {
      return Promise.resolve(fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          email: email,
          message: message
        })
      })).then(function (response) {
        alert(response);
      });
    } catch (e) {
      return Promise.reject(e);
    }
  };

  return /*#__PURE__*/React__default.createElement("div", {
    className: styles$1.mainContactForm
  }, /*#__PURE__*/React__default.createElement("div", {
    className: styles$1.inputFieldDiv
  }, /*#__PURE__*/React__default.createElement("label", {
    htmlFor: "Name"
  }, "Name:"), /*#__PURE__*/React__default.createElement("input", {
    type: "text",
    name: "userNamename",
    onChange: function onChange(e) {
      return setName(e.target.value);
    }
  })), /*#__PURE__*/React__default.createElement("div", {
    className: styles$1.inputFieldDiv
  }, /*#__PURE__*/React__default.createElement("label", {
    htmlFor: "Email"
  }, "Email:"), /*#__PURE__*/React__default.createElement("input", {
    type: "email",
    name: "Email",
    onChange: function onChange(e) {
      return setEmail(e.target.value);
    }
  })), /*#__PURE__*/React__default.createElement("div", {
    className: styles$1.inputFieldDiv
  }, /*#__PURE__*/React__default.createElement("label", {
    htmlFor: "Email"
  }, "Message:"), /*#__PURE__*/React__default.createElement("textarea", {
    type: "email",
    name: "Email",
    onChange: function onChange(e) {
      return setMessage(e.target.value);
    }
  })), /*#__PURE__*/React__default.createElement("button", {
    className: styles$1.loginBtn,
    onClick: function onClick() {
      return submitHandler();
    }
  }, "Send Message"));
}

var LoginForm$1 = function LoginForm$1(props) {
  return /*#__PURE__*/React__default.createElement(LoginForm, props);
};
var ContactForm$1 = function ContactForm$1(props) {
  return /*#__PURE__*/React__default.createElement(ContactForm, props);
};

exports.ContactForm = ContactForm$1;
exports.LoginForm = LoginForm$1;
//# sourceMappingURL=index.js.map
