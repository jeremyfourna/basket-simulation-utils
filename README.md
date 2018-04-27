# basket-simulation-utils

[![NPM](https://nodei.co/npm/basket-simulation-utils.png)](https://www.npmjs.com/package/basket-simulation-utils)

## Installation

`npm i basket-simulation-utils`

## Usage

```js
const { generateId, generateName } = require('basket-simulation-utils');

const randomId = generateId(); // Eg: 'BS9111AY63OYH811550N'

const firstNames = ['Brian', 'James'];
const lastNames = ['Doe', 'Allen'];

const randomName = generateName([firstNames, lastNames]); // Eg: 'James Allen'
```