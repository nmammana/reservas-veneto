import React from 'react'
import Layout from '../../components/Layout'
import './Error404.scss';


export default function Error404() {
    return (
        <Layout>
            <main className="error-main">
                <div className="selection-container">
                    <div className="rectangle-container">
                        <div className="rectangle"></div>
                    </div>
                    <div className="error-main__wrapper">
                        <div className="heading-container">
                            <h3 className="title heading2">Error 404: Página no encontrada.</h3>
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    )
}
