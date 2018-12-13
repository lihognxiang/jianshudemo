import axios from "axios";
import  * as contants  from "./constants";


export const getDetail = (id) => {
  return (dispatch) => {
    axios.get('/api/detail.json?id=' + id).then((res) => {
      if (res.data.success) {
        const result = res.data.data;
        dispatch(changeDetail(result.title, result.content))
      }
    }).catch((err) => {
      console.log(err)
    })
  }
};

const changeDetail = (title, content) => ({
  type: contants.CHANGE_DETAIL,
  title,
  content
});
