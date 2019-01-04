import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Hero from './../components/Hero'
import Layout from './../components/Layout'
import Wrapper from './../components/Wrapper'
import { Heading2 } from './../components/Typo'
import { CenterBlock, GridBlock } from './../components/Blocks'

const message = 'I ett byggprojekt blir det lätt ett hav av dokumentation att hålla rätt på och för många av våra kunder började det just så, med ett proppfullt skrivbord utan struktur. Upptäck tjusningen med ett lättarbetat projektverktyg där du arbetar med ditt projekt samlat på ett och samma ställe. I a-note har du allt ifrån arbetsordrar, rapporter och dina kunder digitalt - lagrade och sparade, idag och för framtiden.'
const gridItems = [
  {
    title: 'Projecktledare',
    message: 'Som projektledare skall du se till att allt flyter på - vilket inte alltid är helt enkelt. A-note förenklar kommunikationen mellan dig, hantverkaren och slutkunden.',
    bg: '/img/products-grid1.jpg'
  },
  {
    title: 'Hantverkare',
    message: 'Även för hantverkaren ställs det en hel del krav kring dokumentation, vilket för många upplevs tidskrävande och krångligt. Vi förenklar detta genom vår lättanvända mobilapplikation.',
    bg: '/img/products-grid2.jpg'
  },
  {
    title: 'Kund',
    message: 'God kommunikation minskar risken för missförstånd och genom A-note är du som beställare alltid delaktig och kan följa vad som sker i ditt projektet',
    bg: '/img/products-grid3.jpg'
  }
]

const Section = styled.section`
  max-width: 980px;
  margin-left: auto;
  margin-right: auto;
`;

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <Layout>
        <Hero />
        <Section className="section">
          <CenterBlock
            title="Tycker du också att det blir för mycket papper att hålla koll på?"
            message={message}
          />
          <GridBlock items={gridItems} />
          <CenterBlock
            title="Genom digitalisering effektiviserar vi dina projekt."
            message="A-note ger dig och ditt företag full kontroll över byggprojekten och byggarbetsplatsen. Med a-note har du projektet samlat på en plats och som projektledare kan du via data i nutid se till att projektet är i fas. A-note är ett komplett system där rapportering från arbetsplatsen enkelt fördelas mellan projektledare och slutkund - ingenting faller mellan stolarna vilket skapar bättre slutresultat. Du kan med enkelhet rapportera tilläggsarbeten, avvikelser, tillbud och observationer, egenkontroller och dagbok, via a-notes användarvänliga mobilapplikation.
"
          />
          <CenterBlock
            bg={true}
            image="/img/products-grid1.jpg"
            title="Prova fritt i 30 dagar"
            message="Det är enkelt att komma igång!. Registrera din organisation och prova fritt i 30 dagar. A-note är användarvänligt, men skulle du ha några frågor finns vi på supporten här för dig. Därför ska du välja oss - Förbättra kundnöjdheten. - Få gladare medarbetare. - Vinn fler affärer."
          />
        </Section>
      </Layout>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
