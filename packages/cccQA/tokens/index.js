(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.BrandLibrary = factory());
})(this, (function () { 'use strict';

  class BrandLibrary {
    async setBrand(brand) {
      if (!brand) throw new Error(`BrandLibrary.setBrand: Given invalid brand ${brand}`)

      await Promise.all([this.setBrandTokens(brand), this.setFonts(brand), this.setBrandIcons(brand)]);

      this.setBrandGraphics(brand);
      this.setBrandPictograms(brand);
    }

    async setBrandTokens(brand) {
      try {
        const { tokens } = await import(`./web/${brand}/tokens/token-dictionary.js`);

        await this.setTokens(tokens);
      } catch (error) {
        throw new Error(`BrandLibrary.setBrandTokens: ${error.message}`)
      }
    }

    removeDOMElements(documentElement, position) {
      const documentElements = Array.from(documentElement);

      documentElements.forEach(
        (element, index) =>
          (position === 'afterbegin' ? index > 0 : index < documentElements.length - 1) && element.remove()
      );
    }

    async setFonts(brand) {
      try {
        const fonts = await import(`./web/${brand}/fonts/fonts.css`);
        const sfonts = fonts.default ? fonts.default : fonts;

        document.head.insertAdjacentHTML('afterbegin', `<style id="fonts">${sfonts}</style>`);

        this.removeDOMElements(document.head.querySelectorAll('#fonts'), 'afterbegin');
      } catch (error) {
        throw new Error(`BrandLibrary.setFonts: ${error.message}`)
      }
    }

    async setBrandIcons(brand) {
      try {
        const module = await import(`./web/${brand}/icons/sprite-icons-${brand}.svg`);
        const svg = await (await fetch(module.default)).text();

        document.body.insertAdjacentHTML('afterbegin', svg);

        this.removeDOMElements(document.body.getElementsByClassName('icons-sprite-sheet'), 'afterbegin');
      } catch (error) {
        throw new Error(`BrandLibrary.setBrandIcons: ${error.message}`)
      }
    }

    async setBrandGraphics(brand) {
      try {
        const module = await import(`./web/${brand}/graphics/sprite-graphics-${brand}.svg`);
        const svg = await (await fetch(module.default)).text();

        document.body.insertAdjacentHTML('afterbegin', svg);

        this.removeDOMElements(document.body.getElementsByClassName('graphics-sprite-sheet'), 'afterbegin');
      } catch (error) {
        throw new Error(`BrandLibrary.setBrandGraphics: ${error.message}`)
      }
    }

    async setBrandPictograms(brand) {
      try {
        const module = await import(`./web/${brand}/pictograms/sprite-pictograms-${brand}.svg`);
        const svg = await (await fetch(module.default)).text();

        document.body.insertAdjacentHTML('afterbegin', svg);

        this.removeDOMElements(document.body.getElementsByClassName('pictograms-sprite-sheet'), 'afterbegin');
      } catch (error) {
        throw new Error(`BrandLibrary.setBrandPictograms: ${error.message}`)
      }
    }

    /**
     * This function allows the user to access the Pictogram SVGs,
     * which are too big to add to the icon sprite sheet without compomising performance.
     * @param {string} brand The brand that is being loaded in
     * @param {array} pictogramNames An array of the names of the pictograms that are to be loaded, in pictogram-name-etc format
     * @param {boolean} removeSprite A boolean that decides whether all currently existing pictograms get removed
     * @returns {Promise<void>} A promise to add the Pictogram SVG
     */
    async insertPictograms(brand, pictogramNames = [], removeSprite = true) {
      try {
        const pictogramList = await import(`./web/${brand}/pictograms/pictogram_names.js`);

        const pictogramNamesToSet = !pictogramNames.length ? pictogramList.pictogramNames : pictogramNames;

        const currentSprite = document.body.getElementsByClassName('pictograms-sprite-sheet');

        const newSprite = !removeSprite && currentSprite.length ? currentSprite[0] : document.createElement('svg');

        newSprite.setAttribute('class', 'pictograms-sprite-sheet');
        newSprite.setAttribute('style', 'display: none;');

        await Promise.all(
          pictogramNamesToSet.map(async pictogram => {
            if (pictogramList.pictogramNames.includes(pictogram)) {
              const module = await import(`./web/${brand}/pictograms/${pictogram}.svg`);
              const svg = await (await fetch(module.default)).text();

              if (!newSprite.querySelector(`#${pictogram}`)) {
                newSprite.insertAdjacentHTML('beforeend', svg);
              }
            } else {
              throw new Error(`Error inserting Pictogram: ${pictogram} on ${brand} does not exist.`)
            }
          })
        );

        document.body.insertAdjacentHTML('afterbegin', newSprite.outerHTML);

        this.removeDOMElements(document.body.getElementsByClassName('pictograms-sprite-sheet'), 'afterbegin');
      } catch (error) {
        throw new Error(`BrandLibrary.insertPictograms: ${error.message}`)
      }
    }

    async setCustomTokens(brand, customTokens) {
      try {
        const { tokens } = await import(`./web/${brand}/tokens/token-dictionary.js`);
        const merged = { root: { ...tokens.root, ...customTokens } };

        await this.setTokens(merged);
      } catch (error) {
        throw new Error(`BrandLibrary.setCustomTokens: ${error.message}`)
      }
    }

    async setTokens(tokens, custom = false) {
      const className = custom ? 'custom-tokens' : 'token-dictionary';
      const css = this.parseCustomTokens(tokens);

      document.head.insertAdjacentHTML('beforeend', `<style class="${className}">${css}}</style>`);

      this.removeDOMElements(document.head.getElementsByClassName(className), 'beforeend');
    }

    parseCustomTokens(tokens) {
      const parsedCssString = Object.entries(tokens.root).reduce(
        (style, [key, value]) => `${style}${key}: ${value};`,
        ':root {'
      );
      // Add a '}' to the end of the parsed CSS string
      return `${parsedCssString}}`
    }
  }

  return BrandLibrary;

}));
