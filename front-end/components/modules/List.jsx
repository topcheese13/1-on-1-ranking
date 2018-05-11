import React from "react";

export default class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: props.items | [],
        };
        console.log(this.props);
    }

    render() {
        const itemList = this.props.items.map((item, index) => {
            return (
                <li>
                    <this.props.component key={index} {...item} />
                </li>
            );
        });

        if (this.props.items.length === 0) {
            return null;
        } else {
            return <ul>
                {itemList}
            </ul>
        }
    }
};
