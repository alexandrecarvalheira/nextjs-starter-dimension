import PropTypes from 'prop-types';


const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            {/*<span className="icon fa-diamond"></span>*/}
           {/*<FontAwesomeIcon icon={faETH} transform="grow-200" />*/}
           <img className="logo" src="/static/images/logo.png" alt="" />
        </div>
        <div className="content">
            <div className="inner">
                {/*<h1>K9S</h1>*/}
                <p>15% of all funds collected during the mint will be donated <br />to a charity program working with the refugee crisis. 
                </p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>About</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>RoadMap</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>Launch Info</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>FAQ</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
