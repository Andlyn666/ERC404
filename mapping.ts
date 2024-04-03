import { ERC20Transfer } from "./generated/Gravity/Gravity.ts"
import { MyEvent } from "./generated/schema.ts"
import { v4 as uuidv4 } from 'uuid';

export function handleNewGravatar(event: ERC20Transfer): void {
    let newEvent = new MyEvent(uuidv4())
    newEvent.addressFrom = event.params.from
    newEvent.addressTo = event.params.to
    newEvent.amount = event.params.amount
    newEvent.save()
  }