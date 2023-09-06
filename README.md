# generator-roblox [![NPM version][npm-image]][npm-url]

This is a _Roblox_ project generator to be used with _Yeoman_.

It is designed to be used with the [Rojo] workflow as well as other common
Roblox development tools.

[npm-image]: https://badge.fury.io/js/generator-roblox.svg
[npm-url]: https://npmjs.org/package/generator-roblox
[rojo]: https://rojo.space/

## Installation

First, install [Yeoman] and generator-roblox using [npm] (we assume you have
pre-installed [node.js]).

```bash
npm install -g yo
npm install -g generator-roblox
```

Then generate your new project:

```bash
yo roblox
```

[yeoman]: http://yeoman.io/
[npm]: https://www.npmjs.com/
[node.js]: https://nodejs.org/

## Building

First, install all dependencies.

```bash
npm install
```

This generator is written in [TypeScript], so it needs to be compiled before it
can be used.

```bash
npm run build
```

For development, you can use the `watch` command to automatically recompile
when the source files change.

```bash
npm run watch
```

[typescript]: https://www.typescriptlang.org/

## Contributing

Contributions are welcome, please make a pull request! Check out our
[contribution] guide for further information.

Please read our [code of conduct] when getting involved.

[contribution]: CONTRIBUTING.md
[code of conduct]: CODE_OF_CONDUCT.md

## License

This generator is free software available under the MIT license. See the
[license] for details.

[license]: LICENSE.md
