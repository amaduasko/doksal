import "./Modal.css";
import { useState, useRef, useEffect } from "react";
// import { useQuery, useMutation } from "@apollo/react-hooks"
const Modal = ({ children, onClose, bigWindow, onSubmit }) => {
  return (
    <div
      className="modalx"
      onClick={(e) =>
        e.target.classList.contains("modalx") ? onClose() : null
      }
    >
      <div
        className={`modalx__window ${bigWindow ? "modalx__window__big" : ""}`}
      >
        {children}
      </div>
    </div>
  );
};
const ModalClose = ({ onClick }) => {
  return (
    <div className="ModalClose__main">
      <span className="ModalClose" onClick={onClick}>
        <i className="fas fa-times"></i>
      </span>
    </div>
  );
};
const ModalTitle = ({ children }) => {
  return <h2 className="modaltitle">{children}</h2>;
};

const ModalInfo = ({ children }) => {
  return <p className="modalinfo">{children}</p>;
};

const ModalFieldName = ({ children, ...rest }) => {
  return (
    <label className="modalfieldname" {...rest}>
      {children}
    </label>
  );
};

const ModalField = ({ error, ...rest }) => {
  return (
    <div className="modalfield">
      <input
        className={`modalfield__input ${
          error === true ? "modalfield__input_error" : ""
        }`}
        {...rest}
      />
    </div>
  );
};

const ModalCheckbox = ({ isChecked, children, ...rest }) => (
  <label className="modalcheckbox" {...rest}>
    <span
      className={`modalcheckbox__check ${isChecked ? "active" : ""}`}
    ></span>
    <span className="modalcheckbox__text">{children}</span>
  </label>
);

const ModalButtons = ({ children }) => (
  <div className="modalbuttons">{children}</div>
);

const ModalTextarea = ({ img, ...rest }) => (
  <div className="modaltextarea">
    <textarea className="modaltextarea__area" {...rest} />
  </div>
);
//// правый блок

const ModalImageRight = ({ img, children }) => {
  return (
    <div
      className="ModalImageRight"
      style={{
        backgroundImage: `url(${img})`,
      }}
    ></div>
  );
};

const ModalTitleRight = ({ title, children }) => (
  <span className="ModalTitleRight">{title}</span>
);

const ModalParametrs = ({ title, params, children }) => {
  return (
    <div className="ModalParametrs">
      <span className="ModalParametrs__title">{title}</span>
      <span className="ModalParametrs__price">{params}</span>
    </div>
  );
};

const ModalSum = ({ title, price, children }) => {
  return (
    <div className="ModalSum ">
      {/* <span className="ModalSum__title">{title}</span> */}
      <span className="ModalSum__price">{price}</span>
      <span className="ModalSum__rub">
        <i className="fas fa-ruble-sign"></i>
      </span>
    </div>
  );
};

const ModalUpload = ({ onFileReaded }) => {
  const fileInputRef = useRef();
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("");
  const [err, setErr] = useState(null);

  useEffect(() => {
    if (onFileReaded && file) {
      // console.log({ file });
      onFileReaded(fileName, file);
    }
  }, [file]);

  const handleFileChange = (e) => {
    setFileName(e.target.files[0].name);

    var reader = new FileReader();
    reader.addEventListener(
      "loadend",
      (e) => {
        setFile(e.target.result.split(",")[1]);
        console.log(e.target.result);
      },
      false
    );
    reader.addEventListener("error", (e) => {});

    reader.readAsDataURL(e.target.files[0]);
  };

  const handleAddPhoto = (e) => {
    fileInputRef.current.click();
  };

  const handleFileRemove = () => {
    const uploadInput = document.querySelector("input[data-key='55']");
    setFileName("");
    setFile(null);
    uploadInput.value = "";
  };

  return (
    <div className="ModalUpload">
      <input
        data-key="55"
        className="ModalUpload__input"
        type="file"
        required
        ref={fileInputRef}
        onChange={handleFileChange}
      />

      {!file && (
        <div className="ModalUpload__box__main__main">
          <div className="ModalUpload__box__main" onClick={handleAddPhoto}>
            <div
              className="ModalUpload__box"
              style={{
                backgroundImage: `url("/static/img/upload.png")`,
              }}
            ></div>
            <span className="ModalUpload__text">Прикрепить файл</span>
          </div>
          {err && (
            <span className="ModalUpload__error">
              *К сожалению вы можете загрузить только изображения в формате jpg,
              png или gif
            </span>
          )}
        </div>
      )}

      {file && (
        <div className="uploadbox__item">
          <div
            className="ModalUpload__box1"
            style={{
              backgroundImage: `url("/static/img/upload1.png")`,
            }}
          ></div>
          <span className="upload__item__name">{fileName}</span>
          <span className="uploadbox__itemremove" onClick={handleFileRemove}>
            <i className="fas fa-times"></i>
          </span>
        </div>
      )}
    </div>
  );
};

export default Modal;
export {
  ModalInfo,
  ModalTitle,
  ModalFieldName,
  ModalField,
  ModalCheckbox,
  ModalButtons,
  ModalTextarea,
  ModalImageRight,
  ModalTitleRight,
  ModalParametrs,
  ModalSum,
  ModalUpload,
  ModalClose,
};
