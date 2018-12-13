import axios from "axios";
import * as constants from './constants';
import { fromJS } from "immutable";


export const getHomeInfo = () => {
  return (dispatch) => {
    axios.get("/api/home.json").then((res) => {
      const data = res.data;
      if (data.success) {
        const action = changeHomeData(data.data);
        dispatch(action);
      }
    }).catch((err) => {
      console.log(err)
    })
  }
};

export const getMoreList = (page) => {
  return (dispatch) => {
    axios.get("/api/homeList.json?page=" + page).then((res) => {
      if (res.data.success) {
        const result = res.data.data;
        dispatch(addArticleList(result, page + 1));
      }
    }).catch((err) => {
      console.log(err);
    })
  }
};

export const toggleTopShow = (showScroll) => ({
  type: constants.TOGGLE_SCROLL_SHOW,
  showScroll
});

const changeHomeData = (result) => ({
  type: constants.CHANGE_HOME_DATA,
  topicList: result.topicList,
  articleList: result.articleList,
  recommendList: result.recommendList
});

const addArticleList = (result, page) => ({
  type: constants.ADD_ARTICLE,
  list: fromJS(result),
  nextPage: page
});