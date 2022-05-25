import { useEffect } from "react";
import { addDecorator } from "@storybook/react";
import BrandLibrary from "../tokens/web/Enreach/tokens/token-dictionary";
import { defineCustomElements } from "../dist/loader";

import "../dist/collection/global/main.css";

defineCustomElements();

const brandLibrary = new BrandLibrary();

/**
 * Decorator function that handles applying and changing the Storybook preview theme
 * @param {Element} Story
 * @returns {HTMLElement}
 */
function withBrandLibraryTheme(Story) {
  // Document of the page that is wrapping the iFrame
  const parentDocument = window.parent.document;

  /**
   * Function that handles setting the given theme with the BrandLibrary
   * @param {CustomEvent} e
   * @returns {void}
   */
  function handleSetTheme(e) {
    brandLibrary.setBrand(e.detail);
  }

  // UseEffect that is only executed when the Storybook iFrame preview mounts
  useEffect(() => {
    // Add an eventlistener to the parent document to listen for theme changes
    parentDocument.addEventListener("setTheme", handleSetTheme);
    // Dispatch an event to the parent document when the Storybook preview has mounted
    parentDocument.dispatchEvent(new Event("storybookDidMount"));

    return () => {
      // Remove the eventlistener from the parent document to stop listening for theme changes
      parentDocument.removeEventListener("setTheme", handleSetTheme);
    };
  }, []);

  return <Story />;
}

// Add the BrandLibraryTheme decorator to each Storybook preview
addDecorator(withBrandLibraryTheme);

export const parameters = {
  actions: { argTypesRegex: "^on.*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: "centered",
  options: {
    docsMode: true,
    enableShortcuts: false,
  },
  themes: ["neutral", "Enreach"],
};
