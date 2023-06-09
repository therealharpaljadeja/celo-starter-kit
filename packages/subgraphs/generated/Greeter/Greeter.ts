// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class NewGreeting extends ethereum.Event {
  get params(): NewGreeting__Params {
    return new NewGreeting__Params(this);
  }
}

export class NewGreeting__Params {
  _event: NewGreeting;

  constructor(event: NewGreeting) {
    this._event = event;
  }

  get greeting(): string {
    return this._event.parameters[0].value.toString();
  }

  get sender(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class Greeter extends ethereum.SmartContract {
  static bind(address: Address): Greeter {
    return new Greeter("Greeter", address);
  }

  greeting(): string {
    let result = super.call("greeting", "greeting():(string)", []);

    return result[0].toString();
  }

  try_greeting(): ethereum.CallResult<string> {
    let result = super.tryCall("greeting", "greeting():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _greet(): string {
    return this._call.inputValues[0].value.toString();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class SetGreetingCall extends ethereum.Call {
  get inputs(): SetGreetingCall__Inputs {
    return new SetGreetingCall__Inputs(this);
  }

  get outputs(): SetGreetingCall__Outputs {
    return new SetGreetingCall__Outputs(this);
  }
}

export class SetGreetingCall__Inputs {
  _call: SetGreetingCall;

  constructor(call: SetGreetingCall) {
    this._call = call;
  }

  get _greeting(): string {
    return this._call.inputValues[0].value.toString();
  }
}

export class SetGreetingCall__Outputs {
  _call: SetGreetingCall;

  constructor(call: SetGreetingCall) {
    this._call = call;
  }
}
