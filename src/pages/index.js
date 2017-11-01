import React from 'react'
import get from 'lodash/get'

import Header from '../components/Header';
import Project from '../components/Project';
import Page1LeftPanel from '../components/Page1LeftPanel';
import Page2LeftPanel from '../components/Page2LeftPanel';
import Helmet from 'react-helmet';
import Company from '../components/Company';

class BlogIndex extends React.Component {
  render() {
    const site = get(this, 'props.data.site.siteMetadata')
    const posts = get(this, 'props.data.remark.posts')
    const appirioProjects = get(this, 'props.data.appirioProjects.files');
    const metacubeProjects = get(this, 'props.data.metacubeProjects.files');
    const xtremeProjects = get(this, 'props.data.xtremeProjects.files');
    const aptechProjects = get(this, 'props.data.aptechProjects.files');
    const skills = get(this, 'props.data.jsonSkillData.skills')
    const info = get(this, 'props.data.jsonInfoData.infos')
    const certifications = get(this, 'props.data.jsonCertificationsCert.certifications')

    console.log(appirioProjects);
    return (
      <div className="wrapper">
        <Helmet
          title={get(site, 'title')}
          meta={[
            { name: 'twitter:card', content: 'summary' },
            { name: 'twitter:site', content: `@${get(site, 'twitter')}` },
            { property: 'og:title', content: get(site, 'title') },
            { property: 'og:type', content: 'website' },
            { property: 'og:description', content: get(site, 'description') },
            { property: 'og:url', content: get(site, 'url') },
            {
              property: 'og:image',
              content: `${get(site, 'url')}/img/profile-pic.jpg`,
            },
          ]}
        />
        <div className="bg">
            <div className="rightSide">
              <div className="top"></div>
            </div>
        </div>
        <div className="container body-container">

          <div className="row-container page">
            <Page1LeftPanel skills={skills} infos={info}/>
            <div className="right-col">
              <Header/>
              <div className="resume-main-content">
                <div className="main-heading">

                  <h2 className=""><span className="icon"><i className="fa fa-briefcase" aria-hidden="true"></i></span><span
                    className="heading-text">Work Experience</span></h2>
                </div>
                <Company projects={appirioProjects} info={{title: 'Principle Consultant',
                  name: 'Appirio India Private Limited',
                  date: '12/2013 – Present',
                  location: 'Jaipur, India'
                }}/>
              </div>
            </div>
          </div>
          <div className="row-container page">
            <Page2LeftPanel certifications={certifications}/>
            <div className="right-col">
              <div className="resume-main-content">


                <Company projects={metacubeProjects} info={{title: 'Senior Software Engineer',
                  name: 'Metacube Private Limited',
                  date: '05/2012 – 12/2013',
                  location: 'Jaipur, India'
                }}/>

                <Company projects={xtremeProjects} info={{title: 'Senior Software Engineer',
                  name: 'Xtreme Infosoft Private Limited',
                  date: '02/2010 – 05/2012',
                  location: 'Jaipur, India'
                }}/>

                <Company projects={aptechProjects} info={{title: 'Developer /Corporate Trainer\n',
                  name: 'Aptech Limited',
                  date: '04/2008 – 02/2010',
                  location: 'Alwar, India'
                }}/>

                <div className="main-heading">

                  <h2 className=""><span className="icon"><i className="fa fa-graduation-cap"
                                                     aria-hidden="true"></i></span><span
                    className="heading-text">Education</span></h2>
                </div>
                <div className="page-sections">
                  <div className="info-section">
                    <h5 className="no-bottom-margin sub-heading designation">Master in Computer Science</h5>
                    <h6 className="no-bottom-margin sub-heading-0">Punjab Technical University</h6>
                  </div>
                </div>
                <div className="page-sections">
                  <div className="info-section">
                    <h5 className="no-bottom-margin sub-heading designation">MS, Information Technology</h5>
                    <h6 className="no-bottom-margin sub-heading-0">Punjab Technical University</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
        description
        url
        author
        twitter
      }
    }
    jsonSkillData: allSkillsJson {
      skills:edges {
        skill:node {
          rating
          skillName
        }
      }
    }
    jsonInfoData: allInfoJson {
      infos:edges {
        info:node {
          string
          type
          link
          icon
        }
      }
    }
    jsonCertificationsCert: allCertificationsJson {
      certifications:edges {
        certification:node {
          string
          link
          icon
        }
      }
    }
    appirioProjects: allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "/(src/docs/projects/appirio)//i"}}
      sort: { order: ASC, fields: [frontmatter___order] }
    ) {
      files: edges {
        file: node {
          html
          fileAbsolutePath
          frontmatter {
            order
            url
            company
            companySiteUrl
          }
        }
      }
    }
    metacubeProjects: allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "/(src/docs/projects/metacube)//i"}}
      sort: { order: ASC, fields: [frontmatter___order] }
    ) {
      files: edges {
        file: node {
          html
          fileAbsolutePath
          frontmatter {
            order
            url
            company
            companySiteUrl
          }
        }
      }
    }
    xtremeProjects: allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "/(src/docs/projects/xtreme)//i"}}
      sort: { order: ASC, fields: [frontmatter___order] }
    ) {
      files: edges {
        file: node {
          html
          fileAbsolutePath
          frontmatter {
            order
            url
            company
            companySiteUrl
          }
        }
      }
    }
    aptechProjects: allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "/(src/docs/projects/aptech)//i"}}
      sort: { order: ASC, fields: [frontmatter___order] }
    ) {
      files: edges {
        file: node {
          html
          fileAbsolutePath
          frontmatter {
            order
            url
            company
            companySiteUrl
          }
        }
      }
    }
  }
`
