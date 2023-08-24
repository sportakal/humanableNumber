# Humanable Number

[![npm version](https://badge.fury.io/js/humanablenumber.svg)](https://badge.fury.io/js/humanablenumber)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This package is used to convert a number to a human-readable format.

## Features

- Convert a number to a human-readable format
- Support for decimal numbers
- Support for numbers up to Quadrillion

## Installation

- Using NPM

   ```shell
  npm install humanablenumber
   ```

## Usage

1. Import the components into your project
   ```js
   import { humanableNumber } from "humanablenumber"
   ```
2. Use functions in your project
   ```js
    humanableNumber(1000) // 1K
    humanableNumber(10000) // 10K
    humanableNumber(987654, false) // 987K
    humanableNumber(987654, true) // 987.6K
    humanableNumber(1000000) // 1M
    humanableNumber(1000000000) // 1B
   ```

## API

| Option          | *Type*    |
|-----------------|-----------|
| **input**       | *number*  |
| **showDecimal** | *boolean* |

## Contributing

All contributions are welcome.

If you would like to contribute to this project, feel free to submit pull requests.

Prior to making significant changes, I recommend opening an issue to discuss the changes.

## License

This project is licensed under the MIT license. For more information, refer to the `LICENSE` file.
