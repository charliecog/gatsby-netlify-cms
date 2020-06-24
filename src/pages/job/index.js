import React from 'react'

import Layout from '../../components/Layout'
import Jobs from '../../components/Jobs'

export default class JobIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/tanooki_mario_artwork_-_super_mario_bros._3.png')`,
          }}
        >
          <h1
            className="has-text-weight-bold is-size-1"
            style={{
              boxShadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40',
              backgroundColor: '#f40',
              color: 'white',
              padding: '1rem',
            }}
          >
            Latest Jobs
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <Jobs />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}