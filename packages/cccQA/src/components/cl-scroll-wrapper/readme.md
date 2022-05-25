# Scroll wrapper

## Usage

### Default

Without any content, the default cl-scroll-wrapper will display nothing.

```preview
<cl-scroll-wrapper max-height="25" </cl-scroll-wrapper>
```

```html
<cl-scroll-wrapper max-height="25"></cl-scroll-wrapper>
```

### Overflow

The scroll-wrapper automatically shows the necessary scroll bars based on the content inside. No setup is required.

```preview
<cl-scroll-wrapper max-height="25">
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut fringilla sapien. Integer leo neque, euismod eu aliquet at, lobortis a urna. Short text.</p>
</cl-scroll-wrapper>

<cl-scroll-wrapper max-height="25">
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut fringilla sapien. Integer leo neque, euismod eu aliquet at, lobortis a urna. Fusce posuere rhoncus purus, in bibendum lectus feugiat molestie. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur ornare nisi eu posuere congue. Morbi quis felis nulla. Ut tincidunt, est a accumsan viverra, arcu ipsum egestas tortor, sit amet condimentum enim sem at felis. Aenean a est nisl.</p>
  <p>Quisque et ornare quam, ut viverra nibh. Suspendisse porttitor est elementum, molestie libero et, posuere velit. In convallis arcu quis diam varius laoreet. Vestibulum ac quam a dolor mattis porta. Sed ut justo non dolor porttitor tristique non in nunc. Phasellus posuere pretium lectus eget ullamcorper. Duis vitae dictum nibh. Proin vulputate lorem nibh, in sodales enim condimentum nec. Phasellus arcu mauris, eleifend ac sapien id, ornare pulvinar tellus. Phasellus porta orci velit, sit amet tincidunt augue vulputate id. Proin iaculis a nulla eu malesuada. Morbi in ipsum tristique, elementum massa vel, aliquet nunc. Nam aliquam, dui cursus iaculis iaculis, augue nisi mollis purus, a ullamcorper leo mi quis orci. Sed a maximus justo. Pellentesque vulputate eros vel lacus consequat imperdiet.</p>
  <p>Nulla eu turpis ac nibh luctus porttitor vitae at mi. Quisque non cursus arcu, ut pulvinar diam. Mauris maximus mauris vitae quam venenatis, eu porttitor ipsum accumsan. Praesent eu felis sollicitudin, pellentesque dui sed, blandit tortor. Morbi sit amet erat eu ipsum sollicitudin finibus. Sed auctor mollis quam quis interdum. Suspendisse suscipit, nisl sit amet facilisis fermentum, justo arcu tincidunt lectus, sed maximus arcu nulla vel erat. Morbi a turpis nulla. Donec auctor fermentum neque ac scelerisque. Vestibulum eget risus magna. Curabitur cursus eu justo eu dictum.</p>
  <p>Aenean ut lectus tempor, pulvinar quam et, congue enim. Vestibulum odio dui, consectetur id odio vel, pharetra bibendum lacus. Nunc id velit ut ante tristique tincidunt. Cras faucibus rhoncus dolor, at iaculis velit ornare a. Aenean sodales enim a nisi malesuada efficitur. Aenean libero nunc, aliquet nec maximus eu, facilisis ac nibh. Vestibulum ultricies vel leo non venenatis. Fusce mi neque, hendrerit ac neque id, eleifend hendrerit justo. In et volutpat lorem, sit amet porttitor odio. Nam eget pretium leo. Aenean sed consequat quam. Ut fermentum a risus in luctus. Aenean malesuada hendrerit elit, eu tincidunt orci tincidunt sed. Quisque et laoreet odio, vel condimentum mauris.</p>
  <p style='margin-bottom: 0;'>Vivamus aliquam dictum pharetra. Quisque ornare eget erat non commodo. Aenean ac aliquam libero, sed dignissim nisi. Praesent bibendum scelerisque eros. Cras molestie risus ut lacinia rhoncus. Pellentesque sollicitudin enim quis elit dictum, in cursus enim facilisis. Sed pulvinar neque turpis, at vestibulum quam rutrum vitae. Integer pretium aliquam pretium. Mauris consectetur augue nunc, non hendrerit diam molestie quis. Vivamus elementum mattis elit, at pellentesque mauris rhoncus nec. Sed fermentum metus vitae lorem convallis viverra.</p>
</cl-scroll-wrapper>
```

