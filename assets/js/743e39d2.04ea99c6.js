"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[768],{3905:function(e,r,t){t.d(r,{Zo:function(){return m},kt:function(){return s}});var a=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var p=a.createContext({}),c=function(e){var r=a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},m=function(e){var r=c(e.components);return a.createElement(p.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},g=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),g=c(t),s=n,d=g["".concat(p,".").concat(s)]||g[s]||u[s]||o;return t?a.createElement(d,i(i({ref:r},m),{},{components:t})):a.createElement(d,i({ref:r},m))}));function s(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=g;var l={};for(var p in r)hasOwnProperty.call(r,p)&&(l[p]=r[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},5665:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return m},default:function(){return g}});var a=t(7462),n=t(3366),o=(t(7294),t(3905)),i=["components"],l={sidebar_label:"Cargo-program Utility",sidebar_position:5},p="`cargo-program` utility",c={unversionedId:"developing-contracts/cargo-program",id:"developing-contracts/cargo-program",title:"`cargo-program` utility",description:"cargo-program is the Rust's cargo expanding utility aimed to simplify Gear programs development.",source:"@site/docs/developing-contracts/cargo-program.md",sourceDirName:"developing-contracts",slug:"/developing-contracts/cargo-program",permalink:"/developing-contracts/cargo-program",editUrl:"https://github.com/gear-tech/wiki/edit/master/docs/developing-contracts/cargo-program.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_label:"Cargo-program Utility",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Send a Message",permalink:"/developing-contracts/send-a-transaction"},next:{title:"Prerequisites",permalink:"/developing-contracts/examples/prerequisites"}},m=[{value:"Install",id:"install",children:[],level:2},{value:"Usage",id:"usage",children:[{value:"Create a new Gear program",id:"create-a-new-gear-program",children:[],level:3},{value:"Create a new async Gear program",id:"create-a-new-async-gear-program",children:[],level:3},{value:"Build the Gear program",id:"build-the-gear-program",children:[],level:3}],level:2}],u={toc:m};function g(e){var r=e.components,t=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"cargo-program-utility"},(0,o.kt)("inlineCode",{parentName:"h1"},"cargo-program")," utility"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"cargo-program")," is the Rust's ",(0,o.kt)("inlineCode",{parentName:"p"},"cargo")," expanding utility aimed to simplify Gear programs development."),(0,o.kt)("p",null,"GitHub repo: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/gear-tech/cargo-program"},"https://github.com/gear-tech/cargo-program")),(0,o.kt)("h2",{id:"install"},"Install"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"(recommended)")," Latest version from the repo:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cargo install --git https://github.com/gear-tech/cargo-program.git\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Stable version from ",(0,o.kt)("a",{parentName:"li",href:"https://crates.io/crates/cargo-program"},"crates.io"),":")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cargo install cargo-program\n")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("h3",{id:"create-a-new-gear-program"},"Create a new Gear program"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cargo program new my-program\n")),(0,o.kt)("h3",{id:"create-a-new-async-gear-program"},"Create a new async Gear program"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cargo program new my-async-program --async\n")),(0,o.kt)("h3",{id:"build-the-gear-program"},"Build the Gear program"),(0,o.kt)("p",null,"In debug mode:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cargo program build\n")),(0,o.kt)("p",null,"In release mode:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cargo program build --release\n")),(0,o.kt)("p",null,"Then you find three output WASM files in ",(0,o.kt)("inlineCode",{parentName:"p"},"target/wasm32-unknown-unknown/release")," directory:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Primary compiled program with ",(0,o.kt)("inlineCode",{parentName:"li"},".wasm")," extension"),(0,o.kt)("li",{parentName:"ul"},"Optimized program with ",(0,o.kt)("inlineCode",{parentName:"li"},".opt.wasm")," extension"),(0,o.kt)("li",{parentName:"ul"},"Metadata providing program with ",(0,o.kt)("inlineCode",{parentName:"li"},".meta.wasm")," extension")))}g.isMDXComponent=!0}}]);