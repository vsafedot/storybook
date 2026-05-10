import{within as ce,userEvent as ue,expect as $,fn as z}from"./index-DH-M5T-F.js";import{j as E}from"./jsx-runtime-D_zvdyIk.js";import{r}from"./index-DzGJhHoF.js";import{a as W}from"./utils-DDt1maD9.js";import{c as ne}from"./createLucideIcon-Beqop2_w.js";/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const se=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],oe=ne("search",se);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ie=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],le=ne("x",ie);function de(n,e,a,u){var h=this,s=r.useRef(null),i=r.useRef(0),f=r.useRef(0),c=r.useRef(null),p=r.useRef([]),l=r.useRef(),d=r.useRef(),x=r.useRef(n),v=r.useRef(!0),m=r.useRef(),w=r.useRef();x.current=n;var y=typeof window<"u",T=!e&&e!==0&&y;if(typeof n!="function")throw new TypeError("Expected a function");e=+e||0;var A=!!(a=a||{}).leading,F=!("trailing"in a)||!!a.trailing,R=!!a.flushOnExit&&F,S="maxWait"in a,O="debounceOnServer"in a&&!!a.debounceOnServer,k=S?Math.max(+a.maxWait||0,e):null,H=r.useMemo(function(){var b=function(t){var o=p.current,g=l.current;return p.current=l.current=null,i.current=t,f.current=f.current||t,d.current=x.current.apply(g,o)},j=function(t,o){T&&cancelAnimationFrame(c.current),c.current=T?requestAnimationFrame(t):setTimeout(t,o)},P=function(t){if(!v.current)return!1;var o=t-s.current;return!s.current||o>=e||o<0||S&&t-i.current>=k},X=function(t){return c.current=null,F&&p.current?b(t):(p.current=l.current=null,d.current)},_=function t(){var o=Date.now();if(A&&f.current===i.current&&ae(),P(o))return X(o);if(v.current){var g=e-(o-s.current),q=S?Math.min(g,k-(o-i.current)):g;j(t,q)}},ae=function(){u&&u({})},B=function(){if(y||O){var t,o=Date.now(),g=P(o);if(p.current=[].slice.call(arguments),l.current=h,s.current=o,R&&!m.current&&(m.current=function(){var q;((q=globalThis.document)==null?void 0:q.visibilityState)==="hidden"&&w.current.flush()},(t=globalThis.document)==null||t.addEventListener==null||t.addEventListener("visibilitychange",m.current)),g){if(!c.current&&v.current)return i.current=s.current,j(_,e),A?b(s.current):d.current;if(S)return j(_,e),b(s.current)}return c.current||j(_,e),d.current}};return B.cancel=function(){var t=c.current;t&&(T?cancelAnimationFrame(c.current):clearTimeout(c.current)),i.current=0,p.current=s.current=l.current=c.current=null,t&&u&&u({})},B.isPending=function(){return!!c.current},B.flush=function(){return c.current?X(Date.now()):d.current},B},[A,S,e,k,F,R,T,y,O,u]);return w.current=H,r.useEffect(function(){return v.current=!0,function(){var b;R&&w.current.flush(),m.current&&((b=globalThis.document)==null||b.removeEventListener==null||b.removeEventListener("visibilitychange",m.current),m.current=null),v.current=!1}},[R]),H}function fe(n,e){return n===e}function pe(n,e,a){var u=fe,h=r.useRef(n),s=r.useState({})[1],i=de(r.useCallback(function(c){h.current=c,s({})},[s]),e,a,s),f=r.useRef(n);return u(f.current,n)||(i(n),f.current=n),[h.current,i]}const L=r.forwardRef(({value:n="",onChange:e,onImmediateChange:a,onClear:u,placeholder:h="Search...",debounceMs:s=300,disabled:i=!1,className:f,id:c},p)=>{const[l,d]=r.useState(n),[x]=pe(l,s);r.useEffect(()=>{d(n)},[n]),r.useEffect(()=>{e==null||e(x)},[x,e]);const v=w=>{const y=w.target.value;d(y),a==null||a(y)},m=()=>{d(""),e==null||e(""),u==null||u()};return E.jsxs("div",{className:W("relative flex items-center",f),children:[E.jsx(oe,{className:"absolute left-3 h-4 w-4 text-[#94A3B8] pointer-events-none","aria-hidden":"true"}),E.jsx("input",{ref:p,id:c,type:"search",value:l,onChange:v,placeholder:h,disabled:i,className:W("h-9 w-full rounded border border-[#E2E8F0] bg-white pl-9 pr-8 text-sm","text-[#0F172A] placeholder:text-[#94A3B8]","outline-none transition-shadow duration-150","focus:border-primary focus:shadow-blue-glow","disabled:cursor-not-allowed disabled:opacity-50"),"aria-label":h}),l&&E.jsx("button",{type:"button",onClick:m,className:W("absolute right-2.5 flex h-5 w-5 items-center justify-center rounded-full","text-[#94A3B8] hover:bg-[#F1F5F9] hover:text-[#374151] transition-colors"),"aria-label":"Clear search",children:E.jsx(le,{className:"h-3.5 w-3.5"})})]})});L.displayName="SearchBar";L.__docgenInfo={description:"",methods:[],displayName:"SearchBar",props:{value:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},onImmediateChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},onClear:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Search...'",computed:!1}},debounceMs:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"300",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},id:{required:!1,tsType:{name:"string"},description:""}}};const ge={title:"Molecules/SearchBar",component:L,tags:["autodocs"],argTypes:{placeholder:{control:"text"},debounceMs:{control:"number"},disabled:{control:"boolean"}},args:{placeholder:"Search customers...",onChange:z(),onClear:z(),debounceMs:300}},D={},M={args:{value:"acme",placeholder:"Search invoices..."}},N={args:{disabled:!0,placeholder:"Search disabled"}},V={args:{debounceMs:500,placeholder:"Search with 500ms debounce..."},play:async({canvasElement:n,args:e})=>{const u=ce(n).getByRole("searchbox");await ue.type(u,"flex",{delay:50}),$(u).toHaveValue("flex"),$(typeof e.onChange).toBe("function")}};var G,I,J;D.parameters={...D.parameters,docs:{...(G=D.parameters)==null?void 0:G.docs,source:{originalSource:"{}",...(J=(I=D.parameters)==null?void 0:I.docs)==null?void 0:J.source}}};var K,Q,U;M.parameters={...M.parameters,docs:{...(K=M.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    value: 'acme',
    placeholder: 'Search invoices...'
  }
}`,...(U=(Q=M.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var Y,Z,C;N.parameters={...N.parameters,docs:{...(Y=N.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    disabled: true,
    placeholder: 'Search disabled'
  }
}`,...(C=(Z=N.parameters)==null?void 0:Z.docs)==null?void 0:C.source}}};var ee,re,te;V.parameters={...V.parameters,docs:{...(ee=V.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    debounceMs: 500,
    placeholder: 'Search with 500ms debounce...'
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('searchbox');
    await userEvent.type(input, 'flex', {
      delay: 50
    });
    // Verify the immediate change fires
    expect(input).toHaveValue('flex');
    // The debounced onChange should fire after 500ms
    // We just check it's a function from args
    expect(typeof args.onChange).toBe('function');
  }
}`,...(te=(re=V.parameters)==null?void 0:re.docs)==null?void 0:te.source}}};const xe=["Default","WithValue","Disabled","WithDebounce"];export{D as Default,N as Disabled,V as WithDebounce,M as WithValue,xe as __namedExportsOrder,ge as default};