```html
<cl-scroll-wrapper max-height="25">
  <p>Lorem ipsum dolor sit amet...</p>
</cl-scroll-wrapper>

<cl-scroll-wrapper max-height="25">
  <p>Lorem ipsum dolor sit amet...</p>
  <p>Quisque et ornare quam, ut viverra nibh...</p>
  <p>Nulla eu turpis ac nibh luctus porttitor vitae at mi...</p>
  <p>Aenean ut lectus tempor, pulvinar quam et, congue enim...</p>
  <p>Vivamus aliquam dictum pharetra...</p>
</cl-scroll-wrapper>
```
#### Thumb Sizes

```preview
<cl-scroll-wrapper max-height="25">
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut fringilla sapien. Integer leo neque, euismod eu aliquet at, lobortis a urna. Fusce posuere rhoncus purus, in bibendum lectus feugiat molestie. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur ornare nisi eu posuere congue. Morbi quis felis nulla. Ut tincidunt, est a accumsan viverra, arcu ipsum egestas tortor, sit amet condimentum enim sem at felis. Aenean a est nisl.</p>
  <p>Quisque et ornare quam, ut viverra nibh. Suspendisse porttitor est elementum, molestie libero et, posuere velit. In convallis arcu quis diam varius laoreet. Vestibulum ac quam a dolor mattis porta. Sed ut justo non dolor porttitor tristique non in nunc. Phasellus posuere pretium lectus eget ullamcorper. Duis vitae dictum nibh. Proin vulputate lorem nibh, in sodales enim condimentum nec. Phasellus arcu mauris, eleifend ac sapien id, ornare pulvinar tellus. Phasellus porta orci velit, sit amet tincidunt augue vulputate id. Proin iaculis a nulla eu malesuada. Morbi in ipsum tristique, elementum massa vel, aliquet nunc. Nam aliquam, dui cursus iaculis iaculis, augue nisi mollis purus, a ullamcorper leo mi quis orci. Sed a maximus justo. Pellentesque vulputate eros vel lacus consequat imperdiet.</p>
  <p>Nulla eu turpis ac nibh luctus porttitor vitae at mi. Quisque non cursus arcu, ut pulvinar diam. Mauris maximus mauris vitae quam venenatis, eu porttitor ipsum accumsan. Praesent eu felis sollicitudin, pellentesque dui sed, blandit tortor. Morbi sit amet erat eu ipsum sollicitudin finibus. Sed auctor mollis quam quis interdum. Suspendisse suscipit, nisl sit amet facilisis fermentum, justo arcu tincidunt lectus, sed maximus arcu nulla vel erat. Morbi a turpis nulla. Donec auctor fermentum neque ac scelerisque. Vestibulum eget risus magna. Curabitur cursus eu justo eu dictum.</p>
  <p>Aenean ut lectus tempor, pulvinar quam et, congue enim. Vestibulum odio dui, consectetur id odio vel, pharetra bibendum lacus. Nunc id velit ut ante tristique tincidunt. Cras faucibus rhoncus dolor, at iaculis velit ornare a. Aenean sodales enim a nisi malesuada efficitur. Aenean libero nunc, aliquet nec maximus eu, facilisis ac nibh. Vestibulum ultricies vel leo non venenatis. Fusce mi neque, hendrerit ac neque id, eleifend hendrerit justo. In et volutpat lorem, sit amet porttitor odio. Nam eget pretium leo. Aenean sed consequat quam. Ut fermentum a risus in luctus. Aenean malesuada hendrerit elit, eu tincidunt orci tincidunt sed. Quisque et laoreet odio, vel condimentum mauris.</p>
  <p style='margin-bottom: 0;'>Vivamus aliquam dictum pharetra. Quisque ornare eget erat non commodo. Aenean ac aliquam libero, sed dignissim nisi. Praesent bibendum scelerisque eros. Cras molestie risus ut lacinia rhoncus. Pellentesque sollicitudin enim quis elit dictum, in cursus enim facilisis. Sed pulvinar neque turpis, at vestibulum quam rutrum vitae. Integer pretium aliquam pretium. Mauris consectetur augue nunc, non hendrerit diam molestie quis. Vivamus elementum mattis elit, at pellentesque mauris rhoncus nec. Sed fermentum metus vitae lorem convallis viverra.</p>
</cl-scroll-wrapper>

<cl-scroll-wrapper max-height="25" small>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut fringilla sapien. Integer leo neque, euismod eu aliquet at, lobortis a urna. Fusce posuere rhoncus purus, in bibendum lectus feugiat molestie. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur ornare nisi eu posuere congue. Morbi quis felis nulla. Ut tincidunt, est a accumsan viverra, arcu ipsum egestas tortor, sit amet condimentum enim sem at felis. Aenean a est nisl.</p>
  <p>Quisque et ornare quam, ut viverra nibh. Suspendisse porttitor est elementum, molestie libero et, posuere velit. In convallis arcu quis diam varius laoreet. Vestibulum ac quam a dolor mattis porta. Sed ut justo non dolor porttitor tristique non in nunc. Phasellus posuere pretium lectus eget ullamcorper. Duis vitae dictum nibh. Proin vulputate lorem nibh, in sodales enim condimentum nec. Phasellus arcu mauris, eleifend ac sapien id, ornare pulvinar tellus. Phasellus porta orci velit, sit amet tincidunt augue vulputate id. Proin iaculis a nulla eu malesuada. Morbi in ipsum tristique, elementum massa vel, aliquet nunc. Nam aliquam, dui cursus iaculis iaculis, augue nisi mollis purus, a ullamcorper leo mi quis orci. Sed a maximus justo. Pellentesque vulputate eros vel lacus consequat imperdiet.</p>
  <p>Nulla eu turpis ac nibh luctus porttitor vitae at mi. Quisque non cursus arcu, ut pulvinar diam. Mauris maximus mauris vitae quam venenatis, eu porttitor ipsum accumsan. Praesent eu felis sollicitudin, pellentesque dui sed, blandit tortor. Morbi sit amet erat eu ipsum sollicitudin finibus. Sed auctor mollis quam quis interdum. Suspendisse suscipit, nisl sit amet facilisis fermentum, justo arcu tincidunt lectus, sed maximus arcu nulla vel erat. Morbi a turpis nulla. Donec auctor fermentum neque ac scelerisque. Vestibulum eget risus magna. Curabitur cursus eu justo eu dictum.</p>
  <p>Aenean ut lectus tempor, pulvinar quam et, congue enim. Vestibulum odio dui, consectetur id odio vel, pharetra bibendum lacus. Nunc id velit ut ante tristique tincidunt. Cras faucibus rhoncus dolor, at iaculis velit ornare a. Aenean sodales enim a nisi malesuada efficitur. Aenean libero nunc, aliquet nec maximus eu, facilisis ac nibh. Vestibulum ultricies vel leo non venenatis. Fusce mi neque, hendrerit ac neque id, eleifend hendrerit justo. In et volutpat lorem, sit amet porttitor odio. Nam eget pretium leo. Aenean sed consequat quam. Ut fermentum a risus in luctus. Aenean malesuada hendrerit elit, eu tincidunt orci tincidunt sed. Quisque et laoreet odio, vel condimentum mauris.</p>
  <p style='margin-bottom: 0;'>Vivamus aliquam dictum pharetra. Quisque ornare eget erat non commodo. Aenean ac aliquam libero, sed dignissim nisi. Praesent bibendum scelerisque eros. Cras molestie risus ut lacinia rhoncus. Pellentesque sollicitudin enim quis elit dictum, in cursus enim facilisis. Sed pulvinar neque turpis, at vestibulum quam rutrum vitae. Integer pretium aliquam pretium. Mauris consectetur augue nunc, non hendrerit diam molestie quis. Vivamus elementum mattis elit, at pellentesque mauris rhoncus nec. Sed fermentum metus vitae lorem convallis viverra.</p>
</cl-scroll-wrapper>
```

