/*
 * Copyright 2021 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var path = require('path');

module.exports = {
  root: true,
  plugins: ['@spotify', 'notice', 'react', 'testing-library'],
  rules: {
    'notice/notice': [
      'error',
      {
        // eslint-disable-next-line no-restricted-syntax
        templateFile: path.resolve(__dirname, './scripts/copyright-header.txt'),
        onNonMatchingHeader: 'replace',
      },
    ],
    'no-restricted-imports': [
      'error',
      {
        patterns: ['@mui/*/*/*'],
      },
    ],
    'no-restricted-syntax': [
      'error',
      {
        message:
          "Avoid using .toLowerCase(), use .toLocaleLowerCase('en-US') instead. " +
          'This rule can sometimes be ignored when converting text to be displayed to the user.',
        selector:
          "CallExpression[arguments.length=0] > MemberExpression[property.name='toLowerCase']",
      },
      {
        message:
          "Avoid using .toUpperCase(), use .toLocaleUpperCase('en-US') instead. " +
          'This rule can sometimes be ignored when converting text to be displayed to the user.',
        selector:
          "CallExpression[arguments.length=0] > MemberExpression[property.name='toUpperCase']",
      },
    ],
    'testing-library/await-async-query': 'error',
    'testing-library/await-async-utils': 'error',
    'testing-library/no-await-sync-query': 'error',
    'testing-library/prefer-wait-for': 'error',
    'testing-library/no-dom-import': 'error',
    'testing-library/no-wait-for-side-effects': 'error',
    'testing-library/no-wait-for-empty-callback': 'error',
    'no-restricted-globals': [
      'error',
      [
        'blur',
        'captureEvents',
        'chrome',
        'clientInformation',
        'close',
        'closed',
        'createImageBitmap',
        'crypto',
        'customElements',
        'defaultstatus',
        'defaultStatus',
        'devicePixelRatio',
        'external',
        'find',
        'focus',
        'frameElement',
        'frames',
        'getComputedStyle',
        'getSelection',
        'indexedDB',
        'innerHeight',
        'innerWidth',
        'isSecureContext',
        'length',
        'location',
        'locationbar',
        'matchMedia',
        'menubar',
        'moveBy',
        'moveTo',
        'name',
        'navigator',
        'onabort',
        'onafterprint',
        'onanimationend',
        'onanimationiteration',
        'onanimationstart',
        'onappinstalled',
        'onauxclick',
        'onbeforeinstallprompt',
        'onbeforeprint',
        'onbeforeunload',
        'onblur',
        'oncancel',
        'oncanplay',
        'oncanplaythrough',
        'onchange',
        'onclick',
        'onclose',
        'oncontextmenu',
        'oncuechange',
        'ondblclick',
        'ondevicemotion',
        'ondeviceorientation',
        'ondeviceorientationabsolute',
        'ondrag',
        'ondragend',
        'ondragenter',
        'ondragleave',
        'ondragover',
        'ondragstart',
        'ondrop',
        'ondurationchange',
        'onemptied',
        'onended',
        'onerror',
        'onfocus',
        'ongotpointercapture',
        'onhashchange',
        'oninput',
        'oninvalid',
        'onkeydown',
        'onkeypress',
        'onkeyup',
        'onlanguagechange',
        'onload',
        'onloadeddata',
        'onloadedmetadata',
        'onloadstart',
        'onlostpointercapture',
        'onmessage',
        'onmessageerror',
        'onmousedown',
        'onmouseenter',
        'onmouseleave',
        'onmousemove',
        'onmouseout',
        'onmouseover',
        'onmouseup',
        'onmousewheel',
        'onoffline',
        'ononline',
        'onpagehide',
        'onpageshow',
        'onpause',
        'onplay',
        'onplaying',
        'onpointercancel',
        'onpointerdown',
        'onpointerenter',
        'onpointerleave',
        'onpointermove',
        'onpointerout',
        'onpointerover',
        'onpointerup',
        'onpopstate',
        'onprogress',
        'onratechange',
        'onrejectionhandled',
        'onreset',
        'onresize',
        'onscroll',
        'onsearch',
        'onseeked',
        'onseeking',
        'onselect',
        'onstalled',
        'onstorage',
        'onsubmit',
        'onsuspend',
        'ontimeupdate',
        'ontoggle',
        'ontransitionend',
        'onunhandledrejection',
        'onunload',
        'onvolumechange',
        'onwaiting',
        'onwebkitanimationend',
        'onwebkitanimationiteration',
        'onwebkitanimationstart',
        'onwebkittransitionend',
        'onwheel',
        'open',
        'openDatabase',
        'opener',
        'origin',
        'outerHeight',
        'outerWidth',
        'pageXOffset',
        'pageYOffset',
        'parent',
        'performance',
        'personalbar',
        'postMessage',
        'print',
        'releaseEvents',
        'resizeBy',
        'resizeTo',
        'screen',
        'screenLeft',
        'screenTop',
        'screenX',
        'screenY',
        'scroll',
        'scrollbars',
        'scrollBy',
        'scrollTo',
        'scrollX',
        'scrollY',
        'self',
        'speechSynthesis',
        'status',
        'statusbar',
        'stop',
        'styleMedia',
        'toolbar',
        'top',
        'visualViewport',
        'webkitRequestFileSystem',
        'webkitResolveLocalFileSystemURL',
        'webkitStorageInfo',
      ].map(function f(name) {
        return {
          name: name,
          message:
            'Avoid using implicitly global variables. Use e.g. window.' +
            name +
            ' instead if this was your intent.',
        };
      }),
    ].flat(),
  },
  overrides: [
    {
      files: ['**/*.[jt]s?(x)'],
      excludedFiles: '**/*.{test,spec}.[jt]s?(x)',
      rules: {
        'react/forbid-elements': [
          1,
          {
            forbid: [
              { element: 'button', message: 'use MUI <Button> instead' },
              { element: 'p', message: 'use MUI <Typography> instead' },
              {
                element: 'span',
                message: 'use a MUI <Typography> variant instead',
              },
            ],
          },
        ],
      },
    },
  ],
};
