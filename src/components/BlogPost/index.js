import React, { Fragment } from 'react'
import './style.scss'
import { SERVICES_DATA_LIST } from '../../constands/services.data'

const BlogPost = ({active}) => {
    return (
        <Fragment>
            <div className="blogPostWrapper">
                <div className="blogPostContent ">
                    <h3><div to='blog-details'>{SERVICES_DATA_LIST[active]?.title}</div></h3>
                    <div className='pl-2' style={{lineHeight: '30px'}} dangerouslySetInnerHTML={{ __html: SERVICES_DATA_LIST[active]?.explain }} />
                </div>
            </div>
        </Fragment>
    )
}
export default BlogPost