```html
<cl-scroll-wrapper max-height="25">
  <p>Lorem ipsum dolor sit amet...</p>
  <p>Quisque et ornare quam, ut viverra nibh...</p>
  <p>Nulla eu turpis ac nibh luctus porttitor vitae at mi...</p>
  <p>Aenean ut lectus tempor, pulvinar quam et, congue enim...</p>
  <p>Vivamus aliquam dictum pharetra...</p>
</cl-scroll-wrapper>

<cl-scroll-wrapper max-height="25" small>
  <p>Lorem ipsum dolor sit amet...</p>
  <p>Quisque et ornare quam, ut viverra nibh...</p>
  <p>Nulla eu turpis ac nibh luctus porttitor vitae at mi...</p>
  <p>Aenean ut lectus tempor, pulvinar quam et, congue enim...</p>
  <p>Vivamus aliquam dictum pharetra...</p>
</cl-scroll-wrapper>
```

#### Thumb only

```preview
<cl-scroll-wrapper max-height="25" thumb-only>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut fringilla sapien. Integer leo neque, euismod eu aliquet at, lobortis a urna. Fusce posuere rhoncus purus, in bibendum lectus feugiat molestie. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur ornare nisi eu posuere congue. Morbi quis felis nulla. Ut tincidunt, est a accumsan viverra, arcu ipsum egestas tortor, sit amet condimentum enim sem at felis. Aenean a est nisl.</p>
  <p>Quisque et ornare quam, ut viverra nibh. Suspendisse porttitor est elementum, molestie libero et, posuere velit. In convallis arcu quis diam varius laoreet. Vestibulum ac quam a dolor mattis porta. Sed ut justo non dolor porttitor tristique non in nunc. Phasellus posuere pretium lectus eget ullamcorper. Duis vitae dictum nibh. Proin vulputate lorem nibh, in sodales enim condimentum nec. Phasellus arcu mauris, eleifend ac sapien id, ornare pulvinar tellus. Phasellus porta orci velit, sit amet tincidunt augue vulputate id. Proin iaculis a nulla eu malesuada. Morbi in ipsum tristique, elementum massa vel, aliquet nunc. Nam aliquam, dui cursus iaculis iaculis, augue nisi mollis purus, a ullamcorper leo mi quis orci. Sed a maximus justo. Pellentesque vulputate eros vel lacus consequat imperdiet.</p>
  <p>Nulla eu turpis ac nibh luctus porttitor vitae at mi. Quisque non cursus arcu, ut pulvinar diam. Mauris maximus mauris vitae quam venenatis, eu porttitor ipsum accumsan. Praesent eu felis sollicitudin, pellentesque dui sed, blandit tortor. Morbi sit amet erat eu ipsum sollicitudin finibus. Sed auctor mollis quam quis interdum. Suspendisse suscipit, nisl sit amet facilisis fermentum, justo arcu tincidunt lectus, sed maximus arcu nulla vel erat. Morbi a turpis nulla. Donec auctor fermentum neque ac scelerisque. Vestibulum eget risus magna. Curabitur cursus eu justo eu dictum.</p>
  <p>Aenean ut lectus tempor, pulvinar quam et, congue enim. Vestibulum odio dui, consectetur id odio vel, pharetra bibendum lacus. Nunc id velit ut ante tristique tincidunt. Cras faucibus rhoncus dolor, at iaculis velit ornare a. Aenean sodales enim a nisi malesuada efficitur. Aenean libero nunc, aliquet nec maximus eu, facilisis ac nibh. Vestibulum ultricies vel leo non venenatis. Fusce mi neque, hendrerit ac neque id, eleifend hendrerit justo. In et volutpat lorem, sit amet porttitor odio. Nam eget pretium leo. Aenean sed consequat quam. Ut fermentum a risus in luctus. Aenean malesuada hendrerit elit, eu tincidunt orci tincidunt sed. Quisque et laoreet odio, vel condimentum mauris.</p>
  <p style='margin-bottom: 0;'>Vivamus aliquam dictum pharetra. Quisque ornare eget erat non commodo. Aenean ac aliquam libero, sed dignissim nisi. Praesent bibendum scelerisque eros. Cras molestie risus ut lacinia rhoncus. Pellentesque sollicitudin enim quis elit dictum, in cursus enim facilisis. Sed pulvinar neque turpis, at vestibulum quam rutrum vitae. Integer pretium aliquam pretium. Mauris consectetur augue nunc, non hendrerit diam molestie quis. Vivamus elementum mattis elit, at pellentesque mauris rhoncus nec. Sed fermentum metus vitae lorem convallis viverra.</p>
</cl-scroll-wrapper>

<cl-scroll-wrapper max-height="25" small thumb-only>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut fringilla sapien. Integer leo neque, euismod eu aliquet at, lobortis a urna. Fusce posuere rhoncus purus, in bibendum lectus feugiat molestie. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur ornare nisi eu posuere congue. Morbi quis felis nulla. Ut tincidunt, est a accumsan viverra, arcu ipsum egestas tortor, sit amet condimentum enim sem at felis. Aenean a est nisl.</p>
  <p>Quisque et ornare quam, ut viverra nibh. Suspendisse porttitor est elementum, molestie libero et, posuere velit. In convallis arcu quis diam varius laoreet. Vestibulum ac quam a dolor mattis porta. Sed ut justo non dolor porttitor tristique non in nunc. Phasellus posuere pretium lectus eget ullamcorper. Duis vitae dictum nibh. Proin vulputate lorem nibh, in sodales enim condimentum nec. Phasellus arcu mauris, eleifend ac sapien id, ornare pulvinar tellus. Phasellus porta orci velit, sit amet tincidunt augue vulputate id. Proin iaculis a nulla eu malesuada. Morbi in ipsum tristique, elementum massa vel, aliquet nunc. Nam aliquam, dui cursus iaculis iaculis, augue nisi mollis purus, a ullamcorper leo mi quis orci. Sed a maximus justo. Pellentesque vulputate eros vel lacus consequat imperdiet.</p>
  <p>Nulla eu turpis ac nibh luctus porttitor vitae at mi. Quisque non cursus arcu, ut pulvinar diam. Mauris maximus mauris vitae quam venenatis, eu porttitor ipsum accumsan. Praesent eu felis sollicitudin, pellentesque dui sed, blandit tortor. Morbi sit amet erat eu ipsum sollicitudin finibus. Sed auctor mollis quam quis interdum. Suspendisse suscipit, nisl sit amet facilisis fermentum, justo arcu tincidunt lectus, sed maximus arcu nulla vel erat. Morbi a turpis nulla. Donec auctor fermentum neque ac scelerisque. Vestibulum eget risus magna. Curabitur cursus eu justo eu dictum.</p>
  <p>Aenean ut lectus tempor, pulvinar quam et, congue enim. Vestibulum odio dui, consectetur id odio vel, pharetra bibendum lacus. Nunc id velit ut ante tristique tincidunt. Cras faucibus rhoncus dolor, at iaculis velit ornare a. Aenean sodales enim a nisi malesuada efficitur. Aenean libero nunc, aliquet nec maximus eu, facilisis ac nibh. Vestibulum ultricies vel leo non venenatis. Fusce mi neque, hendrerit ac neque id, eleifend hendrerit justo. In et volutpat lorem, sit amet porttitor odio. Nam eget pretium leo. Aenean sed consequat quam. Ut fermentum a risus in luctus. Aenean malesuada hendrerit elit, eu tincidunt orci tincidunt sed. Quisque et laoreet odio, vel condimentum mauris.</p>
  <p style='margin-bottom: 0;'>Vivamus aliquam dictum pharetra. Quisque ornare eget erat non commodo. Aenean ac aliquam libero, sed dignissim nisi. Praesent bibendum scelerisque eros. Cras molestie risus ut lacinia rhoncus. Pellentesque sollicitudin enim quis elit dictum, in cursus enim facilisis. Sed pulvinar neque turpis, at vestibulum quam rutrum vitae. Integer pretium aliquam pretium. Mauris consectetur augue nunc, non hendrerit diam molestie quis. Vivamus elementum mattis elit, at pellentesque mauris rhoncus nec. Sed fermentum metus vitae lorem convallis viverra.</p>
</cl-scroll-wrapper>
```

