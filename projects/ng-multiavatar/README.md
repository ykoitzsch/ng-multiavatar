<div align="center">
  <img src="https://raw.githubusercontent.com/ykoitzsch/ng-multiavatar/master/avatars.png" width="500" alt="Angular Multiavatar">
  <br>
  <h1>ng-multiavatar</h1>
  <br>
  <a href="https://www.npmjs.org/package/ng-multiavatar">
    <img src="https://badge.fury.io/js/ng-multiavatar.svg" alt="npm">
  </a> 
  </a>
  <br>
  <br>
  <br>
</div>

This is a simple angular wrapper for  [multiavatar-js](https://github.com/multiavatar/Multiavatar) library by [multiavatar.com](https://multiavatar.com/).

## Demo

https://multiavatar.com/

### Installation

```sh
npm install ng-multiavatar 
```

### Quickstart

```ts
// app.module.ts
import { NgModule } from '@angular/core';
import { NgMultiavatarComponent } from 'ng-multiavatar';

@NgModule({
  imports: [NgMultiavatarComponent],
})
export class AppModule {}

// your.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'your-component',
  template: ` <ng-multiavatar seed="Jon Snow"></ng-multiavatar> `,
})
export class YourComponent {}

// That's it!
// You can, of course, customize it. Check out the API Reference below.
```


### API Reference

#### `seed`

| Type    | Required | Default |
| ------- | -------- | ------- |
| string | ✓        | `Binx Bond` |


Use this property to set the seed for the avatar generation.


###### Example

```ts
<ng-multiavatar
  seed="seed123abc%&_+"
></ng-multiavatar>
```

#### `hasBackground`

| Type    | Required | Default |
| ------- | -------- | ------- |
| boolean | ✕        | `true` |


If this is `false`, the final avatar will be without the circle background.


###### Example

```ts
<ng-multiavatar
  seed="Steve Jobs"
  [hasBackground]="false"
></ng-multiavatar>
```
#### `config`
**IMPORTANT!! This property overrides any seed value!**

| Type    | Required | Default |
| ------- | -------- | ------- |
| object | ✕        | `undefined` |


Pass an object to force a specific initial version. The config is an object of type `AvatarConfig`. This object has the properties: `part` and `theme`. 


| key    | possible values | 
| ------- | -------- | 
| part | '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15'  |
| theme | 'A', 'B', 'C'        |

###### Example

```ts
<ng-multiavatar
  [config]="{'part':'01', 'theme':'C'}"
></ng-multiavatar>
```

### License ###

[LICENSE](https://multiavatar.com/license/)



### Screenshots ###

<img src="https://multiavatar.com/press/img/screenshots/screenshot-02.png?v=001">



> GitHub [@ykoitzsch](https://github.com/ykoitzsch) &nbsp;&middot;&nbsp;
> Twitter [@isleepcode](https://twitter.com/isleepcode)
