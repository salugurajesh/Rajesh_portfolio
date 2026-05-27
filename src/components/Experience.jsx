import React from 'react'

export default function Experience(){
  return (
    <section id="experience" className="experience">
      <h2>Experience</h2>
      <div className="experience-card">
        <div>
          <h3><img src="TCS_wordmark_2020.webp" alt="TCS Logo" className="company-logo" />Tata Consultancy Services – SAP Basis Administrator</h3>
          <p>
            - Managed and migrated changes from Jira tickets to multiple systems using SAP tools and ChaRM.<br />
            - Conducted go-lives by deploying changes to production environments.<br />
            - Performed in-depth analysis of OT issues for smooth operations.<br />
            - Applied PLA descriptions and GEX for streamlined operations.<br />
            - Coordinated client openings, R/3 connections, and led release cycles.<br />
            - Handled 200+ monthly transport requests with 100% SLA compliance.<br />
            - Improved system stability by resolving 95% of OT issues within deadlines.
          </p>
        </div>
      </div>

      <div className="experience-card">
        <div>
          <h3><img src="Wipro_Primary_Logo_Color_RGB.svg.webp" alt="Wipro Logo" className="company-logo" />Wipro – Technical Trainee</h3>
          <p>
            - Worked with STMS, SM37, and ST22 for transport management, job monitoring, and dump analysis activities.<br />
            - Assisted in client copy execution, BDLS activities, and post-refresh validation processes.<br />
            - Supported kernel patching, SPAM and SAINT updates, and basic SAP Basis troubleshooting activities.<br />
            - Used Jira for incident tracking, change management coordination, and activity documentation.
          </p>
        </div>
      </div>
    </section>
  )
}
