import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{a as S}from"./utils-DDt1maD9.js";import{L as z}from"./loader-circle-Cw7x0mwg.js";import"./createLucideIcon-Beqop2_w.js";import"./index-DzGJhHoF.js";const w={sm:"h-4 w-4",md:"h-6 w-6",lg:"h-10 w-10"},s=({size:y="md",fullPage:j=!1,label:a="Loading...",className:b})=>{const i=e.jsx(z,{className:S("animate-spin text-primary",w[y],b),"aria-hidden":"true"});return j?e.jsxs("div",{className:"fixed inset-0 z-50 flex flex-col items-center justify-center gap-3 bg-white/80 backdrop-blur-sm",role:"status","aria-label":a,children:[i,e.jsx("span",{className:"text-sm text-[#64748B]",children:a})]}):e.jsxs("span",{role:"status","aria-label":a,className:"inline-flex",children:[i,e.jsx("span",{className:"sr-only",children:a})]})};s.displayName="Spinner";s.__docgenInfo={description:"",methods:[],displayName:"Spinner",props:{size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},fullPage:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Loading...'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const A={title:"Atoms/Spinner",component:s,tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"]},fullPage:{control:"boolean"},label:{control:"text"}},args:{size:"md",label:"Loading..."}},r={},t={render:()=>e.jsxs("div",{className:"flex items-center gap-6 p-4",children:[e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(s,{size:"sm"}),e.jsx("span",{className:"text-xs text-gray-500",children:"Small"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(s,{size:"md"}),e.jsx("span",{className:"text-xs text-gray-500",children:"Medium"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(s,{size:"lg"}),e.jsx("span",{className:"text-xs text-gray-500",children:"Large"})]})]})},n={render:()=>e.jsx("div",{className:"flex gap-3 p-4",children:e.jsxs("button",{className:"inline-flex items-center gap-2 h-9 px-4 text-sm font-medium rounded bg-primary text-white opacity-80 cursor-not-allowed",children:[e.jsx(s,{size:"sm"}),"Creating plan..."]})})},l={args:{fullPage:!0,label:"Loading dashboard..."},parameters:{layout:"fullscreen"}};var o,c,m;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:"{}",...(m=(c=r.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var d,p,x;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-6 p-4">\r
      <div className="flex flex-col items-center gap-2">\r
        <Spinner size="sm" />\r
        <span className="text-xs text-gray-500">Small</span>\r
      </div>\r
      <div className="flex flex-col items-center gap-2">\r
        <Spinner size="md" />\r
        <span className="text-xs text-gray-500">Medium</span>\r
      </div>\r
      <div className="flex flex-col items-center gap-2">\r
        <Spinner size="lg" />\r
        <span className="text-xs text-gray-500">Large</span>\r
      </div>\r
    </div>
}`,...(x=(p=t.parameters)==null?void 0:p.docs)==null?void 0:x.source}}};var u,g,f;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div className="flex gap-3 p-4">\r
      <button className="inline-flex items-center gap-2 h-9 px-4 text-sm font-medium rounded bg-primary text-white opacity-80 cursor-not-allowed">\r
        <Spinner size="sm" />\r
        Creating plan...\r
      </button>\r
    </div>
}`,...(f=(g=n.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var h,N,v;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    fullPage: true,
    label: 'Loading dashboard...'
  },
  parameters: {
    layout: 'fullscreen'
  }
}`,...(v=(N=l.parameters)==null?void 0:N.docs)==null?void 0:v.source}}};const B=["Default","AllSizes","WithinButton","FullPage"];export{t as AllSizes,r as Default,l as FullPage,n as WithinButton,B as __namedExportsOrder,A as default};
