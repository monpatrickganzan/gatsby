import React from 'react'
import { Link } from 'gatsby'
import { graphql } from 'gatsby'
import Layout from '../components/layout';

export default  function Template({data}) {
    const post = data.markdownRemark

    return(
        <Layout>
            <div className="docu-background-custom">
                <Link to="/docu" className="go-back-btn">Go Back</Link>
                <hr />
                <h1>{ post.frontmatter.title }</h1>
                <h5>Posted by { post.frontmatter.author } on { post.frontmatter.date }</h5>
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </div>
        </Layout>
    )
}

export const portQuery = graphql`
    query DeliveryPostByPath($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
                path
                title
                author
                date
            }
        }
    }
`
