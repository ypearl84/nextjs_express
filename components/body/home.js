import React from 'react'
import MainTopNews from './parts/mainTopNews'
import AdArea from './parts/adArea'
import NewsList from './parts/newsList'

const Home = () => (
    <div id="container">
        <MainTopNews />
        <AdArea />
        <NewsList />
        <AdArea />
        <NewsList />
    </div>
);

export default Home;

/*
class Home extends Component {

    click = () => {
       // const { clickingHamburger } = this.props
       // clickingHamburger()
    }

    render () {
        return (
            <div id="container">
                <MainTopNews />
                <AdArea />
                <NewsList />
                <AdArea />
                <NewsList />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch =>
    bindActionCreators({  }, dispatch)

export default connect(
    null,
    mapDispatchToProps
)(Home) */