```html
<cl-scroll-wrapper max-height="25" thumb-only>
  <p>Lorem ipsum dolor sit amet...</p>
  <p>Quisque et ornare quam, ut viverra nibh...</p>
  <p>Nulla eu turpis ac nibh luctus porttitor vitae at mi...</p>
  <p>Aenean ut lectus tempor, pulvinar quam et, congue enim...</p>
  <p>Vivamus aliquam dictum pharetra...</p>
</cl-scroll-wrapper>

<cl-scroll-wrapper max-height="25" small thumb-only>
  <p>Lorem ipsum dolor sit amet...</p>
  <p>Quisque et ornare quam, ut viverra nibh...</p>
  <p>Nulla eu turpis ac nibh luctus porttitor vitae at mi...</p>
  <p>Aenean ut lectus tempor, pulvinar quam et, congue enim...</p>
  <p>Vivamus aliquam dictum pharetra...</p>
</cl-scroll-wrapper>
```

#### Persistent scroll-bar

```preview
<cl-scroll-wrapper max-height="25" persistent>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut fringilla sapien. Integer leo neque, euismod eu aliquet at, lobortis a urna. Fusce posuere rhoncus purus, in bibendum lectus feugiat molestie. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur ornare nisi eu posuere congue. Morbi quis felis nulla. Ut tincidunt, est a accumsan viverra, arcu ipsum egestas tortor, sit amet condimentum enim sem at felis. Aenean a est nisl.</p>
  <p>Quisque et ornare quam, ut viverra nibh. Suspendisse porttitor est elementum, molestie libero et, posuere velit. In convallis arcu quis diam varius laoreet. Vestibulum ac quam a dolor mattis porta. Sed ut justo non dolor porttitor tristique non in nunc. Phasellus posuere pretium lectus eget ullamcorper. Duis vitae dictum nibh. Proin vulputate lorem nibh, in sodales enim condimentum nec. Phasellus arcu mauris, eleifend ac sapien id, ornare pulvinar tellus. Phasellus porta orci velit, sit amet tincidunt augue vulputate id. Proin iaculis a nulla eu malesuada. Morbi in ipsum tristique, elementum massa vel, aliquet nunc. Nam aliquam, dui cursus iaculis iaculis, augue nisi mollis purus, a ullamcorper leo mi quis orci. Sed a maximus justo. Pellentesque vulputate eros vel lacus consequat imperdiet.</p>
  <p>Nulla eu turpis ac nibh luctus porttitor vitae at mi. Quisque non cursus arcu, ut pulvinar diam. Mauris maximus mauris vitae quam venenatis, eu porttitor ipsum accumsan. Praesent eu felis sollicitudin, pellentesque dui sed, blandit tortor. Morbi sit amet erat eu ipsum sollicitudin finibus. Sed auctor mollis quam quis interdum. Suspendisse suscipit, nisl sit amet facilisis fermentum, justo arcu tincidunt lectus, sed maximus arcu nulla vel erat. Morbi a turpis nulla. Donec auctor fermentum neque ac scelerisque. Vestibulum eget risus magna. Curabitur cursus eu justo eu dictum.</p>
  <p>Aenean ut lectus tempor, pulvinar quam et, congue enim. Vestibulum odio dui, consectetur id odio vel, pharetra bibendum lacus. Nunc id velit ut ante tristique tincidunt. Cras faucibus rhoncus dolor, at iaculis velit ornare a. Aenean sodales enim a nisi malesuada efficitur. Aenean libero nunc, aliquet nec maximus eu, facilisis ac nibh. Vestibulum ultricies vel leo non venenatis. Fusce mi neque, hendrerit ac neque id, eleifend hendrerit justo. In et volutpat lorem, sit amet porttitor odio. Nam eget pretium leo. Aenean sed consequat quam. Ut fermentum a risus in luctus. Aenean malesuada hendrerit elit, eu tincidunt orci tincidunt sed. Quisque et laoreet odio, vel condimentum mauris.</p>
  <p style='margin-bottom: 0;'>Vivamus aliquam dictum pharetra. Quisque ornare eget erat non commodo. Aenean ac aliquam libero, sed dignissim nisi. Praesent bibendum scelerisque eros. Cras molestie risus ut lacinia rhoncus. Pellentesque sollicitudin enim quis elit dictum, in cursus enim facilisis. Sed pulvinar neque turpis, at vestibulum quam rutrum vitae. Integer pretium aliquam pretium. Mauris consectetur augue nunc, non hendrerit diam molestie quis. Vivamus elementum mattis elit, at pellentesque mauris rhoncus nec. Sed fermentum metus vitae lorem convallis viverra.</p>
</cl-scroll-wrapper>
```

