# Wix Style - React
'Wix Style' is a common name to the different UX style libraries designed by the UX guild (for dashboard, settings, editor, and viewer). Th wix-style-react package contains React implemenations for the different components in the style library.

## Getting Started
### Storybook
Storybook will allow you to see all the different components implemented, and the different usages of each one of them.
```
    npm install
    npm run storybook
```
### Using in a Project
In command line:
```
    npm install --save @wix/wix-style-react
```

In your project
```javascript
    import * as WixStyle from '@wix/wix-style-react';

    export default (props) => {
        return (
            <WixStyle.Button style='blue'>Click me!</WixStyle.Button>
        );
    }
```
See the Storybook, and the story fields, for all the elements and the different parameters they receive.

__Important__: Make sure your body contains either the 'ltr' or 'rtl' class (dependent, of course, on the displayed langauge).

This project is currently still in initial development. It is advisable to be dependent on a specific version of this component for the time being.

## Contributing
You're more than welcomed to contributed by creating pull-requests.

## License
This project is offered under MIT License.
