# React Swipe Me (WIP)

This is a simple ReactJS library that solves your problem with creating swipeable menus, clipboards and everything you want. With this library you can easly create component that is swipeable from every screen edge. All you have to do is install library, import it and create SwipeMe component with your children and many props.

SwipeMe component can be controlled by click on desktop and fully swiped by touching on your touch devices.


## Installation

There are two different ways to install SwipeMe

with Yarn:

```bash
yarn add react-swipe-me
```

or with NPM:

```bash
npm i react-swipe-me
```

## Usage

```js
import SwipeMe from 'react-swipe-me'

const ExampleComponent = () => (
  <div className="application">
    <SwipeMe position="left" hide handle={20}>
      <div className="children"></div>
    </SwipeMe>
  </div>
);
```

SwipeMe component can get 3 different props:

| name     | type                          | default | description                                                                |
|----------|-------------------------------|---------|----------------------------------------------------------------------------|
| position | "top" "bottom" "right" "left" | bottom  | define side where component will be generated                              |
| handle   | number                        | 20      | define size of component that will be visible when the component is hidden |
| hide     | boolean                       |         | by this prop you can manually control state of the component               |

more in future...

### Example: ["padgy.pl" application login screen](http://app.padgy.pl)

## License
[MIT](https://choosealicense.com/licenses/mit/)
