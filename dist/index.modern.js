import React, { useState, useRef, useEffect } from 'react';

var styles = {"form":"_styles__form__2vqA3","inputFieldDiv":"_styles__inputFieldDiv__u071I","loginLogo":"_styles__loginLogo__rSjCy","loginBtn":"_styles__loginBtn__1uQnd"};

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

var styles$1 = {"mainContactForm":"_styles__mainContactForm__1afsr","title":"_styles__title__16Fk0","inputFieldDiv":"_styles__inputFieldDiv__1eXrs","loginBtn":"_styles__loginBtn__1yQ_8"};

function ContactForm({
  url,
  title
}) {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  const submitHandler = async () => {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        email,
        message
      })
    });
    alert(response);
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
    onChange: e => setName(e.target.value)
  })), /*#__PURE__*/React.createElement("div", {
    className: styles$1.inputFieldDiv
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "Email"
  }, "Email:"), /*#__PURE__*/React.createElement("input", {
    type: "email",
    name: "Email",
    onChange: e => setEmail(e.target.value)
  })), /*#__PURE__*/React.createElement("div", {
    className: styles$1.inputFieldDiv
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "Email"
  }, "Message:"), /*#__PURE__*/React.createElement("textarea", {
    type: "email",
    name: "Email",
    onChange: e => setMessage(e.target.value),
    draggable: "false"
  })), /*#__PURE__*/React.createElement("button", {
    className: styles$1.loginBtn,
    onClick: () => submitHandler()
  }, "Send Message"));
}

var styles$2 = {"inputFieldContainer":"_styles__inputFieldContainer__1dcFC","input":"_styles__input__1iWA1","inputIcon":"_styles__inputIcon__2Dfna","clearIcon":"_styles__clearIcon__2SdZB","clearBtnAnimation":"_styles__clearBtnAnimation__ZTJOn"};

function InputField({
  type,
  getvalueCallback
}) {
  const [fieldValue, setFieldValue] = useState('');
  const [timer, setTimer] = useState();

  const changeValue = val => {
    setFieldValue(val);
    clearTimeout(timer);
    setTimer(setTimeout(() => {
      getvalueCallback(val);
    }, 500));
  };

  const clearFieldValue = () => {
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
    onChange: e => changeValue(e.target.value)
  }), /*#__PURE__*/React.createElement("button", {
    className: styles$2.inputIcon,
    onClick: clearFieldValue
  }, fieldValue.length > 0 ? /*#__PURE__*/React.createElement("img", {
    src: "https://image.flaticon.com/icons/svg/483/483328.svg",
    alt: "Close Icon",
    className: styles$2.clearIcon
  }) : null));
}

var styles$3 = {"select":"_styles__select__hpaxr","option":"_styles__option__30K3w"};

function Select({
  options,
  getvalueCallback
}) {
  return /*#__PURE__*/React.createElement("select", {
    name: "Select",
    className: styles$3.select,
    onChange: e => {
      getvalueCallback(e.target.value);
    }
  }, options.map(option => {
    return /*#__PURE__*/React.createElement("option", {
      key: option.value,
      value: option.value,
      className: styles$3.option
    }, option.label);
  }));
}

var styles$4 = {"ratingContainer":"_styles__ratingContainer__3shO0","active":"_styles__active__20S1b","disabled":"_styles__disabled__24sjJ"};

function Rating({
  getvalueCallback
}) {
  const icones = [1, 2, 3, 4, 5];
  const [selected, setSelected] = useState(0);
  return /*#__PURE__*/React.createElement("div", {
    className: styles$4.ratingContainer
  }, icones.map((icone, index) => {
    return /*#__PURE__*/React.createElement("div", {
      key: icone,
      className: selected > index ? styles$4.active : styles$4.disabled,
      onMouseOver: () => setSelected(index + 1),
      onClick: () => getvalueCallback(index + 1)
    });
  }));
}

var styles$5 = {"slider":"_styles__slider__2EqHe"};

function Slider({
  min,
  max,
  getvalueCallback
}) {
  return /*#__PURE__*/React.createElement("input", {
    className: styles$5.slider,
    type: "range",
    onChange: e => getvalueCallback(e.target.value),
    min: min,
    max: max,
    defaultValue: min
  });
}

var styles$6 = {"alertContainer":"_styles__alertContainer__Nr9nH","cardAnimationIn":"_styles__cardAnimationIn__28pWq","cardAnimationOut":"_styles__cardAnimationOut__1KwFf","alertIcon":"_styles__alertIcon__2qceH"};

