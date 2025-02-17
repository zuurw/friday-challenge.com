import React from 'react';

import Layout from '../../components/Layout';
import Challenge from '../../components/Challenge';

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <div
                className="full-width-image-container margin-top-0"
                style={{
                  backgroundImage: `url('/img/blog-index.jpg')`
                }}
              >
                <h1
                  className="has-text-weight-bold is-size-1"
                  style={{
                    boxShadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40',
                    backgroundColor: '#f40',
                    color: 'white',
                    padding: '1rem'
                  }}
                >
                  Latest Challenges
                </h1>
              </div>
            </div>
            <Challenge />
          </div>
        </section>
      </Layout>
    );
  }
}
