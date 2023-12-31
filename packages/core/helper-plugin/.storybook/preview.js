import { DesignSystemProvider } from '@strapi/design-system';
import { IntlProvider } from 'react-intl';
import { MemoryRouter } from 'react-router-dom';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <MemoryRouter>
      <DesignSystemProvider locale="en">
        <IntlProvider messages={{}} textComponent="span" locale="en">
          <main>
            <Story />
          </main>
        </IntlProvider>
      </DesignSystemProvider>
    </MemoryRouter>
  ),
];
