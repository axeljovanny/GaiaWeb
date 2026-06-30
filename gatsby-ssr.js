const React = require('react')
const Layout = require('./src/components/layout').default
const ErrorBoundary = require('./src/components/ErrorBoundary').default

exports.wrapRootElement = ({ element }) => (
    <ErrorBoundary>
        {element}
    </ErrorBoundary>
)

exports.wrapPageElement = ({ element }) => (
    <Layout>
        {element}
    </Layout>
)
