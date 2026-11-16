import React, { Fragment, useState } from 'react'
import HeaderBotton from '../../../components/HeaderBottom'
import HeaderTop from '../../../components/HeaderTop'
import Breadcumb from '../../../components/Breadcumb'
import NewsLetter from '../../../components/Newsletter'
import FooterArea from '../../../components/FooterArea'
import CategorySidebar from '../../../components/CategorySidebar'
import BlogPost from '../../../components/BlogPost'
// images
import breadcumb from '../../../images/breadcumb/1.jpg'
import './style.scss'

const breadcumbMenu = [
    { name: 'Home', route: '/' },
    { name: 'Our Services' }
]

const BlogLeftPage = () => {
    const [activeTab, setActiveTab] = useState(0);

    const handleChange = (val) => {
        setActiveTab(val)
    }

    return (
        <Fragment>
            <header className="headerArea">
                <HeaderTop className="headerTop" />
                <HeaderBotton className="headerBottomArea headerBottomAreaStyelTwo" />
            </header>
            <Breadcumb
                className="breadcumbArea"
                title="Our Services"
                breadcumbMenu={breadcumbMenu}
                background={breadcumb}
            />
            <div className="blogPostArea blogPostLeftArea">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <aside>
                                <CategorySidebar
                                    active={activeTab}
                                    setActiveTab={handleChange}
                                    title="Our Services"
                                    className="cetagoryWrap" />
                            </aside>
                        </div>
                        <div className="col-lg-8">
                            <BlogPost active={activeTab} />
                        </div>
                    </div>
                </div>
            </div>
            <NewsLetter
                className="newsLetterArea"
            />
            <FooterArea />
        </Fragment>
    )
}
export default BlogLeftPage