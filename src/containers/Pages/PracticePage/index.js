import React, { Fragment } from 'react'
import HeaderBotton from '../../../components/HeaderBottom'
import HeaderTop from '../../../components/HeaderTop'
import Breadcumb from '../../../components/Breadcumb'
import Service from '../../../components/Service'
import ServiceArea from '../../../components/ServiceArea'
import Testmonial from "../../../components/Testmonial";
import NewsLetter from '../../../components/Newsletter'
import FooterArea from '../../../components/FooterArea'
// images
import breadcumb from '../../../images/breadcumb/1.jpg'

import './style.scss'
import { SERVICES_DATA } from '../../../constands/data'

const breadcumbMenu = [
    {name:'Home',route:'/'},
    {name:'Practice area'}
]

const PracticePage = () => {
    return (
        <Fragment>
            <header className="headerArea">
                <HeaderTop className="headerTop" />
                <HeaderBotton className="headerBottomArea headerBottomAreaStyelTwo" />
            </header>
            <Breadcumb 
                className="breadcumbArea"
                title="Practice Area"
                breadcumbMenu={breadcumbMenu}
                background={breadcumb}
            />
            <Service className="serviceArea mt-0" />
            <ServiceArea
                className="ourServiceArea ourServiceAreaStyleThree bgFFF"
                title="How Can We Help You"
                subTitle="Area Of Practice"
                services={SERVICES_DATA}
            />
            {/* <Testmonial
                className="testmonialArea pt100"
            /> */}
            <NewsLetter
                className="newsLetterArea"
            />
            <FooterArea/>
        </Fragment>
    )
}
export default PracticePage