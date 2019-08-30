import React from 'react'
import Layout from "../components/layout"
import { Link } from 'gatsby'
import { graphql } from 'gatsby'

const DocuPage = ({data}) => (
    <Layout>
        <div  class="docu-background-custom">
            <h2>Latest Documents</h2>
            <hr />
            {data.allMarkdownRemark.edges.map(post => (
                <div key={ post.node.id } class="docu-column-custom">
                    <h3>{ post.node.frontmatter.title }</h3>
                    <small>Posted by { post.node.frontmatter.author } on { post.node.frontmatter.date }</small>
                    <br/>
                    <Link to={post.node.frontmatter.path} class="read-more-btn">Read More</Link>
                    <br />
                    <br />
                    <hr />
                </div>
            ))}
        </div>
    </Layout>
)

export const pageQuery = graphql`
    query DocuIndexQuery {
        allMarkdownRemark {
            edges {
                node {
                    id
                    frontmatter {
                        path
                        title
                        date
                        author
                    }
                }
            }
        }
    }
`

export default DocuPage;

