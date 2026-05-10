import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{within as ee,userEvent as ae,expect as v,fn as re}from"./index-DH-M5T-F.js";import{r as te}from"./index-DzGJhHoF.js";import{a as y}from"./utils-DDt1maD9.js";const n=te.forwardRef(({className:g,label:r,error:a,helperText:t,prefix:b,suffix:f,required:J,inputSize:s="md",id:K,type:Q="text",...X},Y)=>{const l=K??(r?r.toLowerCase().replace(/\s+/g,"-"):void 0),Z={sm:"h-7 text-xs",md:"h-9 text-sm",lg:"h-11 text-[15px]"};return e.jsxs("div",{className:"flex flex-col gap-1.5 w-full",children:[r&&e.jsxs("label",{htmlFor:l,className:"text-[11px] font-semibold text-[#374151] select-none tracking-wide uppercase",children:[r,J&&e.jsx("span",{className:"text-red-500 ml-0.5",children:"*"})]}),e.jsxs("div",{className:"relative flex items-center group",children:[b&&e.jsx("span",{className:y("absolute left-0 flex items-center justify-center font-medium text-[#64748B] pointer-events-none z-10","border-r border-[#E2E8F0] bg-[#F8FAFC] rounded-l-md transition-colors",s==="sm"&&"h-7 px-2.5 text-xs",s==="md"&&"h-9 px-3 text-sm",s==="lg"&&"h-11 px-3.5 text-base",a?"border-red-200":"border-[#E2E8F0]"),children:b}),e.jsx("input",{ref:Y,id:l,type:Q,"aria-invalid":!!a,"aria-describedby":a?`${l}-error`:t?`${l}-helper`:void 0,className:y("w-full rounded-md bg-white text-[#0F172A] placeholder:text-[#94A3B8]","transition-all duration-200 outline-none","border shadow-[0_1px_3px_rgba(15,23,42,0.04)]","focus:shadow-[0_0_0_3px_rgba(50,147,217,0.15),0_1px_3px_rgba(15,23,42,0.04)]",Z[s],b?s==="sm"?"pl-9":s==="lg"?"pl-12":"pl-10":"pl-3.5",f?"pr-16":"pr-3.5",a?"border-red-400 focus:border-red-400 focus:shadow-[0_0_0_3px_rgba(239,68,68,0.12)]":"border-[#E2E8F0] focus:border-[#3293D9]","disabled:bg-[#F8FAFC] disabled:text-[#94A3B8] disabled:cursor-not-allowed disabled:shadow-none",g),...X}),f&&e.jsx("span",{className:"absolute right-0 flex items-center justify-center h-full px-3 text-xs font-medium text-[#64748B] bg-[#F8FAFC] border-l border-[#E2E8F0] rounded-r-md pointer-events-none",children:f})]}),a&&e.jsxs("p",{id:`${l}-error`,className:"flex items-center gap-1 text-xs text-red-600 font-medium",role:"alert",children:[e.jsx("span",{className:"inline-block h-1 w-1 rounded-full bg-red-500 flex-shrink-0"}),a]}),!a&&t&&e.jsx("p",{id:`${l}-helper`,className:"text-xs text-[#94A3B8] leading-relaxed",children:t})]})});n.displayName="Input";n.__docgenInfo={description:"",methods:[],displayName:"Input",props:{label:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"string"},description:""},helperText:{required:!1,tsType:{name:"string"},description:""},prefix:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},suffix:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},required:{required:!1,tsType:{name:"boolean"},description:""},inputSize:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},type:{defaultValue:{value:"'text'",computed:!1},required:!1}}};const ce={title:"Atoms/Input",component:n,tags:["autodocs"],argTypes:{label:{control:"text"},error:{control:"text"},helperText:{control:"text"},prefix:{control:"text"},suffix:{control:"text"},placeholder:{control:"text"},disabled:{control:"boolean"},required:{control:"boolean"},inputSize:{control:"select",options:["sm","md","lg"]},type:{control:"select",options:["text","number","email","password","search"]}},args:{placeholder:"Enter value...",onChange:re()}},o={},c={args:{label:"Company Name",placeholder:"e.g. Acme Corporation"}},i={args:{label:"Email",placeholder:"user@example.com",type:"email",error:"Please enter a valid email address.",defaultValue:"invalid-email"}},d={args:{label:"Amount",prefix:"$",suffix:"USD",type:"number",placeholder:"0.00"}},p={args:{label:"Plan Name",placeholder:"Enter plan name",required:!0}},m={args:{label:"Customer ID",defaultValue:"cust_abc123xyz",disabled:!0}},u={args:{label:"Webhook URL",placeholder:"https://...",helperText:"We will POST invoice events to this URL."}},x={render:()=>e.jsxs("div",{className:"flex flex-col gap-4 max-w-sm",children:[e.jsx(n,{inputSize:"sm",placeholder:"Small input",label:"Small"}),e.jsx(n,{inputSize:"md",placeholder:"Medium input",label:"Medium"}),e.jsx(n,{inputSize:"lg",placeholder:"Large input",label:"Large"})]})},h={play:async({canvasElement:g,args:r})=>{const t=ee(g).getByPlaceholderText("Enter value...");await ae.type(t,"Hello FlexPrice"),v(t).toHaveValue("Hello FlexPrice"),v(r.onChange).toHaveBeenCalled()}};var E,w,N;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:"{}",...(N=(w=o.parameters)==null?void 0:w.docs)==null?void 0:N.source}}};var S,_,F;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    label: 'Company Name',
    placeholder: 'e.g. Acme Corporation'
  }
}`,...(F=(_=c.parameters)==null?void 0:_.docs)==null?void 0:F.source}}};var j,C,T;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    placeholder: 'user@example.com',
    type: 'email',
    error: 'Please enter a valid email address.',
    defaultValue: 'invalid-email'
  }
}`,...(T=(C=i.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};var A,R,q;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    label: 'Amount',
    prefix: '$',
    suffix: 'USD',
    type: 'number',
    placeholder: '0.00'
  }
}`,...(q=(R=d.parameters)==null?void 0:R.docs)==null?void 0:q.source}}};var P,I,W;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    label: 'Plan Name',
    placeholder: 'Enter plan name',
    required: true
  }
}`,...(W=(I=p.parameters)==null?void 0:I.docs)==null?void 0:W.source}}};var L,H,z;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    label: 'Customer ID',
    defaultValue: 'cust_abc123xyz',
    disabled: true
  }
}`,...(z=(H=m.parameters)==null?void 0:H.docs)==null?void 0:z.source}}};var B,D,V;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    label: 'Webhook URL',
    placeholder: 'https://...',
    helperText: 'We will POST invoice events to this URL.'
  }
}`,...(V=(D=u.parameters)==null?void 0:D.docs)==null?void 0:V.source}}};var U,$,k;x.parameters={...x.parameters,docs:{...(U=x.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4 max-w-sm">\r
      <Input inputSize="sm" placeholder="Small input" label="Small" />\r
      <Input inputSize="md" placeholder="Medium input" label="Medium" />\r
      <Input inputSize="lg" placeholder="Large input" label="Large" />\r
    </div>
}`,...(k=($=x.parameters)==null?void 0:$.docs)==null?void 0:k.source}}};var M,O,G;h.parameters={...h.parameters,docs:{...(M=h.parameters)==null?void 0:M.docs,source:{originalSource:`{
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByPlaceholderText('Enter value...');
    await userEvent.type(input, 'Hello FlexPrice');
    expect(input).toHaveValue('Hello FlexPrice');
    expect(args.onChange).toHaveBeenCalled();
  }
}`,...(G=(O=h.parameters)==null?void 0:O.docs)==null?void 0:G.source}}};const ie=["Default","WithLabel","WithError","WithCurrencyPrefix","Required","Disabled","WithHelperText","AllSizes","TypesInAction"];export{x as AllSizes,o as Default,m as Disabled,p as Required,h as TypesInAction,d as WithCurrencyPrefix,i as WithError,u as WithHelperText,c as WithLabel,ie as __namedExportsOrder,ce as default};
