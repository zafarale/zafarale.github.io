import { defineEcConfig } from 'astro-expressive-code'
import { pluginCollapsibleSections } from '@expressive-code/plugin-collapsible-sections'
import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers'

export default defineEcConfig({
  // Example: Using a custom plugin (which makes this `ec.config.mjs` file necessary)
  plugins: [pluginLineNumbers(), pluginCollapsibleSections()],
  defaultProps: {
    wrap: true,
    showLineNumbers: false,
    overridesByLang: {
        'js,ts,html,java,scala,kotlin': {
          showLineNumbers: true,
        }
      }
    }
})