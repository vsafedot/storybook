import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{I as d}from"./InvoiceStatusBadge-CPjUZJfE.js";import"./utils-DDt1maD9.js";import"./Badge-_wGnFmrJ.js";import"./createLucideIcon-Beqop2_w.js";import"./index-DzGJhHoF.js";import"./index-CZtRLH7z.js";import"./formatters-CX9ua-OJ.js";import"./file-text-D3vXlRHz.js";const A={title:"Molecules/InvoiceStatusBadge",component:d,tags:["autodocs"],argTypes:{status:{control:"select",options:["draft","pending","paid","void","overdue"],description:"Invoice status code"},showIcon:{control:"boolean"},size:{control:"select",options:["sm","md"]}},args:{status:"paid",showIcon:!0,size:"md"}},s={},a={render:()=>e.jsx("div",{className:"flex flex-wrap gap-2 items-center",children:["paid","pending","overdue","void","draft"].map(t=>e.jsx(d,{status:t},t))})},r={render:()=>e.jsx("div",{className:"flex flex-wrap gap-2 items-center",children:["paid","pending","overdue","void","draft"].map(t=>e.jsx(d,{status:t,showIcon:!1},t))})},o={render:()=>e.jsxs("table",{className:"w-full text-sm border rounded-lg overflow-hidden",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"bg-gray-50 border-b",children:[e.jsx("th",{className:"px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase",children:"Invoice"}),e.jsx("th",{className:"px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase",children:"Customer"}),e.jsx("th",{className:"px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase",children:"Amount"}),e.jsx("th",{className:"px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase",children:"Status"})]})}),e.jsx("tbody",{children:[{id:"INV-001",customer:"Acme Corp",amount:"$1,200",status:"paid"},{id:"INV-002",customer:"Globex Inc",amount:"$850",status:"pending"},{id:"INV-003",customer:"Initech",amount:"$2,100",status:"void"},{id:"INV-004",customer:"Umbrella Co",amount:"$300",status:"draft"},{id:"INV-005",customer:"Dunder Mifflin",amount:"$4,500",status:"overdue"}].map(t=>e.jsxs("tr",{className:"border-b last:border-0 hover:bg-gray-50",children:[e.jsx("td",{className:"px-4 py-3 font-medium text-blue-600",children:t.id}),e.jsx("td",{className:"px-4 py-3 text-gray-700",children:t.customer}),e.jsx("td",{className:"px-4 py-3 tabular-nums font-medium",children:t.amount}),e.jsx("td",{className:"px-4 py-3",children:e.jsx(d,{status:t.status})})]},t.id))})]})};var c,i,n;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(n=(i=s.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};var m,u,l;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-2 items-center">\r
      {(['paid', 'pending', 'overdue', 'void', 'draft'] as InvoiceStatus[]).map(status => <InvoiceStatusBadge key={status} status={status} />)}\r
    </div>
}`,...(l=(u=a.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};var p,x,f;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-2 items-center">\r
      {(['paid', 'pending', 'overdue', 'void', 'draft'] as InvoiceStatus[]).map(status => <InvoiceStatusBadge key={status} status={status} showIcon={false} />)}\r
    </div>
}`,...(f=(x=r.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var g,h,b;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <table className="w-full text-sm border rounded-lg overflow-hidden">\r
      <thead>\r
        <tr className="bg-gray-50 border-b">\r
          <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase">Invoice</th>\r
          <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase">Customer</th>\r
          <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase">Amount</th>\r
          <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase">Status</th>\r
        </tr>\r
      </thead>\r
      <tbody>\r
        {[{
        id: 'INV-001',
        customer: 'Acme Corp',
        amount: '$1,200',
        status: 'paid' as InvoiceStatus
      }, {
        id: 'INV-002',
        customer: 'Globex Inc',
        amount: '$850',
        status: 'pending' as InvoiceStatus
      }, {
        id: 'INV-003',
        customer: 'Initech',
        amount: '$2,100',
        status: 'void' as InvoiceStatus
      }, {
        id: 'INV-004',
        customer: 'Umbrella Co',
        amount: '$300',
        status: 'draft' as InvoiceStatus
      }, {
        id: 'INV-005',
        customer: 'Dunder Mifflin',
        amount: '$4,500',
        status: 'overdue' as InvoiceStatus
      }].map(row => <tr key={row.id} className="border-b last:border-0 hover:bg-gray-50">\r
            <td className="px-4 py-3 font-medium text-blue-600">{row.id}</td>\r
            <td className="px-4 py-3 text-gray-700">{row.customer}</td>\r
            <td className="px-4 py-3 tabular-nums font-medium">{row.amount}</td>\r
            <td className="px-4 py-3"><InvoiceStatusBadge status={row.status} /></td>\r
          </tr>)}\r
      </tbody>\r
    </table>
}`,...(b=(h=o.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};const C=["Default","AllStatuses","WithoutIcons","InTable"];export{a as AllStatuses,s as Default,o as InTable,r as WithoutIcons,C as __namedExportsOrder,A as default};
