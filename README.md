# TypeScript_Codes
TypeScript tutorial 


### To Install the TypeScript Compiler Globally
```sh
npm i -g typescript
```

### To Check the TypeScript Version
```sh
tsc -v
```

### To Compile a TypeScript file
```sh
tsc index.ts
```

### Configuring the TypeScript Compiler
```sh
tsc --init
```
The Edited `tsconfig.json` looks like this:
```json
{
  "compilerOptions": {
    /* Visit https://aka.ms/tsconfig to read more about this file */

    /* Language and Environment */
    "target": "ES2016",                                  /* Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */

    /* Modules */
    "module": "commonjs",                                /* Specify what module code is generated. */
    "rootDir": "./src",                                  /* Specify the root folder within your source files. */

    /* Emit */
    "outDir": "./dist",                                   /* Specify an output folder for all emitted files. */
    "removeComments": true,                           /* Disable emitting comments. */
    "noEmitOnError": true,                            /* Disable emitting files if any type checking errors are reported. */

    /* Interop Constraints */
    "esModuleInterop": true,                             /* Emit additional JavaScript to ease support for importing CommonJS modules. This enables 'allowSyntheticDefaultImports' for type compatibility. */
    "forceConsistentCasingInFileNames": true,            /* Ensure that casing is correct in imports. */

    /* Type Checking */
    "strict": true,                                      /* Enable all strict type-checking options. */
 
    /* Completeness */
    "skipLibCheck": true                                 /* Skip type checking all .d.ts files. */
  }
}
```
### Now Run the TypeScript file:
```sh
tsc
```



