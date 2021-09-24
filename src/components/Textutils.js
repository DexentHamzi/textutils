import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Textutils(props) {
  const handleUPEvent = (e) => {
    setText(e.target.value);
  };

  const textUpper = () => {
    if (text.length === 0) {
      toast.error("Nothing text enter sorry 🤔", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      // console.log(text);
      let newText = text;
      setText(newText.toUpperCase());
      // props.toggleAlert("success", "Text is now uppercase");
      toast("Text is now uppercase", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const textLower = () => {
    if (text.length === 0) {
      toast.error("Nothing text enter sorry 🙂", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      let newText = text;
      setText(newText.toLowerCase());
      // props.toggleAlert("success", "Convert to lower Case");
      toast("Text is now lowercase", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const textClear = () => {
    if (text.length === 0) {
      toast.error("Enter text below first 😪!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      setText("");
      // props.toggleAlert("success", "Text Cleared");
      toast.info("Text Cleared!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const textCopy = () => {
    if (text.length === 0) {
      toast.error("Enter text then Copy 😥!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      // let text = document.getElementById("Punctuation");
      // text.select();
      navigator.clipboard.writeText(text);
      setText("");
      // props.toggleAlert("success", "Copy Text");
      toast.success("Copy Text!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const removeSpace = () => {
    if (text.length === 0) {
      toast.error("First Enter Text 🙄", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      let newText = text;
      setText(newText.replace(/\s/g, "")); // remove all spaces
      toast.success("Remove Spaces", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const removeExtraSpace = () => {
    if (text.length === 0) {
      toast.error("Plz Type Your Text", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      toast.success("Remove Specific Spaces", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const handleTextCap = () => {
    if (text.length === 0) {
      toast.error("Enter Text and then Capitilize 😔", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      let newText = text;
      setText(newText.charAt(0).toUpperCase() + newText.slice(1));
      toast.success("Text First Letter Capitilize", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  // const handleTextLow = () => {
  //   if (text.length === 0) {
  //     toast.error("Enter Text and then Lower 😐", {
  //       position: "top-center",
  //       autoClose: 3000,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //     });
  //   } else {
  //     let newText = text;
  //     setText(newText.charAt(0).toLowerCase() + newText.slice(1));
  //     toast.success("Text First Letter Lowercase", {
  //       position: "top-center",
  //       autoClose: 3000,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //     });
  //   }
  // };

  const handleRDollar = () => {
    if (text.length === 0) {
      toast.error("Enter text first then remove $", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      let newText = text;
      setText(newText.replaceAll("$", ""));
      toast.success("Successfully remove $", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const handleRAt = () => {
    if (text.length === 0) {
      toast.error("Enter text first then remove @", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      let newText = text;
      setText(newText.replaceAll("@", ""));
      toast.success("Successfully remove @", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const handleRHash = () => {
    if (text.length === 0) {
      toast.error("Enter text first then remove #", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      let newText = text;
      setText(newText.replaceAll("#", ""));
      toast.success("Successfully remove #", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const handleRPer = () => {
    if (text.length === 0) {
      toast.error("Enter text first then remove %", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      let newText = text;
      setText(newText.replaceAll("%", ""));
      toast.success("Successfully remove %", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const [text, setText] = useState("");

  return (
    <>
      <div
        className={`my-3 w-75 m-auto text-${
          props.mode === "light" ? "dark" : "light"
        }`}
      >
        <label htmlFor="Punctuation" className="form-label">
          <h1>Enter the text Analyz</h1>
        </label>
        <p className={`text-${props.bgMode === "light" ? "d6cbd3" : "d6cbd2"}`}>
          This online punctuation deleter allows you to quickly remove
          punctuation characters like !"#$%&amp;'()*+,-./:;&lt;=&gt;?@[\]^_`{}~
          from a text. Just paste the text in the textarea below, edit the
          punctuation characters to remove (if needed) and click the "Remove
          Punctuation" button.
        </p>
        <textarea
          style={{
            backgroundColor: props.mode === "light" ? "#f8f9fa" : "#343a40",
            color: props.mode === "light" ? "#343a40" : "#f8f9fa",
          }}
          className="form-control"
          id="Punctuation"
          rows="8"
          placeholder="Enter Text Here..."
          value={text}
          onChange={handleUPEvent}
        ></textarea>
        <div className="allBtn">
          {/* <button className="btn btn-primary my-2" onClick={textUpper}>
            Text to uppercase
          </button> */}
          <button className="sc-AxmLO jAFeHL" onClick={textUpper}>
            {/* <span role="img" aria-label="show alert">
              🚀
            </span>{" "} */}
            UPPER CASE
          </button>
          {/* <button className="btn btn-primary my-2 mx-1" onClick={textLower}>
            Text to lowercase
          </button> */}
          <button className="sc-AxmLO jAFeHL" onClick={textLower}>
            lower case
          </button>
          {/* <button className="btn btn-primary my-2" onClick={textClear}>
            Clear Text
          </button> */}
          <button className="sc-AxmLO jAFeHL " onClick={textClear}>
            Clear Text
          </button>
          {/* <button className="btn btn-primary my-2 mx-1" onClick={textCopy}>
            Copy Text
          </button> */}
          <button className="sc-AxmLO jAFeHL  " onClick={textCopy}>
            Copy Text
          </button>
          {/* <button className="btn btn-primary my-2" onClick={removeSpace}>
            Remove Spaces
          </button> */}
          <button className="sc-AxmLO jAFeHL" onClick={removeSpace}>
            Remove Spaces
          </button>
          {/* <button className="btn btn-primary my-2" onClick={removeExtraSpace}>
            Remove Extra Spaces
          </button> */}
          <button className="sc-AxmLO jAFeHL " onClick={removeExtraSpace}>
            All Extra Spaces
          </button>
          {/* <button className="btn btn-primary my-2 mx-1" onClick={handleTextCap}>
            Text Capitilize
          </button> */}
          <button className="sc-AxmLO jAFeHL" onClick={handleTextCap}>
            Sentence case
          </button>
          {/* <button className="btn btn-primary my-2 mx-1" onClick={handleTextLow}>
            Text Lower
          </button> */}
          {/* <button class="sc-AxmLO jAFeHL" onClick={handleTextLow}>
            lower case
          </button> */}

          <button className="sc-AxmLO jAFeHL" onClick={handleRDollar}>
            Remove $
          </button>

          <button className="sc-AxmLO jAFeHL" onClick={handleRAt}>
            Remove @
          </button>
          <button className="sc-AxmLO jAFeHL" onClick={handleRHash}>
            Remove #{" "}
          </button>
          <button className="sc-AxmLO jAFeHL" onClick={handleRPer}>
            Remove %{" "}
          </button>
        </div>

        <div className="btn-group" role="group">
          <button
            id="btnGroupDrop1"
            type="button"
            className="btn btn-primary dropdown-toggle w-100"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Select Operation
          </button>

          <ul className="dropdown-menu" aria-labelledby="btnGroupDrop1">
            <li>
              <a className="dropdown-item" href="javascript:void(0)">
                <button className="sc-AxmLO jAFeHL" onClick={textUpper}>
                  Uppercase
                </button>
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                <button className="sc-AxmLO jAFeHL" onClick={textLower}>
                  Lowercase
                </button>
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                <button className="sc-AxmLO jAFeHL " onClick={textClear}>
                  Clear Text
                </button>
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                <button className="sc-AxmLO jAFeHL  " onClick={textCopy}>
                  Copy Text
                </button>
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                <button className="sc-AxmLO jAFeHL" onClick={removeSpace}>
                  Remove Spaces
                </button>
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                <button className="sc-AxmLO jAFeHL " onClick={removeExtraSpace}>
                  Remove Extra Spaces
                </button>
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                <button className="sc-AxmLO jAFeHL" onClick={handleTextCap}>
                  Sentence case
                </button>
              </a>
            </li>
            {/* <li>
              <a className="dropdown-item" href="#">
                <button class="sc-AxmLO jAFeHL" onClick={handleTextLow}>
                  Text Lower
                </button>
              </a>
            </li> */}
            <li>
              <a className="dropdown-item" href="#">
                <button className="sc-AxmLO jAFeHL" onClick={handleRDollar}>
                  Remove $
                </button>
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                <button className="sc-AxmLO jAFeHL" onClick={handleRAt}>
                  Remove @
                </button>
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                <button className="sc-AxmLO jAFeHL" onClick={handleRHash}>
                  Remove #{" "}
                </button>
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                <button className="sc-AxmLO jAFeHL" onClick={handleRPer}>
                  Remove %{" "}
                </button>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div
        className={`container text-${
          props.mode === "light" ? "dark" : "light"
        }`}
      >
        <div className="wordCount">
          <h2>Your Text Summary</h2>
          <p>
            {
              text.split(/\s+/).filter(function (n) {
                return n !== "";
              }).length
            }{" "}
            words and {text.length} characters
          </p>

          <h5>Word Reading Time</h5>
          <p>
            {" "}
            {0.008 *
              text.split(" ").filter(function (n) {
                return n !== "";
              }).length}{" "}
            Minutes read{" "}
          </p>
        </div>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to Preview"}</p>
      </div>
      <ToastContainer />
    </>
  );
}

export default Textutils;
