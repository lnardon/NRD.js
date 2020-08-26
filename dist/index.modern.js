import React, { useState } from 'react';

var styles = {"form":"_2vqA3","inputFieldDiv":"_u071I","loginLogo":"_rSjCy","loginBtn":"_1uQnd"};

var LoginForm = function LoginForm(_ref) {
  var loginImage = _ref.loginImage,
      url = _ref.url;

  var _useState = useState(''),
      username = _useState[0],
      setUsername = _useState[1];

  var _useState2 = useState(''),
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
    onChange: function onChange(e) {
      return setUsername(e.target.value);
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: styles.inputFieldDiv
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "password"
  }, "Password"), /*#__PURE__*/React.createElement("input", {
    type: "password",
    name: "password",
    onChange: function onChange(e) {
      return setPassword(e.target.value);
    }
  })), /*#__PURE__*/React.createElement("button", {
    className: styles.loginBtn,
    onClick: function onClick() {
      return submitHandler();
    }
  }, "Login"));
};

var styles$1 = {"mainContactForm":"_1afsr","title":"_16Fk0","inputFieldDiv":"_1eXrs","loginBtn":"_1yQ_8"};

function ContactForm(_ref) {
  var url = _ref.url,
      title = _ref.title;

  var _useState = useState(),
      name = _useState[0],
      setName = _useState[1];

  var _useState2 = useState(),
      email = _useState2[0],
      setEmail = _useState2[1];

  var _useState3 = useState(),
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

  return /*#__PURE__*/React.createElement("div", {
    className: styles$1.mainContactForm
  }, /*#__PURE__*/React.createElement("h1", {
    className: styles$1.title
  }, title), /*#__PURE__*/React.createElement("div", {
    className: styles$1.inputFieldDiv
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "Name"
  }, "Name:"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "userNamename",
    onChange: function onChange(e) {
      return setName(e.target.value);
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: styles$1.inputFieldDiv
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "Email"
  }, "Email:"), /*#__PURE__*/React.createElement("input", {
    type: "email",
    name: "Email",
    onChange: function onChange(e) {
      return setEmail(e.target.value);
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: styles$1.inputFieldDiv
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "Email"
  }, "Message:"), /*#__PURE__*/React.createElement("textarea", {
    type: "email",
    name: "Email",
    onChange: function onChange(e) {
      return setMessage(e.target.value);
    },
    draggable: "false"
  })), /*#__PURE__*/React.createElement("button", {
    className: styles$1.loginBtn,
    onClick: function onClick() {
      return submitHandler();
    }
  }, "Send Message"));
}

var styles$2 = {"inputFieldContainer":"_1dcFC","input":"_1iWA1","inputIcon":"_2Dfna","clearIcon":"_2SdZB","clearBtnAnimation":"_ZTJOn"};

function InputField(_ref) {
  var type = _ref.type,
      getvalueCallback = _ref.getvalueCallback;

  var _useState = useState(''),
      fieldValue = _useState[0],
      setFieldValue = _useState[1];

  var _useState2 = useState(),
      timer = _useState2[0],
      setTimer = _useState2[1];

  var changeValue = function changeValue(val) {
    setFieldValue(val);
    clearTimeout(timer);
    setTimer(setTimeout(function () {
      getvalueCallback(val);
    }, 500));
  };

  var clearFieldValue = function clearFieldValue() {
    clearTimeout(timer);
    setFieldValue('');
  };

  return /*#__PURE__*/React.createElement("div", {
    className: styles$2.inputFieldContainer
  }, /*#__PURE__*/React.createElement("input", {
    type: type || 'text',
    name: "value",
    className: styles$2.input,
    value: fieldValue,
    onChange: function onChange(e) {
      return changeValue(e.target.value);
    }
  }), /*#__PURE__*/React.createElement("button", {
    className: styles$2.inputIcon,
    onClick: clearFieldValue
  }, fieldValue.length > 0 ? /*#__PURE__*/React.createElement("img", {
    src: "https://image.flaticon.com/icons/svg/483/483328.svg",
    alt: "Close Icon",
    className: styles$2.clearIcon
  }) : null));
}

var styles$3 = {"select":"_hpaxr","option":"_30K3w"};

function Select(_ref) {
  var options = _ref.options,
      getvalueCallback = _ref.getvalueCallback;
  return /*#__PURE__*/React.createElement("select", {
    name: "Select",
    className: styles$3.select,
    onChange: function onChange(e) {
      getvalueCallback(e.target.value);
    }
  }, options.map(function (option) {
    return /*#__PURE__*/React.createElement("option", {
      key: option.value,
      value: option.value,
      className: styles$3.option
    }, option.label);
  }));
}

var styles$4 = {"ratingContainer":"_3shO0","active":"_20S1b","disabled":"_24sjJ"};

function Rating(_ref) {
  var getvalueCallback = _ref.getvalueCallback;
  var icones = [1, 2, 3, 4, 5];

  var _useState = useState(0),
      selected = _useState[0],
      setSelected = _useState[1];

  return /*#__PURE__*/React.createElement("div", {
    className: styles$4.ratingContainer
  }, icones.map(function (icone, index) {
    return /*#__PURE__*/React.createElement("div", {
      key: icone,
      className: selected > index ? styles$4.active : styles$4.disabled,
      onMouseOver: function onMouseOver() {
        return setSelected(index + 1);
      },
      onClick: function onClick() {
        return getvalueCallback(index + 1);
      }
    });
  }));
}

var LoginForm$1 = function LoginForm$1(props) {
  return /*#__PURE__*/React.createElement(LoginForm, props);
};
var ContactForm$1 = function ContactForm$1(props) {
  return /*#__PURE__*/React.createElement(ContactForm, props);
};
var InputField$1 = function InputField$1(props) {
  return /*#__PURE__*/React.createElement(InputField, props);
};
var Select$1 = function Select$1(props) {
  return /*#__PURE__*/React.createElement(Select, props);
};
var Rating$1 = function Rating$1(props) {
  return /*#__PURE__*/React.createElement(Rating, props);
};

export { ContactForm$1 as ContactForm, InputField$1 as InputField, LoginForm$1 as LoginForm, Rating$1 as Rating, Select$1 as Select };
//# sourceMappingURL=index.modern.js.map
