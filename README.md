# fs.readdir test

This is a repository to reproduce a bug with node's `fs.readdir`.

## How to reproduce

1. Create a file on your desktop with an umlaut, e.g.: `äöü.txt`
2. Invoke `node.js` with node to see how `fs.readdir` works in node. Here is the output:

    ```
    $ node node.js

    { node: '20.12.2' }
    [ 'desktop.ini', 'äöü.txt' ]
    ```

3. Invoke `main.js` with electron to see hot `fs.readdir` works in electron. Here is the output:

    ```
    $ ./node_modules/.bin/electron main.js

    { electron: '31.0.0-alpha.3', node: '20.12.2' }
    [ 'desktop.ini', '├ñ├╢├╝.txt' ]
    ```
