import{r,j as t}from"./index-447c3d23.js";const n="_container_vfxe4_1",m="_listHeader_vfxe4_23",d="_itemHeader_vfxe4_51",o="_itemHeaderLast_vfxe4_77",x="_list_vfxe4_23",_="_item_vfxe4_51",h="_itemLast_vfxe4_121",f="_left_vfxe4_163",N="_middle_vfxe4_169",$="_itemLeft_vfxe4_213",u="_itemRight_vfxe4_219",e={container:n,listHeader:m,itemHeader:d,itemHeaderLast:o,list:x,item:_,itemLast:h,left:f,middle:N,itemLeft:$,itemRight:u},j="https://api.exchangerate.host/latest?base=PLN",c=async()=>{const s=JSON.parse(localStorage.getItem("data")||null),l=new Date().getTime();if(s&&l-s.timestamp<36e5)return s.data.rates;try{const a=await(await fetch(j)).json(),i=new Date().getTime();return localStorage.setItem("data",JSON.stringify({data:a,timestamp:i})),a.rates}catch(a){console.error("Error:",a)}},L=()=>{const[s,l]=r.useState(null);return r.useEffect(()=>{c().then(i=>{l(i)});const a=setInterval(()=>{c().then(i=>l(i))},36e5);return()=>{clearInterval(a)}},[]),t.jsxs("div",{className:e.container,children:[t.jsxs("ul",{className:`${e.listHeader}`,children:[t.jsx("li",{className:`${e.itemHeader} ${e.left}`,children:"Currency"}),t.jsx("li",{className:`${e.itemHeader} ${e.middle}`,children:"Purchase"}),t.jsx("li",{className:`${e.itemHeader} ${e.itemHeaderLast}`,children:"Sale"})]}),t.jsxs("ul",{className:e.list,children:[t.jsx("li",{className:`${e.item} ${e.itemLeft}`,children:"USD"}),t.jsx("li",{className:`${e.item} ${e.itemRight}`,children:s?(1*.999908/s.USD).toFixed(4):"Not loaded"}),t.jsx("li",{className:`${e.item} ${e.itemLast}`,children:s?(1*1.000913/s.USD).toFixed(4):"Not loaded"})]}),t.jsxs("ul",{className:e.list,children:[t.jsx("li",{className:`${e.item} ${e.itemLeft}`,children:"EUR"}),t.jsx("li",{className:`${e.item} ${e.itemRight}`,children:s?(1*.999908/s.EUR).toFixed(4):"Not loaded"}),t.jsx("li",{className:`${e.item} ${e.itemLast}`,children:s?(1*1.000913/s.EUR).toFixed(4):"Not loaded"})]})]})};export{L as default};
