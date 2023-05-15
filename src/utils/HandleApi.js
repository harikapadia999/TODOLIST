import axios from "axios";

const url = "http://localhost:5000";

const all = (setAll) => {
  axios.get(url).then(({ data }) => {
    console.log("Data ---->", data);
    setAll(data);
  });
};
const add = (text, setText, setAll) => {
  axios
    .post(`${url}/save`, { text })
    .then((data) => {
      console.log(data);
      setText("");
      all(setAll);
    })
    .catch((err) => console.log(err));
};
const update = (id, text, setAll, setText, setIsUpd) => {
  axios
    .post(`${url}/update`, { _id: id, text })
    .then((data) => {
      setText("");
      setIsUpd(false);
      all(setAll);
    })
    .catch((err) => console.log(err));
};
const del = (_id, setAll) => {
  axios
    .post(`${url}/delete`, { _id })
    .then((data) => {
      console.log(data);
      all(setAll);
    })
    .catch((err) => console.log(err));
};
export { all, add, update, del };
