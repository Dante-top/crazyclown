/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import Card from 'react-bootstrap/Card'

interface Props {
    myTokenList: any
}

const MyNFTView = (props: Props):JSX.Element => {
    const { myTokenList } = props;
    console.log('myTokenList', myTokenList)
    const renderDate = (timestamp: any) => {
        const date = new Date(timestamp);
        return(date.getDate()+
          "/"+(date.getMonth()+1)+
          "/"+date.getFullYear()+
          " "+date.getHours()+
          ":"+date.getMinutes()+
          ":"+date.getSeconds());
    }
    return (
        <div className="container">
            <div className="row">
            {
                myTokenList.map((item: any, key: number) => 
                    <div className="col-12 col-md-3 p-2">
                        <Card>
                            <Card.Img variant="top" src={item.http_image_url} />
                            <Card.Body>
                                <Card.Title>{item.name}</Card.Title>
                                <Card.Text>
                                {item.hash}
                                </Card.Text>
                                <Card.Text>
                                {renderDate(item.date)}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                )
            }
            </div>
        </div>
    )
    
}

export default MyNFTView