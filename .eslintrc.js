module.exports = {
  extends: ['airbnb', 'prettier', 'prettier/react'],
  plugins: ['prettier'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/prop-types': 0,
    'no-param-reassign': 0,
    'no-use-before-define': 0,
    'react/destructuring-assignment': 0,
    'no-console': 0,
    'import/no-named-as-default': 0,
    'import/no-named-as-default-member': 0,
    'react/no-array-index-key': 'warn',
    'no-unused-vars': 'warn',
    'no-continue': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0
  },
  env: {
    browser: true,
    node: true
  },
  parser: 'babel-eslint'
};
// https://github.com/babel/babel-eslint/issues/312
// https://medium.com/quick-code/how-to-integrate-eslint-prettier-in-react-6efbd206d5c4
