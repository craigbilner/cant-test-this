import React from 'react';
import RandomChildOne from './RandomChildOne';
import RandomChildTwo from './RandomChildTwo';
import RandomChildThree from './RandomChildThree';

export default () => (
  <div>
    <ul>
      <li>
        <RandomChildOne />
      </li>
      <li>
        <ul>
          <li>
            <div></div>
            <div>
              <li>
                <RandomChildTwo />
              </li>
            </div>
          </li>
          <div>
            <div>
              <RandomChildThree />
            </div>
          </div>
        </ul>
      </li>
    </ul>
  </div>
);
