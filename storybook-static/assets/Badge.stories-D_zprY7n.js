import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{B as a,C as I,a as V,b}from"./Badge-_wGnFmrJ.js";import{c as z}from"./createLucideIcon-Beqop2_w.js";import"./index-DzGJhHoF.js";import"./index-CZtRLH7z.js";import"./utils-DDt1maD9.js";/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1",key:"1wp1u1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8",key:"1s80jp"}],["path",{d:"M10 12h4",key:"a56b0p"}]],W=z("archive",M),T={title:"Atoms/Badge",component:a,tags:["autodocs"],argTypes:{variant:{control:"select",options:["success","warning","danger","info","muted","default"],description:"Color scheme for the badge"},size:{control:"select",options:["sm","md"]},dot:{control:"boolean",description:"Show colored dot instead of icon"},children:{control:"text"}},args:{children:"Badge",variant:"default",size:"md"}},r={},s={render:()=>e.jsxs("div",{className:"flex flex-wrap gap-2 items-center",children:[e.jsx(a,{variant:"success",children:"Active"}),e.jsx(a,{variant:"warning",children:"Pending"}),e.jsx(a,{variant:"danger",children:"Void"}),e.jsx(a,{variant:"info",children:"Info"}),e.jsx(a,{variant:"muted",children:"Draft"}),e.jsx(a,{variant:"default",children:"Default"})]})},n={render:()=>e.jsxs("div",{className:"flex flex-wrap gap-2 items-center",children:[e.jsx(a,{variant:"success",dot:!0,children:"Active"}),e.jsx(a,{variant:"warning",dot:!0,children:"Pending"}),e.jsx(a,{variant:"danger",dot:!0,children:"Archived"}),e.jsx(a,{variant:"muted",dot:!0,children:"Draft"})]})},t={render:()=>e.jsxs("div",{className:"flex flex-wrap gap-2 items-center",children:[e.jsx(a,{variant:"success",icon:e.jsx(I,{}),children:"Paid"}),e.jsx(a,{variant:"danger",icon:e.jsx(V,{}),children:"Void"}),e.jsx(a,{variant:"warning",icon:e.jsx(b,{}),children:"Pending"}),e.jsx(a,{variant:"muted",icon:e.jsx(W,{}),children:"Archived"})]})},d={render:()=>e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{className:"text-xs font-semibold text-gray-500 uppercase tracking-wide",children:"Plan Status"}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(a,{variant:"success",dot:!0,children:"Active"}),e.jsx(a,{variant:"muted",dot:!0,children:"Draft"}),e.jsx(a,{variant:"danger",dot:!0,children:"Archived"})]})]})},i={render:()=>e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{className:"text-xs font-semibold text-gray-500 uppercase tracking-wide",children:"Invoice Status"}),e.jsxs("div",{className:"flex gap-2 flex-wrap",children:[e.jsx(a,{variant:"success",children:"Paid"}),e.jsx(a,{variant:"warning",children:"Pending"}),e.jsx(a,{variant:"danger",children:"Overdue"}),e.jsx(a,{variant:"danger",children:"Void"}),e.jsx(a,{variant:"muted",children:"Draft"})]})]})},c={render:()=>e.jsxs("div",{className:"flex gap-2 items-center",children:[e.jsx(a,{variant:"success",size:"sm",children:"Small"}),e.jsx(a,{variant:"success",size:"md",children:"Medium"})]})};var o,l,g;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:"{}",...(g=(l=r.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var m,v,p;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-2 items-center">\r
      <Badge variant="success">Active</Badge>\r
      <Badge variant="warning">Pending</Badge>\r
      <Badge variant="danger">Void</Badge>\r
      <Badge variant="info">Info</Badge>\r
      <Badge variant="muted">Draft</Badge>\r
      <Badge variant="default">Default</Badge>\r
    </div>
}`,...(p=(v=s.parameters)==null?void 0:v.docs)==null?void 0:p.source}}};var u,x,h;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-2 items-center">\r
      <Badge variant="success" dot>Active</Badge>\r
      <Badge variant="warning" dot>Pending</Badge>\r
      <Badge variant="danger" dot>Archived</Badge>\r
      <Badge variant="muted" dot>Draft</Badge>\r
    </div>
}`,...(h=(x=n.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var B,f,j;t.parameters={...t.parameters,docs:{...(B=t.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-2 items-center">\r
      <Badge variant="success" icon={<CheckCircle />}>Paid</Badge>\r
      <Badge variant="danger" icon={<XCircle />}>Void</Badge>\r
      <Badge variant="warning" icon={<Clock />}>Pending</Badge>\r
      <Badge variant="muted" icon={<Archive />}>Archived</Badge>\r
    </div>
}`,...(j=(f=t.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};var w,N,S;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div className="space-y-2">\r
      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Plan Status</p>\r
      <div className="flex gap-2">\r
        <Badge variant="success" dot>Active</Badge>\r
        <Badge variant="muted" dot>Draft</Badge>\r
        <Badge variant="danger" dot>Archived</Badge>\r
      </div>\r
    </div>
}`,...(S=(N=d.parameters)==null?void 0:N.docs)==null?void 0:S.source}}};var A,P,D;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <div className="space-y-2">\r
      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Invoice Status</p>\r
      <div className="flex gap-2 flex-wrap">\r
        <Badge variant="success">Paid</Badge>\r
        <Badge variant="warning">Pending</Badge>\r
        <Badge variant="danger">Overdue</Badge>\r
        <Badge variant="danger">Void</Badge>\r
        <Badge variant="muted">Draft</Badge>\r
      </div>\r
    </div>
}`,...(D=(P=i.parameters)==null?void 0:P.docs)==null?void 0:D.source}}};var y,k,C;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div className="flex gap-2 items-center">\r
      <Badge variant="success" size="sm">Small</Badge>\r
      <Badge variant="success" size="md">Medium</Badge>\r
    </div>
}`,...(C=(k=c.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};const q=["Default","AllVariants","WithDots","WithIcons","PlanStatuses","InvoiceStatuses","Sizes"];export{s as AllVariants,r as Default,i as InvoiceStatuses,d as PlanStatuses,c as Sizes,n as WithDots,t as WithIcons,q as __namedExportsOrder,T as default};
