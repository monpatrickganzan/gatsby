import React from 'react'
// import { Link } from 'gatsby'
import { graphql } from 'gatsby'
import Layout from '../components/layout';

export default  function Template({data}) {
    const post = data.markdownRemark

    return(
        <Layout>
            <div className="page-background-custom">
                {/* <Link to="/docu" className="go-back-btn">Go Back</Link> */}
                <div className="md-file-content">
                    <h1>{ post.frontmatter.title }</h1>
                    <hr />
                    <h5>Posted by { post.frontmatter.author } on { post.frontmatter.date }</h5>
                    <div dangerouslySetInnerHTML={{ __html: post.html }} />
                </div>
            </div>
        </Layout>
    )
}

export const portQuery = graphql`
    query DocuPostByPath($path: String!) {
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
