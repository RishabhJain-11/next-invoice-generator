"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, ChevronDown, Info, Plus } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function CreateInvoice() {
  const [items, setItems] = useState([
    { id: 1, description: "Logo Design", qty: 1, cost: 1500, tax: "Sales 5%" },
    { id: 2, description: "Brand Guidelines", qty: 1, cost: 3000, tax: "Sales 5%" },
  ])

  const [invoiceData, setInvoiceData] = useState({
    invoiceNumber: "003",
    poNumber: "INV1B1223002",
    projectDetail: "Logo and Brand Guideline",
    notes: "",
    issuedDate: "2023-01-17",
    dueDate: "2023-01-20",
  })

  const handleInputChange = (field, value) => {
    setInvoiceData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleItemChange = (id, field, value) => {
    setItems((prevItems) => prevItems.map((item) => (item.id === id ? { ...item, [field]: value } : item)))
  }

  return (
    <div className="flex min-h-screen bg-gray-50/50">
      {/* Left Sidebar */}
      <div className="w-64 border-r bg-white p-4">
        <div className="flex items-center gap-2 pb-4">
          <Avatar className="h-8 w-8">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>ON</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <p className="text-sm font-medium">Rishabh Jain</p>
            <p className="text-xs text-muted-foreground">Admin Manager</p>
          </div>
          <ChevronDown className="h-4 w-4" />
        </div>

        <nav className="space-y-2">
          <div className="px-2 py-1 text-xs font-semibold text-muted-foreground">MAIN</div>
          <Button variant="ghost" className="w-full justify-start gap-2">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeWidth="2" />
            </svg>
            Launchpad
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-2">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                strokeWidth="2"
              />
            </svg>
            Dashboard
            <span className="ml-auto rounded bg-primary/10 px-1 text-xs font-medium text-primary">4</span>
          </Button>

          <div className="px-2 py-1 text-xs font-semibold text-muted-foreground">SALES & PAYMENT</div>
          <Button variant="ghost" className="w-full justify-start gap-2">
            Estimates
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-2">
            Invoices
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-2">
            Payment Setup
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-2">
            Products & Services
          </Button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        <header className="flex h-16 items-center justify-between border-b bg-white px-4">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <h1 className="text-lg font-semibold">Create Invoice</h1>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost">Save to Draft</Button>
            <Button>Save and Continue</Button>
          </div>
        </header>

        <div className="flex gap-6 p-6">
          <div className="flex-1 space-y-6">
            {/* Client Selection */}
            <div className="rounded-lg border bg-white p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  10
                </div>
                <div>
                  <h3 className="font-medium">10am Creative</h3>
                  <p className="text-sm text-muted-foreground">East Java, Indonesia 1845</p>
                </div>
                <ChevronDown className="ml-auto h-4 w-4" />
              </div>
            </div>

            {/* Invoice Details */}
            <div className="rounded-lg border bg-white p-6">
              <h3 className="mb-4 text-lg font-medium">Invoice</h3>

              <div className="grid gap-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Invoice Number</Label>
                    <div className="flex gap-2">
                      <Input
                        value={invoiceData.invoiceNumber}
                        onChange={(e) => handleInputChange("invoiceNumber", e.target.value)}
                      />
                      <Button variant="ghost" size="icon">
                        <Info className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>P.O/S.O. Number</Label>
                    <Input
                      value={invoiceData.poNumber}
                      onChange={(e) => handleInputChange("poNumber", e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Project Detail</Label>
                  <Input
                    value={invoiceData.projectDetail}
                    onChange={(e) => handleInputChange("projectDetail", e.target.value)}
                  />
                </div>

                {/* Items Table */}
                <div className="space-y-4">
                  <div className="grid grid-cols-[1fr_100px_150px_150px_32px] gap-4 text-sm font-medium text-muted-foreground">
                    <div>Items</div>
                    <div>QTY</div>
                    <div>Cost</div>
                    <div>Amount</div>
                    <div />
                  </div>

                  {items.map((item) => (
                    <div key={item.id} className="grid grid-cols-[1fr_100px_150px_150px_32px] gap-4">
                      <Input
                        value={item.description}
                        onChange={(e) => handleItemChange(item.id, "description", e.target.value)}
                      />
                      <Input
                        value={item.qty.toString()}
                        onChange={(e) => handleItemChange(item.id, "qty", Number.parseInt(e.target.value) || 0)}
                        type="number"
                      />
                      <div className="flex items-center gap-1">
                        <span className="text-sm text-muted-foreground">US$</span>
                        <Input
                          value={item.cost.toString()}
                          onChange={(e) => handleItemChange(item.id, "cost", Number.parseFloat(e.target.value) || 0)}
                          type="number"
                        />
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="text-sm text-muted-foreground">US$</span>
                        <Input value={(item.qty * item.cost).toFixed(2)} readOnly />
                      </div>
                      <Button variant="ghost" size="icon">
                        <Info className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>

                <Button variant="outline" className="w-fit gap-2">
                  <Plus className="h-4 w-4" />
                  Add Item
                </Button>

                <div className="space-y-2">
                  <Label>Notes / Terms</Label>
                  <Input
                    placeholder="Enter note or terms of service"
                    value={invoiceData.notes}
                    onChange={(e) => handleInputChange("notes", e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel */}
          <div className="w-80 space-y-6">
            <div className="rounded-lg border bg-white p-4">
              <h3 className="mb-4 font-medium">Invoice Information & Payment</h3>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Send To</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Calvin Glock, New York, USA" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="calvin">Calvin Glock, New York, USA</SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="text-xs text-muted-foreground">*Select one recipient</p>
                </div>

                <div className="space-y-2">
                  <Label>Payment Method</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="PayPal" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="paypal">PayPal</SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="text-xs text-muted-foreground">*You can select more than one method</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Issued Date</Label>
                    <Input
                      type="date"
                      value={invoiceData.issuedDate}
                      onChange={(e) => handleInputChange("issuedDate", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Due Date</Label>
                    <Input
                      type="date"
                      value={invoiceData.dueDate}
                      onChange={(e) => handleInputChange("dueDate", e.target.value)}
                    />
                  </div>
                </div>

                <Separator />

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Subtotal</span>
                    <span className="font-medium">US$ 4,500.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Tax (5%)</span>
                    <span className="font-medium">US$ 225.00</span>
                  </div>
                  <Button variant="link" className="h-auto p-0 text-primary">
                    Add Discount
                  </Button>
                </div>

                <Separator />

                <div className="flex justify-between">
                  <span className="font-medium">Total</span>
                  <span className="text-lg font-semibold text-primary">US$ 4,725.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

