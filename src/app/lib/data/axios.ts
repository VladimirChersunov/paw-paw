import axios from "axios";

// axios.<method> теперь будет обеспечивать автозаполнение и ввод параметров

export default  axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  });