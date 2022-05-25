# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [11.0.1](https://bitbucket.voiceworks.com/fp/core-component-library/compare/@enreach/core-component-library@11.0.0...@enreach/core-component-library@11.0.1) (2022-04-01)

**Note:** Version bump only for package @enreach/core-component-library





# [11.0.0](https://bitbucket.voiceworks.com/fp/core-component-library/compare/@enreach/core-component-library@10.0.0...@enreach/core-component-library@11.0.0) (2022-03-29)


### Code Refactoring

* **cl-text-field:** Replaces current @Event-names with native event-names, removes `onChange` event and adds `uncontrolled` attribute ([fcaaba8](https://bitbucket.voiceworks.com/fp/core-component-library/commits/fcaaba812cce83ee655c9f9d8b46bd9dab5d4d45))


### BREAKING CHANGES

* **cl-text-field:** The `blurred` event is renamed to `blur`
* **cl-text-field:** The `focused` event is renamed to `focus`
* **cl-text-field:** The `inputChanged` event is renamed to `input`
* **cl-text-field:** The `changed` event has been removed
* **cl-text-field:** All the text-fields are controlled now by default, so if that's unwanted behaviour, please use the `uncontrolled` attribute.





# [10.0.0](https://bitbucket.voiceworks.com/fp/core-component-library/compare/@enreach/core-component-library@9.1.1...@enreach/core-component-library@10.0.0) (2022-03-18)


### Bug Fixes

* **cl-grid:** Removes validation that throws an error when neither `container` or `item` property is passed ([9206028](https://bitbucket.voiceworks.com/fp/core-component-library/commits/920602896d4c4b7bfc4831596a69670b39275063))
* **cl-toast:** Adds line breaking on the toast body so long words do not leave the toast box. ([ec6330e](https://bitbucket.voiceworks.com/fp/core-component-library/commits/ec6330eb1e9c2a3b28213ee5ae2e76ecfcf7c54a))


### chore

* Removes snowflake-library from core-component-library repo and adds some improvements ([72e2f37](https://bitbucket.voiceworks.com/fp/core-component-library/commits/72e2f37e8639415ba650dddc1cc02a503ce8f433))


### Features

* **core-component-library:** Adds `Accessibility`-tab to the Storybook component examples ([dfedc72](https://bitbucket.voiceworks.com/fp/core-component-library/commits/dfedc7243ca665a6e66458217809522c9ae9f7a0))


### BREAKING CHANGES

* Since the [snowflake-library](https://bitbucket.voiceworks.com/projects/FP/repos/snowflake-library/browse) now has its own repo, it is removed from the `core-component-library repo.





## [9.1.1](https://bitbucket.voiceworks.com/fp/core-component-library/compare/@enreach/core-component-library@9.1.0...@enreach/core-component-library@9.1.1) (2022-02-23)

**Note:** Version bump only for package @enreach/core-component-library





# [9.1.0](https://bitbucket.voiceworks.com/fp/core-component-library/compare/@enreach/core-component-library@9.0.0...@enreach/core-component-library@9.1.0) (2022-02-17)


### Bug Fixes

* **cl-icon:** Sets the height of the slot-fb to ascertain the svg is centered. ([41a1d07](https://bitbucket.voiceworks.com/fp/core-component-library/commits/41a1d07e798e258eb30b3f0fa08c697d99d366df))


### Features

* **cl-toast:** Adds inline variant of the Toast component ([e3c072a](https://bitbucket.voiceworks.com/fp/core-component-library/commits/e3c072ace8a5ff7248714049bc4b1f4b9707d724))





# [9.0.0](https://bitbucket.voiceworks.com/fp/core-component-library/compare/@enreach/core-component-library@8.0.0...@enreach/core-component-library@9.0.0) (2022-02-02)


### chore

* **core-component-library:** Removes the `cl-modal` component ([5bc6624](https://bitbucket.voiceworks.com/fp/core-component-library/commits/5bc6624f813bd4e2921e6dafc3989bd1b4791f18))


### Features

* **cl-icon, cl-pictogram:** Adds the option to put an svg inside directly, instead of using the name properties. ([63de11a](https://bitbucket.voiceworks.com/fp/core-component-library/commits/63de11a0e6c9b3dfdb202688131a92ccbce4f1cd))
* **cl-typography:** Adds the Typography component ([e4a6861](https://bitbucket.voiceworks.com/fp/core-component-library/commits/e4a68616800951bd9deea843c1422a7142584059))
* **core-component-library-angular:** Reimplements the Angular package of the core-component-library ([62759c5](https://bitbucket.voiceworks.com/fp/core-component-library/commits/62759c5f0ffa184c38169faa995b311a62f1fe62))
* **core-component-library-vue:** Adds Vue package of core-component-library ([689b8a8](https://bitbucket.voiceworks.com/fp/core-component-library/commits/689b8a8ac227d7da09df03a325e43cfb8d1373e8))
* **core-component-library, snowflake-library:** Moves components `cl-action-bar` and `cl-autocomplete` from `core-component-library` to `snowflake-library` ([28bb3b8](https://bitbucket.voiceworks.com/fp/core-component-library/commits/28bb3b8578533cd0ac795a4207d09d6e4f08a5e6))


### BREAKING CHANGES

* **cl-typography:** The `main.css` file which contains the global styling for the class-based typography, will be deprecated as of this release. Please consider moving over to using the `cl-typography` component as we plan on removing the `main.css` file in a later release.
* **core-component-library:** The `cl-modal` component has been deprecated and can't be used anymore. Please use the `cl-dialog` component instead.
* **core-component-library, snowflake-library:** The `@enreach/core-component-library` doesn't contain the `cl-action-bar` component anymore. Please add the `@enreach/snowflake-library` to use this component.
* **core-component-library, snowflake-library:** The `@enreach/core-component-library` doesn't contain the `cl-autocomplete` component anymore. Please add the `@enreach/snowflake-library` to use this component.





# [8.0.0](https://bitbucket.voiceworks.com/fp/core-component-library/compare/@enreach/core-component-library@7.1.0...@enreach/core-component-library@8.0.0) (2022-01-12)


### Code Refactoring

* **cl-alert:** Renames attribute `type` and slots `button` and `text` ([56e058e](https://bitbucket.voiceworks.com/fp/core-component-library/commits/56e058e1361e7a2e894f33466b2845edc3ef4374))
* **cl-avatar:** Renames attribute `image` to `src` ([563842c](https://bitbucket.voiceworks.com/fp/core-component-library/commits/563842c34e24aff5bd8b48332095c50aba18edff))
* **cl-button:** Improves many attributes to make them more consistent ([d9b30e9](https://bitbucket.voiceworks.com/fp/core-component-library/commits/d9b30e97c1deb0d1e75e4681592b8f79ed8d2b4a))
* **cl-checkbox:** Renames attribute `label-text` to `label` and replaces attribute `state`  ([5b2e592](https://bitbucket.voiceworks.com/fp/core-component-library/commits/5b2e59270562fc6c35129a510b7023a4fdadfe00))
* **cl-chip:** Improves attributes to make them more consistent ([106183d](https://bitbucket.voiceworks.com/fp/core-component-library/commits/106183d7956bbaabe26b04bc31a424413bc96cf5))
* **cl-date-picker:** Renames the attributes `week-day-start` and `select-type` ([efa9ac6](https://bitbucket.voiceworks.com/fp/core-component-library/commits/efa9ac6dc866e73718c44c675728a6e71f441c11))
* **cl-dialog:** Renames attribute `orientation` and adds attribute `open` to toggle the dialog ([8f54e87](https://bitbucket.voiceworks.com/fp/core-component-library/commits/8f54e878e579713288041d69246c9837331fa8ad))
* **cl-divider:** Renames the `orientation` attribute to `vertical` ([eb76a9f](https://bitbucket.voiceworks.com/fp/core-component-library/commits/eb76a9f7954d458e0a050b00b0202a0c21b3e374))
* **cl-grid:** Renames the `grid-direction` attribute to `direction` ([484ea91](https://bitbucket.voiceworks.com/fp/core-component-library/commits/484ea91877f24b809a941373e8bc4705dded84c4))
* **cl-icon-button:** Renames attributes `variation` and `size` ([0626286](https://bitbucket.voiceworks.com/fp/core-component-library/commits/062628657f06093cc105fe4669d27554bab67ff7))
* **cl-link:** Renames the `destination` attribute to `external` ([4b632ad](https://bitbucket.voiceworks.com/fp/core-component-library/commits/4b632adb13c30a96d618cb4cbae34fd29179d7c7))
* **cl-list-item:** Renames the `variation` attribute to `subtle` ([6580939](https://bitbucket.voiceworks.com/fp/core-component-library/commits/65809393ecd0dd059a03907250b5f84b2d63d233))
* **cl-loader:** Renames the attributes `label-position` and `variant` ([8d508b3](https://bitbucket.voiceworks.com/fp/core-component-library/commits/8d508b366de3993fc7a0d3b792cf1f4cc9d5b864))
* **cl-pagination:** Renames attributes `input-text`, `max-visible-pages` and `result-text` ([68b9172](https://bitbucket.voiceworks.com/fp/core-component-library/commits/68b9172f55243778efd9c9c8a4fc81bb467956e2))
* **cl-radio:** Renames attributes `label-text` and `label-position` ([308f6de](https://bitbucket.voiceworks.com/fp/core-component-library/commits/308f6de12190093bf1086af2c1e1878c6fcebc65))
* **cl-scroll-wrapper:** Renames attribute `thumb-size` ([bc10c66](https://bitbucket.voiceworks.com/fp/core-component-library/commits/bc10c6651645c1a43a1510ebbd94e759423a894c))
* **cl-stepper:** Renames `cl-progress-indicator` to `cl-stepper` and renames attribute `size` ([91bd0e8](https://bitbucket.voiceworks.com/fp/core-component-library/commits/91bd0e86e450ca80920d3d660705d1caea5b2206))
* **cl-switch:** Removes attributes `inputId`, `value`, `trueValue` and `falseValue` ([b104cb7](https://bitbucket.voiceworks.com/fp/core-component-library/commits/b104cb78ee0245c483c8eff19ed235f66ad50faa))
* **cl-tab:** Renames the `icon` property to `iconName` and improves documentation ([ac8d198](https://bitbucket.voiceworks.com/fp/core-component-library/commits/ac8d198b7a3b079a337611c1629a26781b8578dd))
* **cl-tabs:** Renames the `divider` property to `border` ([cbed960](https://bitbucket.voiceworks.com/fp/core-component-library/commits/cbed9602dddaf32a39d51d17ace9c70d15cc6d79))
* **cl-thumbnail:** Renames the attributes `image` and `type` ([c35c4ba](https://bitbucket.voiceworks.com/fp/core-component-library/commits/c35c4ba0209a11eb3044ff9e627a87630bd4dd51))
* **cl-toast:** Renames attribute `variation` to `variant` and updates attributes to be more consistent ([790900d](https://bitbucket.voiceworks.com/fp/core-component-library/commits/790900d3d4f4c2d1796acf6c9fab8a935baeaaa3))
* **cl-tooltip:** Renames properties `placement` and `type` ([53c4cad](https://bitbucket.voiceworks.com/fp/core-component-library/commits/53c4cadd5b02c857b8424b5cf4771a0d7bf5299e))
* Hoists and upgrades dependencies in order to decrease build-times and reduce bundle-sizes ([04f0ac7](https://bitbucket.voiceworks.com/fp/core-component-library/commits/04f0ac7670177e95721a9676e3f7d27d5f56e350))


### Features

* **cl-dropzone:** Adds the Dropzone component by reworking the File-uploader component. ([4466176](https://bitbucket.voiceworks.com/fp/core-component-library/commits/4466176e19a581b75a16c046a9d5b0ea63c89c87))


### BREAKING CHANGES

* **cl-alert:** The `button` slot has been renamed to `action`.
* **cl-alert:** The `text` slot has been renamed to `body`.
* **cl-alert:** The `type` attribute has been renamed to `severity`.
* **cl-avatar:** The `image` attribute has been renamed to `src`.
* **cl-button:** The `action` attribute has been removed, with the `cl-icon-button` component as its replacement.
* **cl-button:** The `idle` value of the `state` attribute has been removed.
* **cl-button:** The `input-id` attribute has been removed. The name of the button can be set using `name`.
* **cl-button:** The `size` attribute has been renamed to `small` and is a boolean now.
* **cl-button:** The `state` attribute has been removed and is replaced with two separate attributes `processing` and `error`.
* **cl-button:** The `variation` attribute has been renamed to `variant`.
* **cl-checkbox:** The `state` attribute has been replaced with attributes `checked` and `indeterminate`, which are booleans.
* **cl-chip:** The `counter-value` attribute has been removed and is replaced with the `counter` attribute, which accepts a numeric value.
* **cl-chip:** The `icon-position` attribute has been replaced with `icon-left` and now is a boolean.
* **cl-chip:** The `size` attribute has been replaced with `small` and now is a boolean.
* **cl-date-picker:** Renames the `select-type` attribute to `range` and made it a boolean
* **cl-date-picker:** Renames the `week-start-day` attribute to `start-sunday` and made it a boolean
* **cl-dialog:** The `orientation` attribute has been renamed to `vertical` and is a boolean now.
* **cl-divider:** The `orientation` attribute has been renamed to `vertical` and is a boolean now.
* **cl-dropzone:** The Dropzone component does not contain any logic for uploading files anymore.
* **cl-dropzone:** The File-uploader component has been removed. Please use the Dropzone component instead.
* **cl-grid:** The `grid-direction` attribute has been renamed to `direction`.
* **cl-grid:** The value of the `elevation` attribute now defaults to 0.
* **cl-icon-button:** The `size` attribute has been renamed to `small` and now only accepts a boolean value.
* **cl-icon-button:** The `variation` attribute has been renamed to `variant`.
* **cl-link:** Links will now open internally by default unless the `external` attribute is used.
* **cl-link:** The `destination` attribute has been renamed to `external` and made it a boolean.
* **cl-list-item:** Renames the `variation` attribute to `subtle` and made it a boolean
* **cl-loader:** The `label-position` attribute has been renamed to `label-right` and now is a boolean.
* **cl-loader:** The `variant` property has been renamed to `circular` and now is a boolean.
* **cl-pagination:** The `input-text` attribute has been renamed to `action-label`.
* **cl-pagination:** The `max-visible-pages` attribute has been renamed to `max`.
* **cl-pagination:** The `result-text` attribute has been renamed to `text`.
* **cl-radio:** The `label-position` attribute has been renamed to `label-left` and is a boolean now.
* **cl-radio:** The `label-text` attribute has been renamed to `label`.
* **cl-scroll-wrapper:** The `thumb-size` attribute has been renamed to `small` and is a boolean now.
* **cl-stepper:** Renames `cl-progress-indicator` to `cl-stepper`. The `cl-progress-indicator` is deprecated now.
* **cl-stepper:** The `size` attribute has been renamed to `small` and is a boolean now.
* **cl-switch:** The `toggle` event now returns a boolean instead of a string, based on whether the switch is checked or not.
* **cl-switch:** The attributes `inputId`, `value`, `trueValue` and `falseValue` have been removed.
* **cl-tab:** The `icon` property has been renamed to `iconName`.
* **cl-tabs:** The `divider` property has been renamed to `border`.
* **cl-thumbnail:** The `image` attribute has been renamed to 'src' on the thumbnail.
* **cl-thumbnail:** The `type` attribute has been removed, because the `cl-thumbnail` now allows setting both icon and image at the same time, where icon will be on top of the image.
* **cl-toast:** The `variation` attribute has been renamed to `variant`.
* **cl-tooltip:** The `placement` property has been renamed to `position`.
* **cl-tooltip:** The `type` property has been renamed to `arrow` and now only accepts a boolean value.
* The minimum required Node version has changed from 15 to 16.





# [7.1.0](https://bitbucket.voiceworks.com/fp/core-component-library/compare/@enreach/core-component-library@7.0.0...@enreach/core-component-library@7.1.0) (2021-12-22)


### Features

* **cl-dialog:** Reimplements the Dialog component from scratch ([41d6bd5](https://bitbucket.voiceworks.com/fp/core-component-library/commits/41d6bd5b96d4466b37620275a5338ee82a5eaf60))
* **cl-icon-button:** Adds the Icon-button component ([96e1d32](https://bitbucket.voiceworks.com/fp/core-component-library/commits/96e1d323c0ab9d6664b9d5a138dc02ff26234010))
* **cl-tooltip:** Adds the Tooltip component ([570f465](https://bitbucket.voiceworks.com/fp/core-component-library/commits/570f46519a005e568a75b2a7cff65796c9aadb8e))
* Improves the Storybook implementation and refactors all the stories ([d50eb70](https://bitbucket.voiceworks.com/fp/core-component-library/commits/d50eb701d75f0903a2b87f748571e05485de53eb))





# [7.0.0](https://bitbucket.voiceworks.com/fp/core-component-library/compare/@enreach/core-component-library@6.0.0...@enreach/core-component-library@7.0.0) (2021-12-01)


### Bug Fixes

* **cl-link:** Fixes the styling and improves the documentation of the Link component ([456ea15](https://bitbucket.voiceworks.com/fp/core-component-library/commits/456ea15cf43523ca06062afc1a10cb27c2e67191))


### Code Refactoring

* **cl-loader:** Refactors the Loader component, adds attributes `thickness` and `label-position`, and adds `--loader-thickness` CSS variable ([bae3fb5](https://bitbucket.voiceworks.com/fp/core-component-library/commits/bae3fb5e71b0a8f75961f01af0253686c9b66cd7))
* **cl-scroll-wrapper:** Overhauls the scroll wrapper to use the native scroll behaviour of browsers. ([9d43295](https://bitbucket.voiceworks.com/fp/core-component-library/commits/9d432958bc51d7f2c0be1bbc24cb13eec35b663b))


### Features

* **cl-list-item:** Adds the List-item component ([9bd5c81](https://bitbucket.voiceworks.com/fp/core-component-library/commits/9bd5c811e77592768aa391eef211c73474746bd5))
* **cl-thumbnail:** Adds the Thumbnail component ([23e1e57](https://bitbucket.voiceworks.com/fp/core-component-library/commits/23e1e573aa893b3aa3fe686900e95ae24036f1b6))


### BREAKING CHANGES

* **cl-scroll-wrapper:** Removes the `overflow` attribute in favour of automatic overflow.
* **cl-scroll-wrapper:** Removes the `disabled` attribute.
* **cl-scroll-wrapper:** Renames attribute `persistentScrollBar` to `persistent`.
* **cl-scroll-wrapper:** Alters thumb-size, persistent and thumb-only properties to be more consistent and intuitive.
* **cl-scroll-wrapper:** The CSS variable `--wrapper-padding-inline` is renamed to `-wrapper-margin`.
* **cl-scroll-wrapper:** Much of the functionality is changed or natified. Please make sure that your implementation of the cl-scroll-wrapper is still functional and still looks and functions the as desired.
* **cl-loader:** The `size` attribute now only accepts numeric values in REM, instead of values `S` and `L`.
* **cl-loader:** The `value` attribute now only accepts a number within range 0 - 1, instead of a number within range 0 - 100.
* **cl-loader:** The `label` attribute has been removed and is replaced with an HTML slot. It is now possible to put a paragraph containing the label text between the `<cl-loader></cl-loader>` tags.
* **cl-loader:** The CSS variable `--loader-linear-width` is renamed to `--loader-size`.
* **cl-loader:** Please make sure to read the documentation since many changes have been made.





# [6.0.0](https://bitbucket.voiceworks.com/fp/core-component-library/compare/@enreach/core-component-library@5.0.0...@enreach/core-component-library@6.0.0) (2021-11-10)


### Code Refactoring

* **cl-action-bar:** Renames events `action-bar-open` and `action-bar-close` ([3c1bdac](https://bitbucket.voiceworks.com/fp/core-component-library/commits/3c1bdac63d7833fbc5f42b8506c1434887fd0d51))
* **cl-toast:** Renames method `dismiss` ([9f756b7](https://bitbucket.voiceworks.com/fp/core-component-library/commits/9f756b7bb1b52b2b7111ae9ec5d5832b5a9f8594))


### Features

* **cl-tabs:** Adds the Tabs component ([01e6bf7](https://bitbucket.voiceworks.com/fp/core-component-library/commits/01e6bf7caaed562ea6d2db10bf8ceb96c6e59bf7))


### BREAKING CHANGES

* **cl-action-bar:** The events `action-bar-open` and `action-bar-close` have been renamed to `open` and `close`. Please make sure to update this where you have implemented the Action Bar component.
* **cl-toast:** The public method `dismiss` has been renamed to `dismissEl`. Please make sure to update this where you have implemented the Toast component.





# [5.0.0](http://bitbucket.voiceworks.com/fp/core-component-library/compare/@enreach/core-component-library@4.0.2...@enreach/core-component-library@5.0.0) (2021-10-19)


### Bug Fixes

* **cl-status:** Removes the exclamation mark from the Ringing status component as per design. ([a851c92](http://bitbucket.voiceworks.com/fp/core-component-library/commits/a851c92b3ae2ef6ac15061d8ee2854807ea6cc7f))


### Code Refactoring

* **cl-avatar:** Replaces the `icon` attribute with a `pictogram` attribute. ([a4c4611](http://bitbucket.voiceworks.com/fp/core-component-library/commits/a4c46116296b4b88afc5e1be1f2f5c76464f9403))


### Features

* **cl-alert:** Adds the Alert component ([68f5e71](http://bitbucket.voiceworks.com/fp/core-component-library/commits/68f5e7139dd6e1431217407e0fee512c6e87fc98))
* **cl-avatar:** Adds image-group support to the Avatar component ([6579614](http://bitbucket.voiceworks.com/fp/core-component-library/commits/6579614d6024e4cf7772a18c2f5bb8b662c0835b))
* **cl-button:** Adds 3 CSS Custom Properties ([4369071](http://bitbucket.voiceworks.com/fp/core-component-library/commits/436907114c72cd54521b45eddb55f9e67f2912d6))
* **cl-lightbox:** Adds the Lightbox component ([f434d39](http://bitbucket.voiceworks.com/fp/core-component-library/commits/f434d3920588264ee9a9ba2232ff1a9b84b89a14))
* **cl-link:** Adds the Link component ([164af4a](http://bitbucket.voiceworks.com/fp/core-component-library/commits/164af4a23f6bec7a23b48a9edd1f282d90b4f060))


### BREAKING CHANGES

* **cl-avatar:** The `icon` attribute is replaced with a `pictogram` attribute. Now only pictograms can be used instead of icons.





## [4.0.2](http://bitbucket.voiceworks.com/fp/core-component-library/compare/@enreach/core-component-library@4.0.1...@enreach/core-component-library@4.0.2) (2021-08-27)


### Bug Fixes

* **cl-text-field:** Fixes part of the text-field border disappearing  ([f660c32](http://bitbucket.voiceworks.com/fp/core-component-library/commits/f660c3250d36ff80ed0b907391ee46f22f5407c5))





## [4.0.1](http://bitbucket.voiceworks.com/fp/core-component-library/compare/@enreach/core-component-library@4.0.0...@enreach/core-component-library@4.0.1) (2021-08-13)


### Bug Fixes

* **cl-icon:** Fixes icons having a wrong viewBox ([306a86b](http://bitbucket.voiceworks.com/fp/core-component-library/commits/306a86b0d56b90f4c462671fa33575cf26e936e7))
* Removes the Storybook viewport plugin which was not being used ([e25064b](http://bitbucket.voiceworks.com/fp/core-component-library/commits/e25064b72d36c054757e040842f9a7473059e885))
* **cl-avatar:** Fixes grey outline around avatar ([2335144](http://bitbucket.voiceworks.com/fp/core-component-library/commits/23351445dded3971d80667b2221b4d04ddd863a1))
* **cl-slider:** Fixes slider showing the incorrect slider track color on brand switch ([03b1151](http://bitbucket.voiceworks.com/fp/core-component-library/commits/03b11510d30b98b82eba786d3353243963b842a1))
* **cl-text-field:** Fixes arrow down on the numeric-type text-field, increasing the numeric value ([e336172](http://bitbucket.voiceworks.com/fp/core-component-library/commits/e33617213e78a2967169ac85fa7674887efc45ac))





# [4.0.0](http://bitbucket.voiceworks.com/fp/core-component-library/compare/@enreach/core-component-library@3.0.0...@enreach/core-component-library@4.0.0) (2021-08-12)


### Bug Fixes

* **cl-grid:** Fixes incorrect styling, adds `padding` JSX property and adds `--grid-padding` CSS variable ([6496052](http://bitbucket.voiceworks.com/fp/core-component-library/commits/6496052eb6ad858b64fdcfa3bdc57e2d46da8447))


### Code Refactoring

* **cl-text-field:** Reimplements cl-text-field from scratch ([bb39bb3](http://bitbucket.voiceworks.com/fp/core-component-library/commits/bb39bb34c22a878fd4c0a6ee81f83c8716152147))


### Features

* **cl-chip:** Adds `readOnly` JSX property ([80d14dc](http://bitbucket.voiceworks.com/fp/core-component-library/commits/80d14dc2e4f51f785979dfd33175bf912b17fbfa))
* **cl-pictogram:** Adds the pictogram component. Adds code to Storybook to import the pictograms so they are visible. ([0499289](http://bitbucket.voiceworks.com/fp/core-component-library/commits/049928929db4ec2a3e959008abec172d107f9733))
* **cl-scroll-wrapper:** Adds `disabled` JSX property and adds `--wrapper-padding-inline` CSS variable ([ef3d2ff](http://bitbucket.voiceworks.com/fp/core-component-library/commits/ef3d2ffc0924404a05c0f64e04bbf7fdd01e23ae))


### BREAKING CHANGES

* **cl-scroll-wrapper:** The CSS variable `--max-wrapper-height` is renamed to `--wrapper-max-height`.
* **cl-scroll-wrapper:** The CSS variable `--max-wrapper-width` is renamed to `--wrapper-max-width`.
* **cl-scroll-wrapper:** The added CSS variable `--wrapper-padding-inline` removes inline paddings by default, so please double check that your scroll-wrapper implementations aren't broken.
* **cl-text-field:** The cl-text-field component has been rewritten from scratch, resulting in a lot of (mostly visual) changes. Please take a look at the updated documentation.





# [3.0.0](http://bitbucket.voiceworks.com/fp/core-component-library/compare/@enreach/core-component-library@2.0.1...@enreach/core-component-library@3.0.0) (2021-07-19)


### Bug Fixes

* **cl-loader:** Fixes the size attribute not reflecting ([892055f](http://bitbucket.voiceworks.com/fp/core-component-library/commits/892055f523e8a2720116212e263e56fd48c3532f))
* **cl-slider:** Fixes slider not adding margin to icons with `iconPosition` specified when using TSX ([411eac2](http://bitbucket.voiceworks.com/fp/core-component-library/commits/411eac22c8a5191760c2a8dfc586bc569b836bb0))


### Code Refactoring

* **cl-date-picker:** Refactors cl-date-picker and removes the implementation with cl-text-field ([699d4b0](http://bitbucket.voiceworks.com/fp/core-component-library/commits/699d4b0553a05a7565fa6420899eb2587323d0da))
* **cl-divider:** Refactors cl-divider and adds spacing- and color attributes ([6814751](http://bitbucket.voiceworks.com/fp/core-component-library/commits/6814751f8690b360a5c78513339df86dfa980fc8))


### Features

* **cl-grid:** Adds cl-grid component ([527208e](http://bitbucket.voiceworks.com/fp/core-component-library/commits/527208e7055412673b7f42e4454e656e69fe8f30))
* **cl-toast:** Adds avatar support for the cl-toast component ([ac0bfbd](http://bitbucket.voiceworks.com/fp/core-component-library/commits/ac0bfbd939192b510591c7d8348fac7888abbebb))


### BREAKING CHANGES

* **cl-divider:** Size attribute: `middle` is renamed to `medium`.
* **cl-divider:** Thickness attribute: all values have been renamed. Please take a look at the documentation.
* **cl-date-picker:** The date-picker is completely overhauled, with a lot of changes. Please take a look at the documentation.
* **cl-toast:** Attributes `img` and `icon` have been removed and are replaced with a slot for the cl-avatar component, which can be used for adding an icon or image to the toast





## [2.0.1](http://bitbucket.voiceworks.com/fp/core-component-library/compare/@enreach/core-component-library@2.0.0...@enreach/core-component-library@2.0.1) (2021-07-15)


### Bug Fixes

* **cl-loader:** adds `indeterminate` property so the loading animation loops smoothly ([6e3acd3](http://bitbucket.voiceworks.com/fp/core-component-library/commits/6e3acd3ee83f193455480949765e8564d868f9d1))





# [2.0.0](http://bitbucket.voiceworks.com/fp/core-component-library/compare/@enreach/core-component-library@1.0.0...@enreach/core-component-library@2.0.0) (2021-06-28)


### Features

* **ccl-documentation:** adds default values to CSS Custom Properties table ([c9a8127](http://bitbucket.voiceworks.com/fp/core-component-library/commits/c9a8127a4eee376525d6c8f76366ddd9757b5e63))
* **cl-action-bar:** adds `z-index` CSS variable and adds JSX `maxHeight` property ([ac19a1a](http://bitbucket.voiceworks.com/fp/core-component-library/commits/ac19a1a06291f323f7ef3b556d3011d1846d5ca4))
* **cl-avatar:** adds `size` CSS variable ([b4f4898](http://bitbucket.voiceworks.com/fp/core-component-library/commits/b4f4898b64e837db448953f38fcf5bd407f8cf20))
* **cl-avatar:** adds `size` CSS variable ([6c7d780](http://bitbucket.voiceworks.com/fp/core-component-library/commits/6c7d780596c922faf26ae5bd87fcbc7b3e3b0881))
* **cl-color-picker:** adds cl-color-picker component ([dcf63ea](http://bitbucket.voiceworks.com/fp/core-component-library/commits/dcf63ea0a908e91186c854d37a3f335f41e68891))
* **cl-scroll-wrapper:** adds JSX `thumbOnly` and `persistentScrollBar` properties, and adds support for touch devices ([1e95073](http://bitbucket.voiceworks.com/fp/core-component-library/commits/1e95073b599c14472910cf9b821955adec922764))
* **cl-status:** adds cl-status component ([0c7b4a0](http://bitbucket.voiceworks.com/fp/core-component-library/commits/0c7b4a0fbd32686d6b0fa5c55f08c935d106f1c5))
* **cl-toast:** adds `z-index` CSS variable ([5e15fed](http://bitbucket.voiceworks.com/fp/core-component-library/commits/5e15fed422d49c3f58a6efd91976147970624bd6))


* feat(cl-scroll-wrapper)!: adds `maxHeight` property and renames JSX `size` property to `thumbSize` ([05394bc](http://bitbucket.voiceworks.com/fp/core-component-library/commits/05394bce5db9da2124027d15a5a53d40ee6537bd))
* refactor(cl-divider)!: renames JSX `length` property to `size` ([0c21981](http://bitbucket.voiceworks.com/fp/core-component-library/commits/0c219811e92c1f41c72f2927cc3298acea3da6fc))
* refactor(cl-chip)!: renames JSX `variation` property to `size` ([40983db](http://bitbucket.voiceworks.com/fp/core-component-library/commits/40983db2c2372dad28789dd10d5ac7bce2eab892))
* refactor(cl-checkbox, cl-radio)!: removes error labels ([465281e](http://bitbucket.voiceworks.com/fp/core-component-library/commits/465281eb7123d9fc0cf3dde398a3c0bec014fbc5))
* refactor(cl-button)!: improves styling and behaviour of cl-button ([99bc035](http://bitbucket.voiceworks.com/fp/core-component-library/commits/99bc03510949c7c103381e1221dc585763c78dcf))
* refactor(cl-scroll-wrapper)!: renames the cl-scroll-container to cl-scroll-wrapper ([4c09895](http://bitbucket.voiceworks.com/fp/core-component-library/commits/4c098953db2c60c64cd30703bd5bb2eea729bf39))
* refactor(cl-loader)!: improves implementation of cl-loader ([a9ea758](http://bitbucket.voiceworks.com/fp/core-component-library/commits/a9ea758c60d515521d7b6e4caf8223d6aa1b9b30))


### Bug Fixes

* **cl-icon:** replaces underscore with double dash in icon-names so Storybook would correctly display the icons ([14f044a](http://bitbucket.voiceworks.com/fp/core-component-library/commits/14f044aa8fb47c79856a6665fb13aaa788edcd0b))
* **cl-icons:** removes reference to Brand Library in cl-icons Storybook file that caused commits to fail if the Brand Library was not built ([0164678](http://bitbucket.voiceworks.com/fp/core-component-library/commits/01646787604e3b185040ed22bf6437a8b42ea1a4))
* **cl-text-field:** removes focus outline on Safari, removes number spinners on Firefox and and added notice about unwanted behaviour ([7befb42](http://bitbucket.voiceworks.com/fp/core-component-library/commits/7befb42b0bd7cb26a4040470fd5ffa2ec3043236))


### BREAKING CHANGES

* cl-scroll-wrapper: The JSX attribute `size` is now renamed to `thumbSize`
* cl-divider: The JSX attribute `length` is now renamed to `size`
* cl-chip: The JSX attribute `variation` is now renamed to `size`
* cl-checkbox, cl-radio: property `errorText` for both components has been removed and cannot be used anymore
* cl-button: removes `done` from being an option for the `state`-attribute
* cl-scroll-wrapper: refactors the `cl-scroll-container` and renames it to `cl-scroll-wrapper`
* cl-loader: The attribute `progress` is now renamed to `value`. Also, no label paragraph will be rendered if no label is provided





# [1.0.0](http://bitbucket.voiceworks.com/fp/core-component-library/compare/@enreach/core-component-library@0.6.1...@enreach/core-component-library@1.0.0) (2021-05-06)


### Bug Fixes

* **cl-autocomplete:** fixes autocomplete input automatically being focused on render by the browser when it has been pre-filled ([b8f2e73](http://bitbucket.voiceworks.com/fp/core-component-library/commits/b8f2e73819b3b4855d6b3b9d09e7184e322a8183))
* - added events that fire when action-bar is opened and closed ([9990969](http://bitbucket.voiceworks.com/fp/core-component-library/commits/9990969c1e04f4d7a17043c217e46de9ffbf9c31))
* - added events that fire when action-bar is opened and closed ([043a1c1](http://bitbucket.voiceworks.com/fp/core-component-library/commits/043a1c1d6435f30f4cb71988803f4b78c6bed0df))
* corrected instantiation of component and moved it to beforeEach ([f80e989](http://bitbucket.voiceworks.com/fp/core-component-library/commits/f80e989e9a79816b24ceb591e540034d03724849))
* fixed typo in css property ([597baea](http://bitbucket.voiceworks.com/fp/core-component-library/commits/597baeab7d574e9abdf524352efeda104f0d7d4d))
* moved action-bar.tsx changes to separate PR ([c5ee3fc](http://bitbucket.voiceworks.com/fp/core-component-library/commits/c5ee3fcb88497c88bed12f8c904b42928cfeb334))
* moved action-bar.tsx changes to separate PR ([f3a9b7d](http://bitbucket.voiceworks.com/fp/core-component-library/commits/f3a9b7d93e886fba74c26ead65828ce942be8c14))
* used token for default modal background color ([839257d](http://bitbucket.voiceworks.com/fp/core-component-library/commits/839257d73fd1611717ca632c609285d7e2d6bd63))


### Features

* **cl-action-bar:** adds missing event listeners to cl-action-bar ([e4a9b43](http://bitbucket.voiceworks.com/fp/core-component-library/commits/e4a9b437f810804489b532e42d14e1a812324bb4))
* added unit test for action-bar.tsx ([96331af](http://bitbucket.voiceworks.com/fp/core-component-library/commits/96331af3a83f02a8cf240f1f2ebbb99e50f00e0a))
* **cl-modal:** adds CSS properties to configure the width, height, z-index and background color of the modal ([f7b73f7](http://bitbucket.voiceworks.com/fp/core-component-library/commits/f7b73f7cfc996ec2cd4dff5dc15cb8d93a64b2ce))
* added CSS properties to configure the width, height, z-index and background color of the modal ([d9c07c8](http://bitbucket.voiceworks.com/fp/core-component-library/commits/d9c07c878364977b939e691a7b20dfa3a6c724e0))


* fix(cl-pagination)!: fixes button states and removes hardcoded strings ([cfa8af9](http://bitbucket.voiceworks.com/fp/core-component-library/commits/cfa8af9a3cbb31717b56dcc19ff7ee4c5c7648c6))


### BREAKING CHANGES

* cl-pagination: replaces hardcoded text with properties `inputText` and `resultText`

* commit 'a91cecd5182f0016b08f9054a13509eedc7104f3':
  chore(pagination): Fixing some of the BEM on pagination component
  fix(pagination)! : Storing concatenative values into one string for an easy translation of the same
  chore(pagination): Improving and fixing the pagination component





## [0.6.1](http://bitbucket.voiceworks.com/fp/core-component-library/compare/@enreach/core-component-library@0.6.0...@enreach/core-component-library@0.6.1) (2021-04-16)


### Bug Fixes

* **cl-avatar:** stretched avatar images on Safari browser ([3b8b23e](http://bitbucket.voiceworks.com/fp/core-component-library/commits/3b8b23e009bf0368a3011e80b0b09ba14b995372))
* **cl-textfield:** remove minimum width for fullwidth textfield ([8f4ab4d](http://bitbucket.voiceworks.com/fp/core-component-library/commits/8f4ab4d575d924a5215fece6a81b62b494e6a872))
* **cl-textfield:** remove minimum width for fullwidth textfield ([58312f6](http://bitbucket.voiceworks.com/fp/core-component-library/commits/58312f6b7a97e58926038b804078bcbd66cca9d7))





# [0.6.0](http://bitbucket.voiceworks.com/fp/core-component-library/compare/@enreach/core-component-library@0.5.0...@enreach/core-component-library@0.6.0) (2021-03-26)


### Bug Fixes

* **avatar, badge, button, checkbox, icon, text-field:** wrong icon size ([f8f798a](http://bitbucket.voiceworks.com/fp/core-component-library/commits/f8f798a1d44ab3fbeec1055246274705d72b809d))
* **checkbox:** Changed the readme page to have correct code to show the checkbox's checked value. ([00e1cdc](http://bitbucket.voiceworks.com/fp/core-component-library/commits/00e1cdcc0695d80c5bd979a9afaefcb00d3e1757))
* **cl-slider:** slider thumb behaviour improved ([18b1a8d](http://bitbucket.voiceworks.com/fp/core-component-library/commits/18b1a8d7c86ec984ffabb3205b8f9e105ba7c3b1))
* **icon-page:** toast not unmounted correctly ([a7b86da](http://bitbucket.voiceworks.com/fp/core-component-library/commits/a7b86da029c7fc07dbcd06a93bff96017f1226db))
* **modal:** Added a z-index so the modal properly displays above all other content. ([f222736](http://bitbucket.voiceworks.com/fp/core-component-library/commits/f2227360f9d507b6d4689df49b06b0db667ee8e6))
* convert dialog shadowDOM to scoped ([12a062f](http://bitbucket.voiceworks.com/fp/core-component-library/commits/12a062f9113027d607e20ee3e0104b902aabaee9))
* Failing test of progress-indicator component ([30fad3c](http://bitbucket.voiceworks.com/fp/core-component-library/commits/30fad3c5b5d6c2db9ba32cec5a0d36aefd64be96))
* Reverted css reset on spacings ([d577be2](http://bitbucket.voiceworks.com/fp/core-component-library/commits/d577be242d8c42ddb9fa943edb9590c8449deee4))


* fix(modal)!: show modal correctly on top of other element ([31e12d3](http://bitbucket.voiceworks.com/fp/core-component-library/commits/31e12d38becdfc165af04bd61a21b52bf58d087b))
* feat(icon)!: add `size` property to icon-component ([c0aa682](http://bitbucket.voiceworks.com/fp/core-component-library/commits/c0aa6821d4d41260f15b7a685e10c65f213db9d9))
* refactor!: drop toast-controller ([d8c6d4a](http://bitbucket.voiceworks.com/fp/core-component-library/commits/d8c6d4a1747d910889643c10ee429597f8d55ff4))
* refactor!: improved number variant of textfield ([c478520](http://bitbucket.voiceworks.com/fp/core-component-library/commits/c4785204e3f1be9e17ef5f39a760db3d8d3ac2f2))
* fix!: apply a css reset on all components ([88806d2](http://bitbucket.voiceworks.com/fp/core-component-library/commits/88806d2d7b32ca557b4e7dd7a8eba90ed3fea1b2))
* refactor!: drop toast-controller ([c0b2101](http://bitbucket.voiceworks.com/fp/core-component-library/commits/c0b21010200ccebabae8d63925fc99ddeba71577))


### Features

* **badge-component:** add badge-component of type `counter` ([fa01b80](http://bitbucket.voiceworks.com/fp/core-component-library/commits/fa01b80ebe32b171b69c24aee385daea598fcdad))
* **cl-slider:** Updates styling according to new updated design. ([c775ad2](http://bitbucket.voiceworks.com/fp/core-component-library/commits/c775ad28f8aa1a5f7389658d880a14a5c088277c))
* **loader:** Adds loader component. ([3b30114](http://bitbucket.voiceworks.com/fp/core-component-library/commits/3b3011425e6a2f51d2a983576a89b32b04f52fff))
* **progress-indicator:** Adds unit tests. ([37f46f0](http://bitbucket.voiceworks.com/fp/core-component-library/commits/37f46f0e0e5910f3a5498606d34cdb4f75d6b177))
* **progress-indicator:** Updates the progress indicator according to the new design. ([adca3c4](http://bitbucket.voiceworks.com/fp/core-component-library/commits/adca3c4128e17b6505bf840b507301924e1e1dab))


### Reverts

* Revert "chore(modal): Removed Z-index attribute in favour of a style tag altering the --z-index property." ([ec8dc65](http://bitbucket.voiceworks.com/fp/core-component-library/commits/ec8dc650bcac60419d817771c5d13df9553beacd))
* Revert "chore(file uploader): Adding a link to the notion site" ([ff3ea1a](http://bitbucket.voiceworks.com/fp/core-component-library/commits/ff3ea1aeece05f91e4a69617b044e92b1b74024c))


### BREAKING CHANGES

* modal may now overlap other elements, which might be unexpected behavior

* commit '4082617b25bef38cdadb6068e63348506c8b9b0b':
  chore(modal): changed some code to remove a constant & made storybook more intuitive.
  chore(modal): removed the --z-index variable in the CSS due to redundancy.
  Revert "chore(modal): Removed Z-index attribute in favour of a style tag altering the --z-index property."
  chore(modal): Removed Z-index attribute in favour of a style tag altering the --z-index property.
  chore(modal): Added the ability to specify a z-index variable instead of just a number.
  chore(modal): Added z-index attribute.
  chore(modal): Remove unnecessary z-index.
  chore(brand-library): Rename 'height-zindex' to 'z-index-level'.
  chore(modal): Use variable for z-index instead of fixed value.
  feat(brand-library): Added z-indices to the brand library.
  fix(modal): Added a z-index so the modal properly displays above all other content.
* replace all css styling for icon size with the `size` property

docs(icon):  improved styling of README and added component examples

* commit 'f772cbc90c9fa31209ce280e1df2209bb62fdf26':
  CCL-200: Icon size is now based on token --size-spacing-1
  chore(icon): Update info for prop size
  chore(icon): Fix typo
  chore(icon): Update size prop to just input number
  chore(icon): Update size prop to just input number
  chore(icon): Update unit
  chore(icon): Update prop size to also use the desired unit
  chore(icon): Update prop size to also use the desired unit
  chore(icon): Add new prop to icon
  chore(icon): Add new prop to icon
* The toast-controller element has been dropped and instead the toast component works independently

Merge in FP/core-component-library from CCL-169 to master

* commit '64c72ea34ae9bff40ad40d67f3334eace286e526':
  ref: improve unit tests
  refactor!: drop toast-controller
* Default arrow up and down of number textfield have been removed now, so any eventhandlers based on those are now broken

Merge in FP/core-component-library from CCL-97 to master

* commit '23f57a7dc734e6dfe55136f1c07ee43795a778cf':
  chore(textfield): Update readme
  chore(textfield): Update the readme
  chore(textfield): Apply feedback with linter changes
  chore(textfield): Apply feedback
  CCL-97: Rebased on master
  chore(Textfield): Replace default arrows of the number input with icons
* This might mess up layouts that have been manually fixing the bigger than usual margins/paddings

Merge in FP/core-component-library from CCL-199 to master

* commit '68474957680b04a567207913d185f8d6d82550aa':
  chore(reset.scss): Update order list
  chore(reset.scss): Apply a reset on all components
  chore(reset.scss): Apply a reset on all components
* The toast-controller element has been dropped and instead the toast component works independently





# [0.5.0](http://bitbucket.voiceworks.com/fp/core-component-library/compare/@enreach/core-component-library@0.4.0...@enreach/core-component-library@0.5.0) (2021-02-17)


### Bug Fixes

* break cl-text-field helper text after word and not mid-word ([8ee534a](http://bitbucket.voiceworks.com/fp/core-component-library/commits/8ee534a363ba7ebd28fc92f2ab096aed6cdebab4))
* don't prepend numbers 1-9 with a 0 in chip component ([8d937e7](http://bitbucket.voiceworks.com/fp/core-component-library/commits/8d937e7d93ab6bf81534cc4d6b52a93d9099802b))
* lowercased eventname for page change ([f1507f5](http://bitbucket.voiceworks.com/fp/core-component-library/commits/f1507f5aa1c20f297b7e0d89d41fbbe4b3ada6e2))
* un-updated used oninputchange properties ([b02c955](http://bitbucket.voiceworks.com/fp/core-component-library/commits/b02c955d1b80bac02142b467ccbc5ba10c41186d))


* refactor!: switch from class based css to attribute based css ([b5ac1cc](http://bitbucket.voiceworks.com/fp/core-component-library/commits/b5ac1cc6ea6b32e5503633096c84c626db948db3))


### chore

* **divider:** Move to Attribute CSS. ([3cf2fb8](http://bitbucket.voiceworks.com/fp/core-component-library/commits/3cf2fb8bd4e3db8aea863453125984aedb9403fb))


### BREAKING CHANGES

* Renamed attribute `size` to `length`

* commit '4f8a751592deaef2d53282a5744718e5bdf2e7af':
  CCL-50: Fixed pr comment
  chore(divider): Readded readme change that got removed in merge.
  chore(divider): Automatic prettier syntax change.
  chore(divider): Move to Attribute CSS. fix(divider): Incorrect behaviour. chore(divider): reworked the readme a bit.
* **divider:** size attribute is renamed to length.





# [0.4.0](http://bitbucket.voiceworks.com/fp/core-component-library/compare/@enreach/core-component-library@0.3.0...@enreach/core-component-library@0.4.0) (2021-02-12)


### Bug Fixes

* - added watchers to value and checked property of switch so these will change when altered from the outside ([8b90af4](http://bitbucket.voiceworks.com/fp/core-component-library/commits/8b90af4cc93cbb173efb246185c3ad11ca525bcb))
* - added watchers to value and checked property of switch so these will change when altered from the outside ([a84151a](http://bitbucket.voiceworks.com/fp/core-component-library/commits/a84151ac982791946c49523072034a9a78ede25f))
* CCL-147 Added border around the switch thumb on focus state ([c9a1c38](http://bitbucket.voiceworks.com/fp/core-component-library/commits/c9a1c38d43228ccc6fb79959f7560444bfc9ed30))
* CCL-76 Resolves console error for not using ID ([2394d3c](http://bitbucket.voiceworks.com/fp/core-component-library/commits/2394d3c7941de5ce53b31aa55943aa11f1b27c56))
* changed EmitPageChange to pageChanged ([a997a38](http://bitbucket.voiceworks.com/fp/core-component-library/commits/a997a380455e759aa8119512568e0d33d53095e6))
* fixed css, removed redundant html ([e5c8ff4](http://bitbucket.voiceworks.com/fp/core-component-library/commits/e5c8ff4ff3042d10d4f453ebf9b9e20dd047219e))
* fixed css, removed redundant html ([8f4201e](http://bitbucket.voiceworks.com/fp/core-component-library/commits/8f4201eb10ee35ec60fad583665e1edef2a6702e))
* made inputchange event only lowercase, removed camel-cased version ([d8bc0a1](http://bitbucket.voiceworks.com/fp/core-component-library/commits/d8bc0a1bcf0583a5550c62465cd9d22b39729b9b))
* refactored pagination ([ef85e28](http://bitbucket.voiceworks.com/fp/core-component-library/commits/ef85e2810cfe943edad0ab9a9d1790151ff7307d))
* uppercased event name ([a91fef6](http://bitbucket.voiceworks.com/fp/core-component-library/commits/a91fef6eee7727e65a607f03cbd01b7ef7a90f84))


### Features

* refactored pagination ([cbca9b4](http://bitbucket.voiceworks.com/fp/core-component-library/commits/cbca9b4256726ccbf27bc12244bda573eadfc963))
* refactored pagination component ([1e2782d](http://bitbucket.voiceworks.com/fp/core-component-library/commits/1e2782d590101f72c23525078809784c2ff2f82b))





# [0.3.0](http://bitbucket.voiceworks.com/fp/core-component-library/compare/@enreach/core-component-library@0.2.2...@enreach/core-component-library@0.3.0) (2021-01-04)


### Bug Fixes

* fix for alignment of button ([020cb1d](http://bitbucket.voiceworks.com/fp/core-component-library/commits/020cb1dae74d0742796a26768ae89a1ada8cc570))
* fixed layout issues ([2ca7db0](http://bitbucket.voiceworks.com/fp/core-component-library/commits/2ca7db082b94dfa945098e26239bed9f148ceb69))
* fixed layout issues ([2ab8c08](http://bitbucket.voiceworks.com/fp/core-component-library/commits/2ab8c08b715ad81262188e7e03fd8ba635af7651))
* minDate and maxDate can now also be specified as literal dates ([f9e99cd](http://bitbucket.voiceworks.com/fp/core-component-library/commits/f9e99cd7d9a3a92cf468dd13b53af6f3180ab135))
* minDate and maxDate can now also be specified as literal dates ([586295d](http://bitbucket.voiceworks.com/fp/core-component-library/commits/586295d385b5138d884128c968852caabcb4a947))
* Removes hotkey shortcuts for storybook ([5e3e95a](http://bitbucket.voiceworks.com/fp/core-component-library/commits/5e3e95ac2b5f77ca7aa2d9b4c49ef501f4a6e5b1))
* replaced hard-coded height with variable ([8946157](http://bitbucket.voiceworks.com/fp/core-component-library/commits/89461570967a2cd5ed9715f872b7e7cd376fa6ab))


### Features

* fileuploader new design ([eb20826](http://bitbucket.voiceworks.com/fp/core-component-library/commits/eb20826511bd3459e353111c84361e1daff5d799))
* fileuploader new design ([e5bf81a](http://bitbucket.voiceworks.com/fp/core-component-library/commits/e5bf81ad79d1a4f060a9a5a537dbdf1441378362))
* new design file uploader ([86d30c9](http://bitbucket.voiceworks.com/fp/core-component-library/commits/86d30c905aff22a304cabf3a3328a1b9b27f986e))
* small variation of file uploader ([ea572e9](http://bitbucket.voiceworks.com/fp/core-component-library/commits/ea572e9a5a99a15bf1d7e7c1aeafe269d9c59a11))





## [0.2.2](http://bitbucket.voiceworks.com/fp/core-component-library/compare/@enreach/core-component-library@0.2.1...@enreach/core-component-library@0.2.2) (2020-11-20)


### Bug Fixes

* fixed padding of td inside datepicker ([7a6793b](http://bitbucket.voiceworks.com/fp/core-component-library/commits/7a6793b21304bee88d9d8b824abe16b24771f5a4))





## [0.2.1](http://bitbucket.voiceworks.com/fp/core-component-library/compare/@enreach/core-component-library@0.2.0...@enreach/core-component-library@0.2.1) (2020-11-19)


### Bug Fixes

* fixed failing (useless) test ([4e86c73](http://bitbucket.voiceworks.com/fp/core-component-library/commits/4e86c73fb9cbe208f2bb1374010a908f23eeae48))
* fixed rendering of button with state "processing" in Safari ([33f6e40](http://bitbucket.voiceworks.com/fp/core-component-library/commits/33f6e40abf64fd9926f1eaa3a769380c86a0b69d))
* fixed rendering of button with state "processing" in Safari ([91fe366](http://bitbucket.voiceworks.com/fp/core-component-library/commits/91fe3669a1ac82627987f423a4e9a69aa755e5e1))





# [0.2.0](http://bitbucket.voiceworks.com/fp/core-component-library/compare/@enreach/core-component-library@0.1.7...@enreach/core-component-library@0.2.0) (2020-11-18)


### Bug Fixes

* - now throws an error when date entered in text field is not within allowed range ([d086837](http://bitbucket.voiceworks.com/fp/core-component-library/commits/d086837ffb67f1596f570ebf5db73eb46571c596))
* fixed handling of date after error state has occured ([d1aeabc](http://bitbucket.voiceworks.com/fp/core-component-library/commits/d1aeabcc8983ba08bae9041f477b59ae354c7dfb))
* fixed height of textfield in Firefox and Safari ([9b9ff50](http://bitbucket.voiceworks.com/fp/core-component-library/commits/9b9ff506613d94065e184a194125b47fcff4a50d))
* fixed heights of buttons with "processing" and "error" state and buttons with icons ([dd1fbc8](http://bitbucket.voiceworks.com/fp/core-component-library/commits/dd1fbc83ebc9a2200655317907e0887216a734ff))
* fixed merge conflict ([3799f25](http://bitbucket.voiceworks.com/fp/core-component-library/commits/3799f25d364ce917b5cd69e34dfb1cd723c17905))
* fixed merge conflict ([6e99cf3](http://bitbucket.voiceworks.com/fp/core-component-library/commits/6e99cf35e0b9771364ededad2c5b40ba48ac0e72))
* fixed selecting, setting and formatting of time ([9c009c2](http://bitbucket.voiceworks.com/fp/core-component-library/commits/9c009c234f90ac9ee5dfc30534d586e2df621bd5))


### Features

* - implemented inline spritesheet ([bb41fc8](http://bitbucket.voiceworks.com/fp/core-component-library/commits/bb41fc8bb2fde0e31aebaababd09728fee6f28ef))
* - implemented inline spritesheet ([ce421dd](http://bitbucket.voiceworks.com/fp/core-component-library/commits/ce421dd4c433276a9ca1e099eaa8cdcd45d338b0))
* add BrandLibrary class ([1fa2afc](http://bitbucket.voiceworks.com/fp/core-component-library/commits/1fa2afc205a03d069c8e31a032cab812a88f06ab))
* brand switch ([7e2563a](http://bitbucket.voiceworks.com/fp/core-component-library/commits/7e2563a16be7f4dc8dc5900c5693b382d9a0ecdf))
* implemented preselection of values ([9622a2c](http://bitbucket.voiceworks.com/fp/core-component-library/commits/9622a2c571ee2bef3fb409e612308c52057002d9))
* new sprite ([a274508](http://bitbucket.voiceworks.com/fp/core-component-library/commits/a2745086dc90724646d1cffaede61bf931bc7c09))





# [0.2.0](http://bitbucket.voiceworks.com/fp/core-component-library/compare/@enreach/core-component-library@0.1.7...@enreach/core-component-library@0.2.0) (2020-11-18)


### Bug Fixes

* - now throws an error when date entered in text field is not within allowed range ([d086837](http://bitbucket.voiceworks.com/fp/core-component-library/commits/d086837ffb67f1596f570ebf5db73eb46571c596))
* fixed handling of date after error state has occured ([d1aeabc](http://bitbucket.voiceworks.com/fp/core-component-library/commits/d1aeabcc8983ba08bae9041f477b59ae354c7dfb))
* fixed height of textfield in Firefox and Safari ([9b9ff50](http://bitbucket.voiceworks.com/fp/core-component-library/commits/9b9ff506613d94065e184a194125b47fcff4a50d))
* fixed heights of buttons with "processing" and "error" state and buttons with icons ([dd1fbc8](http://bitbucket.voiceworks.com/fp/core-component-library/commits/dd1fbc83ebc9a2200655317907e0887216a734ff))
* fixed merge conflict ([3799f25](http://bitbucket.voiceworks.com/fp/core-component-library/commits/3799f25d364ce917b5cd69e34dfb1cd723c17905))
* fixed merge conflict ([6e99cf3](http://bitbucket.voiceworks.com/fp/core-component-library/commits/6e99cf35e0b9771364ededad2c5b40ba48ac0e72))
* fixed selecting, setting and formatting of time ([9c009c2](http://bitbucket.voiceworks.com/fp/core-component-library/commits/9c009c234f90ac9ee5dfc30534d586e2df621bd5))


### Features

* - implemented inline spritesheet ([bb41fc8](http://bitbucket.voiceworks.com/fp/core-component-library/commits/bb41fc8bb2fde0e31aebaababd09728fee6f28ef))
* - implemented inline spritesheet ([ce421dd](http://bitbucket.voiceworks.com/fp/core-component-library/commits/ce421dd4c433276a9ca1e099eaa8cdcd45d338b0))
* add BrandLibrary class ([1fa2afc](http://bitbucket.voiceworks.com/fp/core-component-library/commits/1fa2afc205a03d069c8e31a032cab812a88f06ab))
* brand switch ([7e2563a](http://bitbucket.voiceworks.com/fp/core-component-library/commits/7e2563a16be7f4dc8dc5900c5693b382d9a0ecdf))
* implemented preselection of values ([9622a2c](http://bitbucket.voiceworks.com/fp/core-component-library/commits/9622a2c571ee2bef3fb409e612308c52057002d9))
* new sprite ([a274508](http://bitbucket.voiceworks.com/fp/core-component-library/commits/a2745086dc90724646d1cffaede61bf931bc7c09))





## [0.1.7](http://bitbucket.voiceworks.com/fp/core-component-library/compare/@enreach/core-component-library@0.1.6...@enreach/core-component-library@0.1.7) (2020-11-12)


### Bug Fixes

* datepicker alignment ([cea53e1](http://bitbucket.voiceworks.com/fp/core-component-library/commits/cea53e18888b17fa228e2b0e69b72789ce9ba7df))
* fixed dynamic alignment of datepicker dropdown ([76c427e](http://bitbucket.voiceworks.com/fp/core-component-library/commits/76c427e7f6b82deb647af95f237826ae7ed347ce))





## [0.1.6](http://bitbucket.voiceworks.com/fp/core-component-library/compare/@enreach/core-component-library@0.1.5...@enreach/core-component-library@0.1.6) (2020-11-05)


### Bug Fixes

* added 'reflect: true' to button props since the :host() styling does not work otherwise ([9d8f81e](http://bitbucket.voiceworks.com/fp/core-component-library/commits/9d8f81e1edb685a2b77139385fa5e9fbfa9a47b3))





## [0.1.5](http://bitbucket.voiceworks.com/fp/core-component-library/compare/@enreach/core-component-library@0.1.4...@enreach/core-component-library@0.1.5) (2020-11-05)


### Bug Fixes

* added 'reflect: true' to button state since it can otherwise not be changed from the outside ([39ebd7a](http://bitbucket.voiceworks.com/fp/core-component-library/commits/39ebd7a4b87c8823b5e7d9f6799f02eee8d8ad72))





## [0.1.4](http://bitbucket.voiceworks.com/fp/core-component-library/compare/@enreach/core-component-library@0.2.0...@enreach/core-component-library@0.1.4) (2020-11-04)

**Note:** Version bump only for package @enreach/core-component-library





# [0.2.0](http://bitbucket.voiceworks.com/fp/core-component-library/compare/@enreach/core-component-library@0.1.3...@enreach/core-component-library@0.2.0) (2020-11-04)


### Bug Fixes

* added display: inline-block ([69fb078](http://bitbucket.voiceworks.com/fp/core-component-library/commits/69fb0782f339c2f2d64942a6f5285bac5c70be04))
* added eventhandler to close dropdown of action bar when user clicks outside it. ([8d86356](http://bitbucket.voiceworks.com/fp/core-component-library/commits/8d86356626c97b9dcf0eff0a84a8beb163833f96))
* added eventhandler to close dropdown of action bar when user clicks outside it. ([02d9e75](http://bitbucket.voiceworks.com/fp/core-component-library/commits/02d9e7594f79789c6bacb7b585369790b34ad800))
* added newlines to scss ([13b01c3](http://bitbucket.voiceworks.com/fp/core-component-library/commits/13b01c3ff6d3512ce2c03ec0222e19130298b19b))
* container for label is no longer rendered when label is not present ([b3d1b8d](http://bitbucket.voiceworks.com/fp/core-component-library/commits/b3d1b8d1ab73cb55a03ea49e6b732149337c92cb))
* fixed border for processing state ([7f78e4d](http://bitbucket.voiceworks.com/fp/core-component-library/commits/7f78e4d536f23bea744cfdc3b40e808c5edde6f0))
* fixed change event on checkbox ([11d0b8d](http://bitbucket.voiceworks.com/fp/core-component-library/commits/11d0b8d1730c588407f5f0fc0d36a3fd924db2d0))
* refactored stylesheet ([6ecca90](http://bitbucket.voiceworks.com/fp/core-component-library/commits/6ecca9006ea7771e20b7a4d5cd98429bc3339d33))
* replaced ternary with && in render ([c5b4f65](http://bitbucket.voiceworks.com/fp/core-component-library/commits/c5b4f65d2c79985bbe33208318f8a917a9d2f4d0))


### Features

* added states 'processing', 'done' and 'error' to buttons ([7a3a139](http://bitbucket.voiceworks.com/fp/core-component-library/commits/7a3a139e57aa5d522380e4d39710c32165f9d8ab))
* refactored stylesheet to use :host() styling ([a7ea20b](http://bitbucket.voiceworks.com/fp/core-component-library/commits/a7ea20b68ddc71d76225378acfde4bafa9d0073c))
* refactored stylesheet to use :host() styling ([7c738be](http://bitbucket.voiceworks.com/fp/core-component-library/commits/7c738be54bf399a46e77871e2dc6d106a65e5c91))






## [0.1.3](http://bitbucket.voiceworks.com/fp/core-component-library/compare/@enreach/core-component-library@0.1.2...@enreach/core-component-library@0.1.3) (2020-11-02)


### Bug Fixes

* eslint-disable added ([6971419](http://bitbucket.voiceworks.com/fp/core-component-library/commits/69714194776743841be35cf4fbcc3ee1b3225c40))
* refactored for-of loop ([03da3d7](http://bitbucket.voiceworks.com/fp/core-component-library/commits/03da3d702c216e6325a2eafb39e9b2bb0e594f54))
* refactored for-of loop ([b3bda5e](http://bitbucket.voiceworks.com/fp/core-component-library/commits/b3bda5e4f93f999c3667db1d3731afa9c83d6d6f))
* removed actual uploading from file uploader, implemented methods to set progress, done and error state of file upload ([36a2147](http://bitbucket.voiceworks.com/fp/core-component-library/commits/36a2147e92c3071a0907c724b9f2bdb920557731))
* replaced px value with css custom property ([4c9d5cd](http://bitbucket.voiceworks.com/fp/core-component-library/commits/4c9d5cdd7bb765465c0237d879e27bdcb57a7223))





## [0.1.2](http://bitbucket.voiceworks.com/fp/core-component-library/compare/@enreach/core-component-library@0.1.1...@enreach/core-component-library@0.1.2) (2020-11-02)


### Bug Fixes

* replaced array spread with Array.from() since this causes errors in OFE ([bb67f08](http://bitbucket.voiceworks.com/fp/core-component-library/commits/bb67f085dd287f3507c0937f031d955ff60d44d4))





## [0.1.1](http://bitbucket.voiceworks.com/fp/core-component-library/compare/@enreach/core-component-library@0.1.0...@enreach/core-component-library@0.1.1) (2020-10-30)


### Bug Fixes

* value of textfield is now again set in handleInput() ([0c8cdf3](http://bitbucket.voiceworks.com/fp/core-component-library/commits/0c8cdf3cd03208efb35d328823358ff465f4aadd))





# [0.1.0](http://bitbucket.voiceworks.com/fp/core-component-library/compare/@enreach/core-component-library@0.0.28...@enreach/core-component-library@0.1.0) (2020-10-30)


### Bug Fixes

* - date can now be typed in text field and will cause the date picker to update and vice versa ([43175fa](http://bitbucket.voiceworks.com/fp/core-component-library/commits/43175fa5e3b4d72cb56cd4eba6029b6f8f36dca3))
* - date can now be typed in text field and will cause the date picker to update and vice versa ([e228078](http://bitbucket.voiceworks.com/fp/core-component-library/commits/e228078710d61a63761e34fad7b334759056d3a9))
* - fixed closing modal when overlay is clicked and overlayClose = true ([d74668e](http://bitbucket.voiceworks.com/fp/core-component-library/commits/d74668e0fbfb09f578ed9fc2e5ee21e04e3d72ff))
* - fixed closing modal when overlay is clicked and overlayClose = true ([e359dc9](http://bitbucket.voiceworks.com/fp/core-component-library/commits/e359dc9c22b6989d021fbd432dab4cb683ad3153))
* - fixes for clear data flow ([e254faf](http://bitbucket.voiceworks.com/fp/core-component-library/commits/e254fafb2fbdb71bda7981aefb5359cadab8f3ea))
* - removed left over comments ([e6783b9](http://bitbucket.voiceworks.com/fp/core-component-library/commits/e6783b99dfff48f18966b90bb0a54a7dcef1162e))
* - removed left over comments ([105647f](http://bitbucket.voiceworks.com/fp/core-component-library/commits/105647f2c500da62db37309c80d273deaf2b29e7))
* disabled mask ([1296976](http://bitbucket.voiceworks.com/fp/core-component-library/commits/12969761312021fcc238c1dee97e3fc29feed2ee))
* explicit font-size for cl-textfield since Misja noticed it changes in OFE between textfield and autocomplete ([9332c84](http://bitbucket.voiceworks.com/fp/core-component-library/commits/9332c84b83fbfa9c1802228cc1f0b48811fdc011))
* fixed merge conflict ([68c5921](http://bitbucket.voiceworks.com/fp/core-component-library/commits/68c5921ff16ce052239435421d4e43b6879125d9))
* fixed unwanted scrollbar in dropdown of action bar ([fbe9c47](http://bitbucket.voiceworks.com/fp/core-component-library/commits/fbe9c47c1eba3153fef33c712c3d46c4c73b975d))


### Features

* implemented masking of textfield inside datepicker ([388dde7](http://bitbucket.voiceworks.com/fp/core-component-library/commits/388dde79142b5dcde4871eba83b8fba5567bda97))
* implemented minimum and maximum date that can be selected and exclusion of weekends from selection ([883afcd](http://bitbucket.voiceworks.com/fp/core-component-library/commits/883afcd5a0e4f9a3c6b28ee56ee72ad76230beea))
* implemented minimum and maximum date that can be selected and exclusion of weekends from selection ([8a4bb78](http://bitbucket.voiceworks.com/fp/core-component-library/commits/8a4bb7891064e2e315a79b167cf60521f0d8168f))
* **date-picker:** Adds cl-date-picker component. ([c886810](http://bitbucket.voiceworks.com/fp/core-component-library/commits/c886810e84d31276f976e95ae30a57447cd3e532))





## [0.0.28](http://bitbucket.voiceworks.com/fp/core-component-library/compare/@enreach/core-component-library@0.0.27...@enreach/core-component-library@0.0.28) (2020-10-26)

**Note:** Version bump only for package @enreach/core-component-library





## [0.0.28](http://bitbucket.voiceworks.com/fp/core-component-library/compare/@enreach/core-component-library@0.0.27...@enreach/core-component-library@0.0.28) (2020-10-26)

**Note:** Version bump only for package @enreach/core-component-library






## 0.0.27 (2020-10-22)

**Note:** Version bump only for package @enreach/core-component-library
