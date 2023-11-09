import './table.css'
import { useState } from 'react'

interface Props {
    limit?: number;
    bodyData: {
        username?: string;
        order?: string;
        price?: string;
        id?: string;
        user?: string;
        date?: string;
        status?: string

        borrower?: string,
        offer?: string,
        amount?: string,
        tenure?: string,
        Status?: string,
        reference?: string,
        accepted?: string,
        created?: string,
    }[]
    headData?: string[]
    renderHead?: (a: any, b: number) => JSX.Element
    renderBody: (a: any, b: number) => JSX.Element
}
const Table = ({ limit, bodyData, headData, renderBody, renderHead }: Props) => {

    const initDataShow = limit && bodyData ? bodyData.slice(0, Number(limit)) : bodyData

    const [dataShow, setDataShow] = useState(initDataShow)
    const [currPage, setCurrPage] = useState(0)

    let pages = 1

    let range: any[] = []

    if (limit !== undefined) {
        let page = Math.floor(bodyData.length / Number(limit))
        pages = bodyData.length % Number(limit) === 0 ? page : page + 1
        range = [...Array(pages).keys()]
    }


    const selectPage = (page: number) => {
        const start = Number(limit) * page
        const end = start + Number(limit)

        setDataShow(bodyData.slice(start, end))

        setCurrPage(page)
    }

    return (
        <div>
            <div className="table-wrapper">
                <table>
                    {
                        headData ? (
                            // headData && renderHead ? (
                            <thead>
                                <tr>
                                    {
                                        headData.map((item: any, index: number) => renderHead && renderHead(item, index))
                                    }
                                </tr>
                            </thead>
                        ) : null
                    }
                    {
                        bodyData ? (
                            // bodyData && renderBody ? (
                            <tbody>
                                {
                                    dataShow?.map((item: any, index: any) => renderBody(item, index))
                                }
                            </tbody>
                        ) : null
                    }
                </table>
            </div>
            {
                pages > 1 ? (
                    <div className="table__pagination">
                        {
                            range.map((item, index) => (
                                <div key={index} className={`table__pagination-item ${currPage === index && 'active'}`} onClick={() => selectPage(index)}>
                                    {item + 1}
                                </div>
                            ))
                        }
                    </div>
                ) : null
            }
        </div>
    )
}

export default Table
