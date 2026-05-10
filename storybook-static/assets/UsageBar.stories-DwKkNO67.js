import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{a as l}from"./utils-DDt1maD9.js";import{g as z}from"./formatters-CX9ua-OJ.js";function f(a){return a>=1e6?`${(a/1e6).toFixed(1)}M`:a>=1e3?`${(a/1e3).toFixed(1)}K`:a.toLocaleString()}const s=({label:a,used:p,total:r,unit:x,showPercentage:k=!1,size:F="md",className:L})=>{const t=r===0?0:Math.min(100,Math.round(p/r*100)),b=z(p,r),g=t>=75&&t<90,n=t>=90,$=n?"from-orange-500 to-red-500":g?"from-yellow-400 to-amber-500":"from-sky-400 to-blue-500",E=F==="sm"?"h-1.5":"h-2";return e.jsxs("div",{className:l("flex flex-col gap-2.5",L),children:[e.jsxs("div",{className:"flex items-center justify-between gap-2",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-[13px] font-semibold text-[#1E293B]",children:a}),n&&e.jsx("span",{className:"inline-flex items-center rounded-full bg-red-50 px-1.5 py-0.5 text-[10px] font-bold text-red-600 ring-1 ring-red-200/60 animate-pulse",children:"LIMIT"}),g&&!n&&e.jsx("span",{className:"inline-flex items-center rounded-full bg-amber-50 px-1.5 py-0.5 text-[10px] font-bold text-amber-600 ring-1 ring-amber-200/60",children:"HIGH"})]}),e.jsxs("div",{className:"flex items-baseline gap-1",children:[e.jsx("span",{className:"text-[13px] font-bold text-[#0F172A] tabular",children:f(p)}),e.jsxs("span",{className:"text-[11px] text-[#94A3B8]",children:["/ ",f(r),x&&` ${x}`]}),k&&e.jsx("span",{className:l("ml-1 text-[11px] font-semibold",n?"text-red-600":g?"text-amber-600":"text-slate-500"),children:b})]})]}),e.jsx("div",{className:l("w-full rounded-full bg-[#F1F5F9] overflow-hidden",E),role:"progressbar","aria-valuenow":t,"aria-valuemin":0,"aria-valuemax":100,"aria-label":`${a}: ${b} used`,children:e.jsx("div",{className:l("h-full rounded-full bg-gradient-to-r transition-all duration-700 ease-out",$),style:{width:`${t}%`}})})]})};s.displayName="UsageBar";s.__docgenInfo={description:"",methods:[],displayName:"UsageBar",props:{label:{required:!0,tsType:{name:"string"},description:""},used:{required:!0,tsType:{name:"number"},description:""},total:{required:!0,tsType:{name:"number"},description:""},unit:{required:!1,tsType:{name:"string"},description:""},showPercentage:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const V={title:"Molecules/UsageBar",component:s,tags:["autodocs"],argTypes:{label:{control:"text"},used:{control:"number"},total:{control:"number"},unit:{control:"text"},showPercentage:{control:"boolean"},size:{control:"select",options:["sm","md"]}},args:{label:"API Calls",used:5200,total:1e4,unit:"requests",showPercentage:!0}},o={},i={args:{label:"API Calls",used:8200,total:1e4,unit:"requests",showPercentage:!0}},c={args:{label:"API Calls",used:1e4,total:1e4,unit:"requests",showPercentage:!0}},u={args:{label:"Storage",used:45,total:100,unit:"GB",showPercentage:!0}},d={render:()=>e.jsxs("div",{className:"max-w-md space-y-5",children:[e.jsx(s,{label:"API Calls",used:8200,total:1e4,unit:"req/mo",showPercentage:!0}),e.jsx(s,{label:"Data Storage",used:45,total:100,unit:"GB",showPercentage:!0}),e.jsx(s,{label:"Events Tracked",used:12e5,total:5e6,unit:"events",showPercentage:!0}),e.jsx(s,{label:"Webhooks",used:9800,total:1e4,unit:"deliveries",showPercentage:!0})]})},m={args:{size:"sm",label:"Storage",used:60,total:100,unit:"GB"}};var h,w,P;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:"{}",...(P=(w=o.parameters)==null?void 0:w.docs)==null?void 0:P.source}}};var v,j,N;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    label: 'API Calls',
    used: 8200,
    total: 10000,
    unit: 'requests',
    showPercentage: true
  }
}`,...(N=(j=i.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};var y,S,B;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: 'API Calls',
    used: 10000,
    total: 10000,
    unit: 'requests',
    showPercentage: true
  }
}`,...(B=(S=c.parameters)==null?void 0:S.docs)==null?void 0:B.source}}};var q,T,A;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    label: 'Storage',
    used: 45,
    total: 100,
    unit: 'GB',
    showPercentage: true
  }
}`,...(A=(T=u.parameters)==null?void 0:T.docs)==null?void 0:A.source}}};var I,U,M;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <div className="max-w-md space-y-5">\r
      <UsageBar label="API Calls" used={8200} total={10000} unit="req/mo" showPercentage />\r
      <UsageBar label="Data Storage" used={45} total={100} unit="GB" showPercentage />\r
      <UsageBar label="Events Tracked" used={1200000} total={5000000} unit="events" showPercentage />\r
      <UsageBar label="Webhooks" used={9800} total={10000} unit="deliveries" showPercentage />\r
    </div>
}`,...(M=(U=d.parameters)==null?void 0:U.docs)==null?void 0:M.source}}};var G,C,D;m.parameters={...m.parameters,docs:{...(G=m.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    label: 'Storage',
    used: 60,
    total: 100,
    unit: 'GB'
  }
}`,...(D=(C=m.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};const K=["Default","NearLimit","AtLimit","DataStorage","MultipleMeters","Small"];export{c as AtLimit,u as DataStorage,o as Default,d as MultipleMeters,i as NearLimit,m as Small,K as __namedExportsOrder,V as default};
