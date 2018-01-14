# iscrolljs
Smooth scroll **without jQuery**, that pretty library weights only **4.65kb**.
## Dependencies

Library is usign **https://github.com/iamdustan/smoothscroll** as polyfill to smooth scroll behavior.


## Sample usage
To use library you can just simply include this as

```HTML 
    <script src="js/iscrolljs.js"></script>
```

Anchor needs to have class .navigation__link and href which specify id of target element

```HTML 
    <a href="#test" class="navigation__link">Click me to scroll!</a>


    <div id="test">Here we go!</div>
```


##ToDo

- [ ] Config managment
- [ ] EventEmitting

## Contribution
### Install packages
```
npm install
```
### Gulp CLI
```
npm install -g gulp
```
### Build
```
npm run build
```
or
```
gulp build
```