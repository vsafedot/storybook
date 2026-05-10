import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{fn as a}from"./index-DH-M5T-F.js";import{a as t}from"./utils-DDt1maD9.js";import{B as h}from"./Button-BNfziihU.js";import{F as m}from"./file-text-D3vXlRHz.js";import{W as G,C as H}from"./wallet-CUzMpySZ.js";import{U as J,L as K}from"./users-DnOqi2ub.js";import"./index-DzGJhHoF.js";import"./index-CzTo90jY.js";import"./index-CZtRLH7z.js";import"./loader-circle-Cw7x0mwg.js";import"./createLucideIcon-Beqop2_w.js";const g=({icon:f,heading:U,subtext:x,ctaLabel:u,onCtaClick:W,secondaryCtaLabel:p,onSecondaryCtaClick:z,variant:e="full-page",className:C})=>{const b=r.jsxs("div",{className:t("flex flex-col items-center justify-center text-center",e==="full-page"&&"py-24 px-8",e==="card"&&"py-14 px-8",e==="inline"&&"py-8 px-4"),children:[f&&r.jsx("div",{className:t("relative flex items-center justify-center rounded-2xl mb-6","before:absolute before:inset-0 before:rounded-2xl before:opacity-50",e==="full-page"&&"h-20 w-20",e==="card"&&"h-16 w-16",e==="inline"&&"h-12 w-12"),style:{background:"linear-gradient(135deg, #F1F5F9 0%, #E2E8F0 100%)",boxShadow:"0 2px 12px rgba(15,23,42,0.08), 0 0 0 1px rgba(15,23,42,0.04)"},children:r.jsx("span",{className:t("text-[#94A3B8] [&>svg]:h-1/2 [&>svg]:w-1/2 flex items-center justify-center","[&>svg]:h-8 [&>svg]:w-8",e==="card"&&"[&>svg]:h-7 [&>svg]:w-7",e==="inline"&&"[&>svg]:h-5 [&>svg]:w-5"),children:f})}),r.jsx("h2",{className:t("font-bold text-[#1E293B] leading-tight",e==="full-page"&&"text-[22px]",e==="card"&&"text-lg",e==="inline"&&"text-base"),children:U}),x&&r.jsx("p",{className:t("mt-2 text-[#64748B] max-w-sm leading-relaxed",e==="full-page"&&"text-[14px]",(e==="card"||e==="inline")&&"text-[13px]"),children:x}),(u||p)&&r.jsxs("div",{className:"mt-7 flex items-center gap-3 flex-wrap justify-center",children:[u&&r.jsx(h,{variant:"primary",size:e==="inline"?"sm":"md",onClick:W,children:u}),p&&r.jsx(h,{variant:"secondary",size:e==="inline"?"sm":"md",onClick:z,children:p})]})]});return e==="card"?r.jsx("div",{className:t("rounded-xl border border-dashed border-[#CBD5E1] bg-white","hover:border-[#93C5FD] transition-colors duration-200",C),children:b}):r.jsx("div",{className:t(C),children:b})};g.displayName="EmptyState";g.__docgenInfo={description:"",methods:[],displayName:"EmptyState",props:{icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},heading:{required:!0,tsType:{name:"string"},description:""},subtext:{required:!1,tsType:{name:"string"},description:""},ctaLabel:{required:!1,tsType:{name:"string"},description:""},onCtaClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},secondaryCtaLabel:{required:!1,tsType:{name:"string"},description:""},onSecondaryCtaClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},variant:{required:!1,tsType:{name:"union",raw:"'full-page' | 'card' | 'inline'",elements:[{name:"literal",value:"'full-page'"},{name:"literal",value:"'card'"},{name:"literal",value:"'inline'"}]},description:"",defaultValue:{value:"'full-page'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const oe={title:"Organisms/EmptyState",component:g,tags:["autodocs"],argTypes:{heading:{control:"text"},subtext:{control:"text"},ctaLabel:{control:"text"},secondaryCtaLabel:{control:"text"},variant:{control:"select",options:["full-page","card","inline"]}}},s={args:{icon:r.jsx(m,{}),heading:"No invoices yet",subtext:"Once your customers are billed, invoices will appear here.",ctaLabel:"Create Invoice",onCtaClick:a(),variant:"full-page"}},n={args:{icon:r.jsx(J,{}),heading:"No customers found",subtext:"Add customers manually or import them from a CSV file.",ctaLabel:"Add Customer",secondaryCtaLabel:"Import CSV",onCtaClick:a(),onSecondaryCtaClick:a(),variant:"full-page"}},o={args:{icon:r.jsx(K,{}),heading:"No pricing plans",subtext:"Create your first plan to start offering subscriptions.",ctaLabel:"Create Plan",onCtaClick:a(),variant:"full-page"}},i={args:{icon:r.jsx(H,{}),heading:"No active subscriptions",subtext:"Assign a plan to a customer to create a subscription.",ctaLabel:"New Subscription",onCtaClick:a(),variant:"card"}},c={args:{icon:r.jsx(G,{}),heading:"No credit ledger entries",subtext:"Credits will appear here once issued to customers.",variant:"inline"}},l={args:{icon:r.jsx(m,{}),heading:"No results",subtext:"Try adjusting your filters to find what you're looking for.",ctaLabel:"Clear Filters",onCtaClick:a(),variant:"card"}},d={args:{icon:r.jsx(m,{}),heading:"Search returned no results",subtext:"No invoices match your current search query.",variant:"inline"}};var y,N,v;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    icon: <FileText />,
    heading: 'No invoices yet',
    subtext: 'Once your customers are billed, invoices will appear here.',
    ctaLabel: 'Create Invoice',
    onCtaClick: fn(),
    variant: 'full-page'
  }
}`,...(v=(N=s.parameters)==null?void 0:N.docs)==null?void 0:v.source}}};var j,S,w;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    icon: <Users />,
    heading: 'No customers found',
    subtext: 'Add customers manually or import them from a CSV file.',
    ctaLabel: 'Add Customer',
    secondaryCtaLabel: 'Import CSV',
    onCtaClick: fn(),
    onSecondaryCtaClick: fn(),
    variant: 'full-page'
  }
}`,...(w=(S=n.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var k,T,L;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    icon: <LayoutGrid />,
    heading: 'No pricing plans',
    subtext: 'Create your first plan to start offering subscriptions.',
    ctaLabel: 'Create Plan',
    onCtaClick: fn(),
    variant: 'full-page'
  }
}`,...(L=(T=o.parameters)==null?void 0:T.docs)==null?void 0:L.source}}};var F,q,E;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    icon: <CreditCard />,
    heading: 'No active subscriptions',
    subtext: 'Assign a plan to a customer to create a subscription.',
    ctaLabel: 'New Subscription',
    onCtaClick: fn(),
    variant: 'card'
  }
}`,...(E=(q=i.parameters)==null?void 0:q.docs)==null?void 0:E.source}}};var A,V,B;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    icon: <Wallet />,
    heading: 'No credit ledger entries',
    subtext: 'Credits will appear here once issued to customers.',
    variant: 'inline'
  }
}`,...(B=(V=c.parameters)==null?void 0:V.docs)==null?void 0:B.source}}};var I,R,D;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    icon: <FileText />,
    heading: 'No results',
    subtext: 'Try adjusting your filters to find what you\\'re looking for.',
    ctaLabel: 'Clear Filters',
    onCtaClick: fn(),
    variant: 'card'
  }
}`,...(D=(R=l.parameters)==null?void 0:R.docs)==null?void 0:D.source}}};var O,P,_;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    icon: <FileText />,
    heading: 'Search returned no results',
    subtext: 'No invoices match your current search query.',
    variant: 'inline'
  }
}`,...(_=(P=d.parameters)==null?void 0:P.docs)==null?void 0:_.source}}};const ie=["Default","NoCustomers","NoPlans","NoSubscriptions","NoCredits","CardVariant","NoCTA"];export{l as CardVariant,s as Default,d as NoCTA,c as NoCredits,n as NoCustomers,o as NoPlans,i as NoSubscriptions,ie as __namedExportsOrder,oe as default};
