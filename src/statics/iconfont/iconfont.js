import { createGlobalStyle } from 'styled-components';

export const GlobalIconStyle = createGlobalStyle`
  @font-face {
    font-family: "iconfont";
    src: url('./iconfont.eot?t=1544273360522'); /* IE9*/
    src: url('./iconfont.eot?t=1544273360522#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),
    url('./iconfont.ttf?t=1544273360522') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
    url('./iconfont.svg?t=1544273360522#iconfont') format('svg'); /* iOS 4.1- */
}

  .iconfont {
    font-family:"iconfont" !important;
    font-size:16px;
    font-style:normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
`;


