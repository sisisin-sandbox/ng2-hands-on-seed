System.config({
  transpiler: 'typescript',
  typescriptOptions: {
    emitDecoratorMetadata: true
  },
  map: {
    app: 'app',
    typescript: 'node_modules/typescript/lib/typescript.js',
    '@angular': './node_modules/@angular',
    'rxjs': './node_modules/rxjs'
  },
  packages: {
    app: {
      defaultExtension: 'ts',
      main: 'main.ts',
    },
    '@angular/core': {
      main: 'core.umd.js',
      defaultExtension: 'js'
    },
    '@angular/compiler': {
      main: 'compiler.umd.js',
      defaultExtension: 'js'
    },
    '@angular/common': {
      main: 'common.umd.js',
      defaultExtension: 'js'
    },
    '@angular/platform-browser-dynamic': {
      main: 'platform-browser-dynamic.umd.js',
      defaultExtension: 'js'
    },
    '@angular/platform-browser': {
      main: 'platform-browser.umd.js',
      defaultExtension: 'js'
    },
    rxjs: {
      main: 'Rx.umd.min.js',
      defaultExtension: 'js'
    }
  }
});