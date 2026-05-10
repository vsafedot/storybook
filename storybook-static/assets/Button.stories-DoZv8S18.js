import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{within as A,userEvent as H,expect as O,fn as R}from"./index-DH-M5T-F.js";import{B as r}from"./Button-BNfziihU.js";import{c as m}from"./createLucideIcon-Beqop2_w.js";import"./index-DzGJhHoF.js";import"./index-CzTo90jY.js";import"./index-CZtRLH7z.js";import"./utils-DDt1maD9.js";import"./loader-circle-Cw7x0mwg.js";/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],G=m("download",T);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],q=m("plus",$);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],J=m("trash-2",F),ne={title:"Atoms/Button",component:r,tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","secondary","ghost","danger","outline"],description:"Visual style of the button"},size:{control:"select",options:["sm","md","lg"],description:"Height and padding of the button"},isLoading:{control:"boolean",description:"Shows spinner and disables button"},disabled:{control:"boolean",description:"Disables interaction"},children:{control:"text",description:"Button label"}},args:{onClick:R(),children:"Button"}},t={args:{variant:"primary",size:"md"},play:async({canvasElement:a,args:P})=>{const W=A(a).getByRole("button");await H.click(W),O(P.onClick).toHaveBeenCalledOnce()}},n={render:a=>e.jsxs("div",{className:"flex flex-wrap gap-3 items-center",children:[e.jsx(r,{...a,variant:"primary",children:"Primary"}),e.jsx(r,{...a,variant:"secondary",children:"Secondary"}),e.jsx(r,{...a,variant:"ghost",children:"Ghost"}),e.jsx(r,{...a,variant:"danger",children:"Danger"}),e.jsx(r,{...a,variant:"outline",children:"Outline"})]})},s={render:a=>e.jsxs("div",{className:"flex flex-wrap gap-3 items-center",children:[e.jsx(r,{...a,size:"sm",children:"Small"}),e.jsx(r,{...a,size:"md",children:"Medium"}),e.jsx(r,{...a,size:"lg",children:"Large"})]})},o={args:{isLoading:!0,children:"Saving..."}},c={args:{disabled:!0}},i={args:{leftIcon:e.jsx(q,{className:"h-4 w-4"}),children:"Create Plan"}},l={args:{rightIcon:e.jsx(G,{className:"h-4 w-4"}),children:"Export CSV"}},d={args:{variant:"danger",leftIcon:e.jsx(J,{className:"h-4 w-4"}),children:"Delete Customer"}};var p,u,g;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'md'
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await userEvent.click(button);
    expect(args.onClick).toHaveBeenCalledOnce();
  }
}`,...(g=(u=t.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var h,v,x;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => <div className="flex flex-wrap gap-3 items-center">\r
      <Button {...args} variant="primary">Primary</Button>\r
      <Button {...args} variant="secondary">Secondary</Button>\r
      <Button {...args} variant="ghost">Ghost</Button>\r
      <Button {...args} variant="danger">Danger</Button>\r
      <Button {...args} variant="outline">Outline</Button>\r
    </div>
}`,...(x=(v=n.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var y,f,B;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => <div className="flex flex-wrap gap-3 items-center">\r
      <Button {...args} size="sm">Small</Button>\r
      <Button {...args} size="md">Medium</Button>\r
      <Button {...args} size="lg">Large</Button>\r
    </div>
}`,...(B=(f=s.parameters)==null?void 0:f.docs)==null?void 0:B.source}}};var b,w,S;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    isLoading: true,
    children: 'Saving...'
  }
}`,...(S=(w=o.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var j,k,D;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(D=(k=c.parameters)==null?void 0:k.docs)==null?void 0:D.source}}};var I,N,z;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    leftIcon: <Plus className="h-4 w-4" />,
    children: 'Create Plan'
  }
}`,...(z=(N=i.parameters)==null?void 0:N.docs)==null?void 0:z.source}}};var C,M,L;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    rightIcon: <Download className="h-4 w-4" />,
    children: 'Export CSV'
  }
}`,...(L=(M=l.parameters)==null?void 0:M.docs)==null?void 0:L.source}}};var E,V,_;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    variant: 'danger',
    leftIcon: <Trash2 className="h-4 w-4" />,
    children: 'Delete Customer'
  }
}`,...(_=(V=d.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};const se=["Default","AllVariants","AllSizes","Loading","Disabled","WithLeftIcon","WithRightIcon","DangerWithIcon"];export{s as AllSizes,n as AllVariants,d as DangerWithIcon,t as Default,c as Disabled,o as Loading,i as WithLeftIcon,l as WithRightIcon,se as __namedExportsOrder,ne as default};
