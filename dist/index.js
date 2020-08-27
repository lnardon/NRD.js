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
    onChange: function onChange(e) {
      return getvalueCallback(e.target.value);
    },
    min: min,
    max: max,
    defaultValue: min
  });
}

var styles$6 = {"alertContainer":"_styles__alertContainer__Nr9nH","cardAnimationIn":"_styles__cardAnimationIn__28pWq","cardAnimationOut":"_styles__cardAnimationOut__1KwFf","alertIcon":"_styles__alertIcon__2qceH"};

function Alert(_ref) {
  var message = _ref.message;
  return /*#__PURE__*/React__default.createElement("div", {
    className: styles$6.alertContainer
  }, /*#__PURE__*/React__default.createElement("img", {
    src: "https://image.flaticon.com/icons/svg/550/550096.svg",
    alt: "Icon",
    className: styles$6.alertIcon
  }), /*#__PURE__*/React__default.createElement("h3", {
    className: styles$6.message
  }, message));
}

var styles$7 = {"drawerTab":"_styles__drawerTab__eCZeR","drawerTabHeader":"_styles__drawerTabHeader__1lqN1","drawerTitle":"_styles__drawerTitle__2xViP","closeIcon":"_styles__closeIcon__24817","open":"_styles__open__2sxod","openDrawer":"_styles__openDrawer__28Z3R","close":"_styles__close__RMMUh","closeDrawer":"_styles__closeDrawer__38H0N"};

function Drawer(_ref) {
  var _ref$title = _ref.title,
      title = _ref$title === void 0 ? 'Drawer Header' : _ref$title,
      _ref$toggle = _ref.toggle,
      toggle = _ref$toggle === void 0 ? true : _ref$toggle;
  var ref = React.useRef();

  var handleClose = function handleClose() {
    ref.current.classList.add(styles$7.close);
    ref.current.classList.remove(styles$7.add);
  };

  return /*#__PURE__*/React__default.createElement("div", {
    ref: ref,
    className: styles$7.drawerTab + " " + (toggle ? styles$7.open : styles$7.close)
  }, /*#__PURE__*/React__default.createElement("div", {
    className: styles$7.drawerTabHeader
  }, /*#__PURE__*/React__default.createElement("h2", {
    className: styles$7.drawerTitle
  }, title), /*#__PURE__*/React__default.createElement("img", {
    src: "https://image.flaticon.com/icons/svg/748/748122.svg",
    alt: "Close Icon",
    className: styles$7.closeIcon,
    onClick: handleClose
  })));
}

var styles$8 = {"progressContainer":"_styles__progressContainer__33-Mk","progressValue":"_styles__progressValue__YHqDe","value":"_styles__value__1FAJt"};

function Progress(_ref) {
  var _ref$maxValue = _ref.maxValue,
      maxValue = _ref$maxValue === void 0 ? 100 : _ref$maxValue,
      _ref$progressValue = _ref.progressValue,
      progressValue = _ref$progressValue === void 0 ? 70 : _ref$progressValue;
  var ref = React.useRef();
  React.useEffect(function () {
    console.log(progressValue * maxValue / 100);
    ref.current.style.width = progressValue * 100 / maxValue + "%";
  }, []);
  return /*#__PURE__*/React__default.createElement("div", {
    className: styles$8.progressContainer
  }, /*#__PURE__*/React__default.createElement("div", {
    className: styles$8.progressValue,
    ref: ref
  }), /*#__PURE__*/React__default.createElement("h2", {
    className: styles$8.value
  }, progressValue * 100 / maxValue + "%"));
}

function useLogger(variable) {
  React.useEffect(function () {
    console.log(variable);
  }, [variable]);
}

function useCPFChecker(cpf) {
  var aux = 0;
  var numbers = cpf.split('');
  numbers.forEach(function (number) {
    return aux += parseInt(number);
  });
  return JSON.stringify(aux).charAt(0) === JSON.stringify(aux).charAt(1);
}

function getSavedValue(key, initialValue) {
  var savedValue = JSON.parse(localStorage.getItem(key));

  if (savedValue) {
    return savedValue;
  }

  if (initialValue instanceof Function) {
    return initialValue();
  }

  return initialValue;
}

function useLocalStorage(key, initialValue) {
  var _useState = React.useState(function () {
    return getSavedValue(key, initialValue);
  }),
      value = _useState[0],
      setValue = _useState[1];

  React.useEffect(function () {
    localStorage.setItem(key, value);
  }, [value]);
  return [value, setValue];
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
var Alert$1 = function Alert$1(props) {
  return /*#__PURE__*/React__default.createElement(Alert, props);
};
var Drawer$1 = function Drawer$1(props) {
  return /*#__PURE__*/React__default.createElement(Drawer, props);
};
var Progress$1 = function Progress$1(props) {
  return /*#__PURE__*/React__default.createElement(Progress, props);
};
var useLogger$1 = function useLogger$1(variable) {
  return useLogger(variable);
};
var useCPFChecker$1 = function useCPFChecker$1(cpf) {
  return useCPFChecker(cpf);
};
var useLocalStorage$1 = function useLocalStorage$1(key, initialValue) {
  return useLocalStorage(key, initialValue);
};

exports.Alert = Alert$1;
exports.ContactForm = ContactForm$1;
exports.Drawer = Drawer$1;
exports.InputField = InputField$1;
exports.LoginForm = LoginForm$1;
exports.Progress = Progress$1;
exports.Rating = Rating$1;
exports.Select = Select$1;
exports.Slider = Slider$1;
exports.useCPFChecker = useCPFChecker$1;
exports.useLocalStorage = useLocalStorage$1;
exports.useLogger = useLogger$1;
//# sourceMappingURL=index.js.map
