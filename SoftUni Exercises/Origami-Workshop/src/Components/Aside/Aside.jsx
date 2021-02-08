import Link from '../shared/Link/Link'
import './Aside.css'

const Aside = () => {

    return (
        <aside className="Aside">
            <ul>
                <Link url="#">Aside Link 1</Link>
                <Link url="#">Aside Link 2</Link>
            </ul>
        </aside>
    );
}

export default Aside;