import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Content, { HTMLContent } from '../components/Content'
import Layout from '../components/Layout'
import { Heading2 } from '../components/Typo'

const Section = styled.section`
  max-width: 720px;
  margin: 40px auto;
`;

export const ClientTypePageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <Layout>
      <Section className="section section--gradient">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="section">
                <Heading2 className="title is-size-3 has-text-weight-bold is-bold-light">
                  {title}
                </Heading2>
                <PageContent className="content" content={content} />
              </div>
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  )
}

ClientTypePageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const ClientTypePage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <ClientTypePageTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      content={post.html}
    />
  )
}

ClientTypePage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ClientTypePage

export const clientTypePageQuery = graphql`
  query ClientTypePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
