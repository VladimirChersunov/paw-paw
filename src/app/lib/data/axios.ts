import axios from "axios";

// axios.<method> теперь будет обеспечивать автозаполнение и ввод параметров

export default  axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
  });