import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter'
import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebook'
import faInstagram from '@fortawesome/fontawesome-free-brands/faInstagram'
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub'
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.css';
import { faDiscord } from '@fortawesome/fontawesome-free-brands';


class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="intro" className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Who are the K9S?</h2>
          <span className="image main"><img src="/static/images/k9nebula.png" alt="" /></span>
          <p>After the Swarm took over their planet, Argos, the Kanid had no other option but flee and hide all over the Solana System, living on space arks, barren moons and as refugees in concentration camps.</p>
          <p>The Golden Fangs, the Kanid council, pleads for anyone brave enough to join a last crusade against the Swarm, go back to Argos and find the Cerberus, a legendary weapon capable of changing the course of the entire Solana System.</p>
          <p>The Solana K9S are a collection of  5,100 randomly generated Kanid [humanoid wolves] brought together to find the Cerberus and defeat the Swarm, a menace for the entire Solana System.</p>
          {close}
        </article>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">RoadMap</h2>
          <span className="image main"><img src="/static/images/roadmap.png" alt="" /></span>
              <p><b>Launch</b></p>
              <p>The minting of 5,100 unique and randomly generated Kanids commences and get listed on secondary marketplaces.</p>
              <p><b>SPOILS OF THE WAR PART 1</b></p>
              <p>After the mint ends, 12% of all funds collected goes to a community wallet, granting that we’ll have resources to power the Cerberus once we find it.</p>
              <p><b>ACTIVATE VALHALLA PROTOCOL</b></p>
              <p>48 hours after the collection sold out , the Valhalla Protocol will be activated and our K9S that died in battle will receive a proper funeral… with FIRE!<br/>Valhalla Protocol makes Solana K9S a deflationary NFT collection, meaning we are gonna buy back K9S at the floor price and burn them. </p>
              <p><b>SPOILS OF THE WAR PART 2</b></p>
              <p>90% of the royalties made in the secondary market will be added to our community wallet.</p>
              <p><b>K9S ANSWERING THE CALL</b></p>
              <p>15% of all funds collected during the mint will be donated to a charity program working with the refugee crisis. We want to ensure the wellbeing of those who lost their homes due to war  and political crisis around the world. The non profit organization that will receive the funds will be elected through vote by our holders.</p>
              <p><b>K9 OF THE HOUR</b></p>
              <p>All of our members will be granted a chance to receive a Moon Medal for their services in battle. Any Moon Medal recipient can use his/her time to bring one's or other’s work to attention and even get some funds. We want to see your art, charity, music, game or code find the right audience.</p>
              <p><b>A PLACE TO CALL HOME</b></p>
              <p>When the Kanid lost their home to the Swarm and had to wander through space, the Golden Fangs swore that once they take Argos back, the planet will be a home for anyone in need.
                  <br/>With our treasury we want to buy NFTs from lesser known artists and airdrop them to our holders.</p>
              <p><b>DAO</b></p>
              <p>Once we become capable of powering up the Cerberus, it will become a fully independent entity dedicated to finding the best for the K9S and everyone living on Argos.
                  <br/>Using a vote system, our members are going to decide what to do with our treasury.  We intend to empower our community and grant it resources to acquire NFTs, intellectual properties or tokens, donate even more to charity and fund other projects using the blockchain.</p>
          {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">LAUNCH INFO</h2>
          <span className="image main"><img src="/static/images/gateio.png" alt="" /></span>
          <p><b>Minting Begins</b></p>
              <p>Soon</p>
              <p><b>Total Mints</b></p>
              <p>5000</p>
              <p><b>Price per Mint</b></p>
              <p>To be announced</p>
              
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">FAQ</h2>
          <p><b>Where can I get one?</b></p>
              <p>At gate.io</p>
              <p><b>How many pieces are there?</b></p>
              <p>There are 5,000 pieces in the original K9S Collection.</p>
              <p><b>How much will it cost to mint?</b></p>
              <p>To be announced</p>
          <ul className="icons">
            <li><a href="https://twitter.com/K9SNFT" target="_blank">
              <FontAwesomeIcon icon={faTwitter} />
            </a></li>
            <li><a href="https://discord.gg/bH5JtyrXyM" target="_blank">
              <FontAwesomeIcon icon={faDiscord} />
            </a></li>
          </ul> 
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool
}

export default Main