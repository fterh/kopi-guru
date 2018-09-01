// @flow

import React from 'react';

import styleClasses from './style/jss';

export default function() {
  return (
    <div className={styleClasses.footer}>
      <p>
        <strong>
          Kopi Guru: Demystifying kopitiam (coffeeshop) beverage ordering lingo
          | Order like a pro{' '}
          <span role="img" aria-label="fire">
            🔥
          </span>
        </strong>
      </p>
      <p>
        A project by Fabian Terh |{' '}
        <a
          className={styleClasses.anchor}
          href="https://github.com/fterh/kopi-guru"
        >
          GitHub
        </a>
      </p>
    </div>
  );
}
