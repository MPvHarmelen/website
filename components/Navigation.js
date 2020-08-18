export default class Navigation extends React.Component {
    render() {
        return <nav>
            <div>
                <a href="/"><img src="/img/comunica_white.svg" className="nav-icon" /></a>
                <a href="#" className="toggle-nav"><img src="/img/navigation-toggle.svg" /></a>
            </div>
            <ul>
                <li><a href="http://query.linkeddatafragments.org/">Try live</a></li>
                <li><a href="/docs/">Docs</a></li>
                <li><a href="/contribute/">Contribute</a></li>
                <li><a href="/about/">About</a></li>
                <li><a href="/ask/">Ask</a></li>
                <li><a href="/cite/">Cite</a></li>
                <li><a href="https://github.com/comunica/comunica">GitHub</a></li>
            </ul>
        </nav>;
    }

    componentDidMount() {
        // This is not being called for some reason, see _app.js
    }
}
