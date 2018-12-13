import React, { PureComponent } from 'react';
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from "./style";
import Topic from "./components/Topic";
import List from "./components/List";
import Recommend from "./components/Recommend";
import Writer from "./components/Writer";
import { connect } from "react-redux";
import { actionCreators } from "./store";


class Home extends PureComponent {

  handlerScrollTop() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <HomeWrapper>
          <HomeLeft>
            <img
              alt=""
              className="banner-img"
              src="//upload.jianshu.io/admin_banners/web_images/4581/14d959ff757f21616baa933fd3bdbfcf52fd512a.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
            />
            <Topic/>
            <List/>
          </HomeLeft>
          <HomeRight>
            <Recommend/>
            <Writer/>
          </HomeRight>
          {
            this.props.showScroll ? <BackTop onClick={ this.handlerScrollTop }>顶部</BackTop> : null
          }
        </HomeWrapper>
      </div>
    );
  }

  componentDidMount() {
    this.props.changeHomeData();
    this.bindEvents();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.props.changeScrollTopShow);
  }

  bindEvents() {
    window.addEventListener("scroll", this.props.changeScrollTopShow);
  }
}

const mapStateToProps = (state) => ({
  showScroll: state.getIn(['home', 'showScroll'])
});

const mapDispatchToProps = (dispatch) => ({
  changeHomeData() {
    dispatch(actionCreators.getHomeInfo());
  },
  changeScrollTopShow() {
    if (document.documentElement.scrollTop > 100) {
      dispatch(actionCreators.toggleTopShow(true));
    } else {
      dispatch(actionCreators.toggleTopShow(false));
    }
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);