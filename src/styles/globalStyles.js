import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

* {
  scrollbar-width: thin;
  scrollbar-color: #eee;

  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    background: #eee;
  }
  &::-webkit-scrollbar-thumb {
    background: black;
    border-radius: 0px;
    border: 3px solid #582E80;
  }
}
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: var(--bg);
  box-shadow: inset 20px 20px 70px rgba(0,0,0,.1), 
            inset -20px -20px 70px rgba(0,0,0,.1);
  color: var(--textNormal);
  height: 100% !important;
  &.dark {
    --bg: #131217;
    --textNormal: #fff;
    --textInverse: #fff;
    --textTitle: #dbdbdc;
    --textTitleInverse: #000;
    --textCreamy: #f8f8f9;
    --shadyText: #ffffff9e;
    --textHeaderColor: #FB8B24;
    --textHeaderBg: brown;
    --link: #542c85;    
  }
  &.light {
    --bg: #2f2a41;
    --textNormal: #fff;
    --textInverse: #fff;
    --textTitle: #dbdbdc;
    --textTitleInverse: #dbdbdc;
    --textCreamy:  #f8f8f9;
    --shadyText: #ffffff9e;
    --textHeaderColor: #00b386;
    --textHeaderBg: #fff:
    --link: #542c85;
  }
  h1,
  h2,
  h3,
  h4 {
    color: var(--textTitle);
    margin-top: 0px;
  }
  input,
  textarea,
  button,
  select,
  a {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  text-decoration: none;
  }
  a {
  color: var(--link);
  text-shadow: none;
  text-decoration: none;
  background-image: none;
  }
  img {
    padding: 0;
    margin: 0;
    user-select: none;
  }
 
}`

