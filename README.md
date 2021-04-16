# @koeroesi86/react-reviver
[![Build Status](https://travis-ci.com/Koeroesi86/react-reviver.svg?branch=main)](https://travis-ci.com/Koeroesi86/react-reviver) [![npm version](https://badge.fury.io/js/%40koeroesi86%2Freact-reviver.svg)](https://badge.fury.io/js/%40koeroesi86%2Freact-reviver)

### Dependencies
* [NodeJS](https://nodejs.org/en/)
* [Yarn](https://yarnpkg.com/en/)

### Usage

```shell
yarn add @koeroesi86/react-reviver
```

```typescript jsx
/* eslint-disable react/prop-types */
import React from "react";
import ReactDOM from "react-dom";
import { ReviverProvider, ReviverLayout, ComponentRegistry, RevivableComponentType } from "@koeroesi86/react-reviver";

export const components: ComponentRegistry = {
  wrapper: ({ children, background }) => <div style={{ backgroundColor: background }}>{children}</div>,
  hello: ({ text }) => <h1>{text}</h1>,
}

type RevivableComponent =
  | RevivableComponentType<"wrapper", { background: string }, RevivableComponent>
  | RevivableComponentType<"hello", { text: string }, RevivableComponent>;

export const layout: RevivableComponent = {
  type: "wrapper",
  props: { background: "#efefef" },
  children: [
    { type: "hello", props: { text: "It works!" }, children: [] },
  ]
};

if (window && document.getElementById("root")) {
  ReactDOM.render(
    <ReviverProvider components={components}>
      Example:
      <ReviverLayout data={layout}/>
    </ReviverProvider>,
    document.getElementById("root"),
  );
}
```

### Running locally

```shell
yarn dev
```

Open [example/index.html](example/index.html) in the browser.
