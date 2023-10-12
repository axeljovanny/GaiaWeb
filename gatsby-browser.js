/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * Author: LDS(Axel)
 */

// El siguiente bloque es para vizualizar el Layout por defecto en todas las paginas
const React = require('react')
const Layout = require('./src/components/layout').default

exports.wrapRootElement = ({ element }) => (
    <Layout>
        {element}
    </Layout>
)
//Fin del Bloque