function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);

var styles = {"form":"_styles__form__2vqA3","inputFieldDiv":"_styles__inputFieldDiv__u071I","loginLogo":"_styles__loginLogo__rSjCy","loginBtn":"_styles__loginBtn__1uQnd"};

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

var styles$1 = {"mainContactForm":"_styles__mainContactForm__1afsr","title":"_styles__title__16Fk0","inputFieldDiv":"_styles__inputFieldDiv__1eXrs","loginBtn":"_styles__loginBtn__1yQ_8"};

function ContactForm(_ref) {
  var url = _ref.url,
      title = _ref.title;

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
  }, /*#__PURE__*/React__default.createElement("h1", {
    className: styles$1.title
  }, title), /*#__PURE__*/React__default.createElement("div", {
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
    },
    draggable: "false"
  })), /*#__PURE__*/React__default.createElement("button", {
    className: styles$1.loginBtn,
    onClick: function onClick() {
      return submitHandler();
    }
  }, "Send Message"));
}

var styles$2 = {"inputFieldContainer":"_styles__inputFieldContainer__1dcFC","input":"_styles__input__1iWA1","inputIcon":"_styles__inputIcon__2Dfna","clearIcon":"_styles__clearIcon__2SdZB","clearBtnAnimation":"_styles__clearBtnAnimation__ZTJOn"};

function InputField(_ref) {
  var type = _ref.type,
      getvalueCallback = _ref.getvalueCallback;

  var _useState = React.useState(''),
      fieldValue = _useState[0],
      setFieldValue = _useState[1];

  var _useState2 = React.useState(),
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

  return /*#__PURE__*/React__default.createElement("div", {
    className: styles$2.inputFieldContainer
  }, /*#__PURE__*/React__default.createElement("input", {
    type: type || 'text',
    name: "value",
    className: styles$2.input,
    value: fieldValue,
    onChange: function onChange(e) {
      return changeValue(e.target.value);
    }
  }), /*#__PURE__*/React__default.createElement("button", {
    className: styles$2.inputIcon,
    onClick: clearFieldValue
  }, fieldValue.length > 0 ? /*#__PURE__*/React__default.createElement("img", {
    src: "https://image.flaticon.com/icons/svg/483/483328.svg",
    alt: "Close Icon",
    className: styles$2.clearIcon
  }) : null));
}

var styles$3 = {"select":"_styles__select__hpaxr","option":"_styles__option__30K3w"};

function Select(_ref) {
  var options = _ref.options,
      getvalueCallback = _ref.getvalueCallback;
  return /*#__PURE__*/React__default.createElement("select", {
    name: "Select",
    className: styles$3.select,
    onChange: function onChange(e) {
      getvalueCallback(e.target.value);
    }
  }, options.map(function (option) {
    return /*#__PURE__*/React__default.createElement("option", {
      key: option.value,
      value: option.value,
      className: styles$3.option
    }, option.label);
  }));
}

var styles$4 = {"ratingContainer":"_styles__ratingContainer__3shO0","active":"_styles__active__20S1b","disabled":"_styles__disabled__24sjJ"};

function Rating(_ref) {
  var getvalueCallback = _ref.getvalueCallback;
  var icones = [1, 2, 3, 4, 5];

  var _useState = React.useState(0),
      selected = _useState[0],
      setSelected = _useState[1];

  return /*#__PURE__*/React__default.createElement("div", {
    className: styles$4.ratingContainer
  }, icones.map(function (icone, index) {
    return /*#__PURE__*/React__default.createElement("div", {
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

var styles$5 = {"slider":"_styles__slider__2EqHe"};

function Slider(_ref) {
  var min = _ref.min,
      max = _ref.max,
      getvalueCallback = _ref.getvalueCallback;
  return /*#__PURE__*/React__default.createElement("input", {
    className: styles$5.slider,
    type: "range",
    name: "Slider",
    onChange: function onChange(e) {
      return getvalueCallback(e.target.value);
    },
    min: min,
    max: max,
    tooltip: min,
    defaultValue: min
  });
}

var LoginForm$1 = function LoginForm$1(props) {
  return /*#__PURE__*/React__default.createElement(LoginForm, props);
};
var ContactForm$1 = function ContactForm$1(props) {
  return /*#__PURE__*/React__default.createElement(ContactForm, props);
};
var InputField$1 = function InputField$1(props) {
  return /*#__PURE__*/React__default.createElement(InputField, props);
};
var Select$1 = function Select$1(props) {
  return /*#__PURE__*/React__default.createElement(Select, props);
};
var Rating$1 = function Rating$1(props) {
  return /*#__PURE__*/React__default.createElement(Rating, props);
};
var Slider$1 = function Slider$1(props) {
  return /*#__PURE__*/React__default.createElement(Slider, props);
};

exports.ContactForm = ContactForm$1;
exports.InputField = InputField$1;
exports.LoginForm = LoginForm$1;
exports.Rating = Rating$1;
exports.Select = Select$1;
exports.Slider = Slider$1;
//# sourceMappingURL=index.js.map
