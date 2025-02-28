import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function ChangeStatus() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Approved" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="apple">Approved</SelectItem>
          <SelectItem value="banana">Rejected</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