```html
<cl-scroll-wrapper max-height="25" persistent>
  <p>Lorem ipsum dolor sit amet...</p>
  <p>Quisque et ornare quam, ut viverra nibh...</p>
  <p>Nulla eu turpis ac nibh luctus porttitor vitae at mi...</p>
  <p>Aenean ut lectus tempor, pulvinar quam et, congue enim...</p>
  <p>Vivamus aliquam dictum pharetra...</p>
</cl-scroll-wrapper>
```

### Horizontal scrolling

```preview
<cl-scroll-wrapper max-height="50" style="--wrapper-max-width: 25rem;">
  <cl-pictogram name='other--cookies' size=100></cl-pictogram>
</cl-scroll-wrapper>
```

```html
<cl-scroll-wrapper max-height="50" style="--wrapper-max-width: 25rem;">
  <cl-pictogram name='other--cookies' size=100></cl-pictogram>
</cl-scroll-wrapper>
```

<!-- Auto Generated Below -->


## Properties

| Property     | Attribute    | Description                                                               | Type      | Default |
| ------------ | ------------ | ------------------------------------------------------------------------- | --------- | ------- |
| `maxHeight`  | `max-height` | Determines the max height of the scroll-wrapper component                 | `number`  | `null`  |
| `persistent` | `persistent` | Determines whether the scroll-bar should be persistent                    | `boolean` | `false` |
| `small`      | `small`      | Size of the thumb                                                         | `boolean` | `false` |
| `thumbOnly`  | `thumb-only` | Determines whether only the thumb should be shown, or also its background | `boolean` | `false` |


## CSS Custom Properties

| Name                   | Description                                        |
| ---------------------- | -------------------------------------------------- |
| `--wrapper-margin`     | inline margin of the scroll wrapper Default: 0     |
| `--wrapper-max-height` | maximum height of the scroll wrapper Default: auto |
| `--wrapper-max-width`  | maximum width of the scroll wrapper Default: 100%  |


----------------------------------------------

Built with love
