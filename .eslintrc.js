module.exports = {
    extends: [
        require.resolve(`eslint-config-react-app`),
    ],
    rules: {
        'react/react-in-jsx-scope': usingJsxRuntime
            ? `off`
            : `error`, // Conditionally apply for reactRuntime?
        'react/jsx-pascal-case': `off`, // Prevents errors with Theme-UI and Styled component
    },
};