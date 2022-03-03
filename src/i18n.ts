import {addMessages, getLocaleFromNavigator, init} from 'svelte-i18n';

import en from '../static/translations/en.json';
import ko from '../static/translations/ko.json';

addMessages('ko', ko);
addMessages('en', en);

const locale = getLocaleFromNavigator() ?? 'en-US';

void init({
  fallbackLocale: 'en',
  initialLocale: locale.split('-')[0],
});
