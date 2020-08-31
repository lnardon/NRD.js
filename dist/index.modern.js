import React, { useState, useRef, useEffect } from 'react';

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

var styles$5 = {"slider":"_2EqHe"};

function Slider(_ref) {
  var min = _ref.min,
      max = _ref.max,
      getvalueCallback = _ref.getvalueCallback;
  return /*#__PURE__*/React.createElement("input", {
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

var styles$6 = {"alertContainer":"_Nr9nH","cardAnimationIn":"_28pWq","cardAnimationOut":"_1KwFf","alertIcon":"_2qceH"};

function Alert(_ref) {
  var message = _ref.message;
  return /*#__PURE__*/React.createElement("div", {
    className: styles$6.alertContainer
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://image.flaticon.com/icons/svg/550/550096.svg",
    alt: "Icon",
    className: styles$6.alertIcon
  }), /*#__PURE__*/React.createElement("h3", {
    className: styles$6.message
  }, message));
}

var styles$7 = {"drawerTab":"_eCZeR","drawerTabHeader":"_1lqN1","drawerTitle":"_2xViP","closeIcon":"_24817","open":"_2sxod","openDrawer":"_28Z3R","close":"_RMMUh","closeDrawer":"_38H0N"};

function Drawer(_ref) {
  var _ref$title = _ref.title,
      title = _ref$title === void 0 ? 'Drawer Header' : _ref$title,
      _ref$toggle = _ref.toggle,
      toggle = _ref$toggle === void 0 ? true : _ref$toggle;
  var ref = useRef();

  var handleClose = function handleClose() {
    ref.current.classList.add(styles$7.close);
    ref.current.classList.remove(styles$7.add);
  };

  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    className: styles$7.drawerTab + " " + (toggle ? styles$7.open : styles$7.close)
  }, /*#__PURE__*/React.createElement("div", {
    className: styles$7.drawerTabHeader
  }, /*#__PURE__*/React.createElement("h2", {
    className: styles$7.drawerTitle
  }, title), /*#__PURE__*/React.createElement("img", {
    src: "https://image.flaticon.com/icons/svg/748/748122.svg",
    alt: "Close Icon",
    className: styles$7.closeIcon,
    onClick: handleClose
  })));
}

var styles$8 = {"progressContainer":"_33-Mk","progressValue":"_YHqDe","value":"_1FAJt"};

function Progress(_ref) {
  var _ref$maxValue = _ref.maxValue,
      maxValue = _ref$maxValue === void 0 ? 100 : _ref$maxValue,
      _ref$progressValue = _ref.progressValue,
      progressValue = _ref$progressValue === void 0 ? 70 : _ref$progressValue;
  var ref = useRef();
  useEffect(function () {
    ref.current.style.width = progressValue * 100 / maxValue + "%";
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: styles$8.progressContainer
  }, /*#__PURE__*/React.createElement("div", {
    className: styles$8.progressValue,
    ref: ref
  }), /*#__PURE__*/React.createElement("h2", {
    className: styles$8.value
  }, progressValue * 100 / maxValue + "%"));
}

var styles$9 = {"dropzoneContainer":"_2boa2"};

function ImageDropzone(_ref) {
  var url = _ref.url,
      getImagesCallback = _ref.getImagesCallback;

  var _useState = useState([]),
      images = _useState[0],
      setImages = _useState[1];

  var _useState2 = useState(false),
      hasImages = _useState2[0],
      setHasImages = _useState2[1];

  var sendPictures = function sendPictures() {
    try {
      fetch(url, {
        method: 'POST',
        headers: {
          contentType: 'application/json'
        },
        body: JSON.stringify(images)
      });
      return Promise.resolve();
    } catch (e) {
      return Promise.reject(e);
    }
  };

  var getImages = function getImages(imgs) {
    var convertedImages = [];
    Array.from(imgs).forEach(function (img) {
      var reader = new FileReader();
      reader.readAsDataURL(img);

      reader.onload = function () {
        convertedImages.push({
          base64: reader.result,
          type: img.type,
          name: img.name
        });
      };
    });
    setImages(convertedImages);

    if (getImagesCallback) {
      getImagesCallback(convertedImages);
    }

    setHasImages(true);
  };

  return /*#__PURE__*/React.createElement("div", {
    className: styles$9.dropzoneContainer
  }, /*#__PURE__*/React.createElement("input", {
    type: "file",
    name: "imageDropzone",
    multiple: true,
    onChange: function onChange(imgs) {
      return getImages(imgs.target.files);
    }
  }), hasImages ? images.map(function (image) {
    console.log(image);
    return /*#__PURE__*/React.createElement("img", {
      key: image.name,
      src: image.base64,
      alt: "Preview"
    });
  }) : null, /*#__PURE__*/React.createElement("button", {
    onClick: sendPictures
  }, "Send"));
}

