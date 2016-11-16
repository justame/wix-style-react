# Wix Style - React
'Wix Style' is a common name to the different UX style libraries designed by the UX guild (for dashboard, settings, editor, and viewer). The wix-style-react package contains React implemenations for the different components in the style library.

## Demo
Storybook can be seen (https://wix-private.github.io/wix-style-react/)[here].

## Getting Started
### Storybook
Storybook will allow you to see all the different components implemented, and the different usages of each one of them.
```
    npm install
    npm run storybook
```
### Using in a Project
#### Install the npm
```
    npm install --save @wix/wix-style-react
```
#### Update webpack 
The files are brough 'uncompiled' and 'unpacked'. You will need to make sure webpack standard loaders run on this project by adding 'node_modules/@wix/wix-style-react/src' to your loaders' include array, for example:
```javascript
    {
        test: /\.less$/,
        include:['node_modules/@wix/wix-style-react/src')],
        loaders: [
            'style-loader',
            'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
            'postcss-loader',
            'less-loader'
        ]
    }
```
#### Use in your code
```javascript
    import * as WixStyle from '@wix/wix-style-react';

    export default (props) => {
        return (
            <WixStyle.Button style='blue'>Click me!</WixStyle.Button>
        );
    }
```
Optimization: If you prefer to include only specific elements, you can do so by:
```javascript
    import Button from '@wix/wix-style-react/src/Button';

    export default (props) => {
        return (
            <Button style='blue'>Click me!</Button>
        );
    }
```
#### Notes
See the Storybook, and the story fields, for all the elements and the different parameters they receive.

__Important__: Make sure your body contains either the 'ltr' or 'rtl' class (dependent, of course, on the displayed language).

This project is currently still in initial development. It is advisable to be dependent on a specific version of this component for the time being.

## Contributing
You're more than welcomed to contributed by creating pull-requests.

## License
This project is offered under MIT License.
