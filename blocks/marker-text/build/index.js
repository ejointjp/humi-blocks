(()=>{"use strict";var e,a={440:()=>{const e=window.wp.blocks,a=window.React,l=[{label:"Info",value:"info",className:"material-symbols-outlined"},{label:"Check",value:"check",className:"material-symbols-outlined"},{label:"Check Circle",value:"check_circle",className:"material-symbols-outlined"},{label:"Error",value:"error",className:"material-symbols-outlined"},{label:"Priority High",value:"priority_high",className:"material-symbols-outlined"},{label:"Warning",value:"warning",className:"material-symbols-outlined"},{label:"Help",value:"help",className:"material-symbols-outlined"},{label:"Question Mark",value:"question_mark",className:"material-symbols-outlined"},{label:"Star",value:"star",className:"material-symbols-outlined"},{label:"Sentiment Satisfied",value:"sentiment_satisfied",className:"material-symbols-outlined"},{label:"Sentiment Neutral",value:"sentiment_neutral",className:"material-symbols-outlined"},{label:"Sentiment Dissatisfied",value:"sentiment_dissatisfied",className:"material-symbols-outlined"},{label:"Fiber Manual Record",value:"fiber_manual_record",className:"material-symbols-outlined"},{label:"Change History",value:"change_history",className:"material-symbols-outlined"},{label:"Close",value:"close",className:"material-symbols-outlined"},{label:"Thumb Up",value:"thumb_up",className:"material-symbols-outlined"},{label:"Thumb Down",value:"thumb_down",className:"material-symbols-outlined"},{label:"Feedback",value:"feedback",className:"material-symbols-outlined"},{label:"なし",value:""}],t=[{name:"info",color:"var(--litob-info)"},{name:"success",color:"var(--litob-success)"},{name:"warning",color:"var(--litob-warning)"},{name:"danger",color:"var(--litob-danger)"},{name:"primary",color:"var(--litob-primary)"},{name:"secondary",color:"var(--litob-secondary)"}],o=window.wp.blockEditor,s=window.wp.components,r=JSON.parse('{"u2":"lito/marker-text"}');(0,e.registerBlockType)(r.u2,{edit:function(e){const{attributes:r,setAttributes:i}=e,{content:n,iconName:m,color:c}=r,b=(0,o.useBlockProps)({style:{"--litob-marker-text-color":c}});return(0,a.createElement)("div",{...b},(0,a.createElement)(o.InspectorControls,{key:"setting"},(0,a.createElement)(s.PanelBody,{title:"マーカーの設定",initialOpen:!0},(0,a.createElement)(s.BaseControl,{label:"マーカー",className:"litob-base-control"},(0,a.createElement)("div",{className:"litob-editor-icon"},l.map(((e,l)=>(0,a.createElement)("div",{key:l,className:e.value===m?"litob-editor-icon-item current":"litob-editor-icon-item",onClick:()=>(e=>{""===e.value?i({iconName:void 0}):i({iconName:e.value,markerClassName:e.className})})(e)},""!==e.value?(0,a.createElement)("span",{className:e.className},e.value):(0,a.createElement)("div",{className:"litob-editor-icon-item-blank"},"なし")))))),(0,a.createElement)(s.BaseControl,{label:"マーカーの色",className:"litob-base-control"},(0,a.createElement)(s.ColorPalette,{colors:t,value:c,onChange:e=>i({color:e})})))),""!==m&&(0,a.createElement)("span",{className:"material-symbols-outlined litob-icon"},m),(0,a.createElement)(o.RichText,{tagName:"span",className:"wp-block-lito-marker-text-content",value:n,onChange:e=>i({content:e}),placeholder:"テキストを入力"}))},save:function({attributes:e}){const{content:l,iconName:t,color:s}=e,r=o.useBlockProps.save({className:"marker-text",style:{"--litob-marker-text-color":s}});return(0,a.createElement)("p",{...r},""!==t&&(0,a.createElement)("span",{className:"material-symbols-outlined litob-icon"},t),(0,a.createElement)(o.RichText.Content,{tagName:"span",className:"wp-block-lito-marker-text-content",value:l}))}})}},l={};function t(e){var o=l[e];if(void 0!==o)return o.exports;var s=l[e]={exports:{}};return a[e](s,s.exports,t),s.exports}t.m=a,e=[],t.O=(a,l,o,s)=>{if(!l){var r=1/0;for(c=0;c<e.length;c++){for(var[l,o,s]=e[c],i=!0,n=0;n<l.length;n++)(!1&s||r>=s)&&Object.keys(t.O).every((e=>t.O[e](l[n])))?l.splice(n--,1):(i=!1,s<r&&(r=s));if(i){e.splice(c--,1);var m=o();void 0!==m&&(a=m)}}return a}s=s||0;for(var c=e.length;c>0&&e[c-1][2]>s;c--)e[c]=e[c-1];e[c]=[l,o,s]},t.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),(()=>{var e={826:0,431:0};t.O.j=a=>0===e[a];var a=(a,l)=>{var o,s,[r,i,n]=l,m=0;if(r.some((a=>0!==e[a]))){for(o in i)t.o(i,o)&&(t.m[o]=i[o]);if(n)var c=n(t)}for(a&&a(l);m<r.length;m++)s=r[m],t.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return t.O(c)},l=globalThis.webpackChunkmarker_text=globalThis.webpackChunkmarker_text||[];l.forEach(a.bind(null,0)),l.push=a.bind(null,l.push.bind(l))})();var o=t.O(void 0,[431],(()=>t(440)));o=t.O(o)})();