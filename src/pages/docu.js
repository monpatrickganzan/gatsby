import React from 'react'
import Layout from "../components/layout"
import { Link } from 'gatsby'
import { graphql } from 'gatsby'

const DocuPage = ({data}) => (
    <Layout>
        <div>
            <h1>Latest Documents</h1>
            {data.allMarkdownRemark.edges.map(post => (
                <div key={ post.node.id }>
                    <h3>{ post.node.frontmatter.title }</h3>
                    <small>Posted by { post.node.frontmatter.author } on { post.node.frontmatter.date }</small>
                    <br/>
                    <button>
                        <Link to={post.node.frontmatter.path}>Read More</Link>
                    </button>
                    <br />
                    <br />
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