function Alert({
  message
}) {
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

var styles$7 = {"drawerTab":"_styles__drawerTab__eCZeR","drawerTabHeader":"_styles__drawerTabHeader__1lqN1","drawerTitle":"_styles__drawerTitle__2xViP","closeIcon":"_styles__closeIcon__24817","open":"_styles__open__2sxod","openDrawer":"_styles__openDrawer__28Z3R","close":"_styles__close__RMMUh","closeDrawer":"_styles__closeDrawer__38H0N"};

function Drawer({
  title = 'Drawer Header',
  toggle = true
}) {
  const ref = useRef();

  const handleClose = () => {
    ref.current.classList.add(styles$7.close);
    ref.current.classList.remove(styles$7.add);
  };

  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    className: `${styles$7.drawerTab} ${toggle ? styles$7.open : styles$7.close}`
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

var styles$8 = {"progressContainer":"_styles__progressContainer__33-Mk","progressValue":"_styles__progressValue__YHqDe","value":"_styles__value__1FAJt"};

function Progress({
  maxValue = 100,
  progressValue = 70
}) {
  const ref = useRef();
  useEffect(() => {
    ref.current.style.width = `${progressValue * 100 / maxValue}%`;
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: styles$8.progressContainer
  }, /*#__PURE__*/React.createElement("div", {
    className: styles$8.progressValue,
    ref: ref
  }), /*#__PURE__*/React.createElement("h2", {
    className: styles$8.value
  }, `${progressValue * 100 / maxValue}%`));
}

var styles$9 = {"dropzoneContainer":"_styles__dropzoneContainer__2boa2"};

function ImageDropzone({
  url,
  getImagesCallback
}) {
  const [images, setImages] = useState([]);
  const [hasImages, setHasImages] = useState(false);

  const sendPictures = async () => {
    fetch(url, {
      method: 'POST',
      headers: {
        contentType: 'application/json'
      },
      body: JSON.stringify(images)
    });
  };

  const getImages = imgs => {
    const convertedImages = [];
    Array.from(imgs).forEach(img => {
      const reader = new FileReader();
      reader.readAsDataURL(img);

      reader.onload = () => {
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
    onChange: imgs => getImages(imgs.target.files)
  }), hasImages ? images.map(image => {
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

var styles$a = {"container":"_styles__container__rpiBh","title":"_styles__title__33syD","arrow":"_styles__arrow__2n47L","rightArrow":"_styles__rightArrow__n2egu","rightAnimation":"_styles__rightAnimation__BTr94","downArrow":"_styles__downArrow__2dcpG","downAnimation":"_styles__downAnimation__3ZaGP","content":"_styles__content__1K_Hk","open":"_styles__open__2sdKv","openAnimation":"_styles__openAnimation__1B2gW","closed":"_styles__closed__3vOJ4","closeAnimation":"_styles__closeAnimation__15noc"};

function ExpandableArea({
  title,
  content,
  areaStatus
}) {
  const [isOpen, setIsOpen] = useState(false);
  const areaRef = useRef();
  const arrowRef = useRef();

  const toggleArea = () => {
    if (!isOpen) {
      areaRef.current.classList.add(`${styles$a.open}`);
      areaRef.current.classList.remove(`${styles$a.closed}`);
      arrowRef.current.classList.add(`${styles$a.downArrow}`);
      arrowRef.current.classList.remove(`${styles$a.rightArrow}`);
    } else {
      areaRef.current.classList.add(`${styles$a.closed}`);
      areaRef.current.classList.remove(`${styles$a.open}`);
      arrowRef.current.classList.add(`${styles$a.rightArrow}`);
      arrowRef.current.classList.remove(`${styles$a.downArrow}`);
    }

    setIsOpen(!isOpen);
  };

  useEffect(() => {
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

function useLogger(variable) {
  useEffect(() => {
    console.log(variable);
  }, [variable]);
}

function useCPFChecker(cpf) {
  let aux = 0;
  const numbers = cpf.split('');
  numbers.forEach(number => aux += parseInt(number));
  return JSON.stringify(aux).charAt(0) === JSON.stringify(aux).charAt(1);
}

function getSavedValue(key, initialValue) {
  const savedValue = JSON.parse(localStorage.getItem(key));

  if (savedValue) {
    return savedValue;
  }

  if (initialValue instanceof Function) {
    return initialValue();
  }

  return initialValue;
}

function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    return getSavedValue(key, initialValue);
  });
  useEffect(() => {
    localStorage.setItem(key, value);
  }, [value]);
  return [value, setValue];
}

const LoginForm$1 = props => /*#__PURE__*/React.createElement(LoginForm, props);
const ContactForm$1 = props => /*#__PURE__*/React.createElement(ContactForm, props);
const InputField$1 = props => /*#__PURE__*/React.createElement(InputField, props);
const Select$1 = props => /*#__PURE__*/React.createElement(Select, props);
const Rating$1 = props => /*#__PURE__*/React.createElement(Rating, props);
const Slider$1 = props => /*#__PURE__*/React.createElement(Slider, props);
const Alert$1 = props => /*#__PURE__*/React.createElement(Alert, props);
const Drawer$1 = props => /*#__PURE__*/React.createElement(Drawer, props);
const Progress$1 = props => /*#__PURE__*/React.createElement(Progress, props);
const ImageDropzone$1 = props => /*#__PURE__*/React.createElement(ImageDropzone, props);
const ExpandableArea$1 = props => /*#__PURE__*/React.createElement(ExpandableArea, props);
const useLogger$1 = variable => useLogger(variable);
const useCPFChecker$1 = cpf => useCPFChecker(cpf);
const useLocalStorage$1 = (key, initialValue) => useLocalStorage(key, initialValue);

export { Alert$1 as Alert, ContactForm$1 as ContactForm, Drawer$1 as Drawer, ExpandableArea$1 as ExpandableArea, ImageDropzone$1 as ImageDropzone, InputField$1 as InputField, LoginForm$1 as LoginForm, Progress$1 as Progress, Rating$1 as Rating, Select$1 as Select, Slider$1 as Slider, useCPFChecker$1 as useCPFChecker, useLocalStorage$1 as useLocalStorage, useLogger$1 as useLogger };
//# sourceMappingURL=index.modern.js.map
