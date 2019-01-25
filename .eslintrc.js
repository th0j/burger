module.exports = {
  extends: 'airbnb',
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/prop-types': 0,
    'no-param-reassign': 0,
    'no-use-before-define': 0,
    'react/destructuring-assignment': 0,
    'no-console': 0,
  },
  env: {
    browser: true,
    node: true,
  },
};