var styles$a = {"container":"_rpiBh","title":"_33syD","arrow":"_2n47L","rightArrow":"_n2egu","rightAnimation":"_BTr94","downArrow":"_2dcpG","downAnimation":"_3ZaGP","content":"_1K_Hk","open":"_2sdKv","openAnimation":"_1B2gW","closed":"_3vOJ4","closeAnimation":"_15noc"};

function ExpandableArea(_ref) {
  var title = _ref.title,
      content = _ref.content,
      areaStatus = _ref.areaStatus;

  var _useState = useState(false),
      isOpen = _useState[0],
      setIsOpen = _useState[1];

  var areaRef = useRef();
  var arrowRef = useRef();

  var toggleArea = function toggleArea() {
    if (!isOpen) {
      areaRef.current.classList.add("" + styles$a.open);
      areaRef.current.classList.remove("" + styles$a.closed);
      arrowRef.current.classList.add("" + styles$a.downArrow);
      arrowRef.current.classList.remove("" + styles$a.rightArrow);
    } else {
      areaRef.current.classList.add("" + styles$a.closed);
      areaRef.current.classList.remove("" + styles$a.open);
      arrowRef.current.classList.add("" + styles$a.rightArrow);
      arrowRef.current.classList.remove("" + styles$a.downArrow);
    }

    setIsOpen(!isOpen);
  };

  useEffect(function () {
    if (areaStatus) {
      areaStatus(isOpen);
    }
  }, [isOpen]);
  return /*#__PURE__*/React.createElement("div", {
    className: styles$a.container
  }, /*#__PURE__*/React.createElement("div", {
    className: styles$a.title,
    onClick: toggleArea
  }, title, /*#__PURE__*/React.createElement("img", {
    src: "https://image.flaticon.com/icons/svg/60/60758.svg",
    alt: "Arrow",
    className: styles$a.arrow,
    ref: arrowRef
  })), /*#__PURE__*/React.createElement("div", {
    className: styles$a.content,
    ref: areaRef
  }, content));
}

var styles$b = {"switch":"_1hCbD","input":"_5AKrL","slider":"_hsP7H"};

function Switch(_ref) {
  return /*#__PURE__*/React.createElement("label", {
    className: styles$b["switch"]
  }, /*#__PURE__*/React.createElement("input", {
    className: styles$b.input,
    type: "checkbox"
  }), /*#__PURE__*/React.createElement("span", {
    className: styles$b.slider
  }));
}

function useLogger(variable) {
  useEffect(function () {
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
  var _useState = useState(function () {
    return getSavedValue(key, initialValue);
  }),
      value = _useState[0],
      setValue = _useState[1];

  useEffect(function () {
    localStorage.setItem(key, value);
  }, [value]);
  return [value, setValue];
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
var Slider$1 = function Slider$1(props) {
  return /*#__PURE__*/React.createElement(Slider, props);
};
var Alert$1 = function Alert$1(props) {
  return /*#__PURE__*/React.createElement(Alert, props);
};
var Drawer$1 = function Drawer$1(props) {
  return /*#__PURE__*/React.createElement(Drawer, props);
};
var Progress$1 = function Progress$1(props) {
  return /*#__PURE__*/React.createElement(Progress, props);
};
var ImageDropzone$1 = function ImageDropzone$1(props) {
  return /*#__PURE__*/React.createElement(ImageDropzone, props);
};
var ExpandableArea$1 = function ExpandableArea$1(props) {
  return /*#__PURE__*/React.createElement(ExpandableArea, props);
};
var Switch$1 = function Switch$1(props) {
  return /*#__PURE__*/React.createElement(Switch, props);
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

export { Alert$1 as Alert, ContactForm$1 as ContactForm, Drawer$1 as Drawer, ExpandableArea$1 as ExpandableArea, ImageDropzone$1 as ImageDropzone, InputField$1 as InputField, LoginForm$1 as LoginForm, Progress$1 as Progress, Rating$1 as Rating, Select$1 as Select, Slider$1 as Slider, Switch$1 as Switch, useCPFChecker$1 as useCPFChecker, useLocalStorage$1 as useLocalStorage, useLogger$1 as useLogger };
//# sourceMappingURL=index.modern.js.map
