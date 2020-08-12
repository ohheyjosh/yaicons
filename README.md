# Yet Another Icon Set

## Requirements:

- React 16 or newer

## Install:

```sh
npm install yaicons
```

or

```sh
yarn add yaicons
```

## Basic Usage:

```js
import React from "react";
import { Alert } from "yaicons";

const App = () => {
  return <Alert />;
};

export default App;
```

or

```js
import React from "react";
import * as Icon from "yaicons";

const App = () => {
  return <Icon.Alert />;
};

export default App;
```

## Inline Customization:

```js
<Alert color="red" size={96} strokeWidth={4} />
```

( Yaicons can also be styled via the `.yaicons` class. )
