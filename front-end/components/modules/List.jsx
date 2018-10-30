import React from "react";
import classNames from "classnames";

export default class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: props.items | [],
        };
    }

    render() {
        const itemList = this.props.items.map((item, index) => {
            return (
                <li className="listItem" key={`list-${index}`}>
                    <this.props.component className="listItem-item" index={index + 1} {...item} />
                </li>
            );
        });

        if (this.props.items.length === 0) {
            return null;
        } else {
            return <ul className={classNames("listItems", this.props.className)}>
                {itemList}
            </ul>
        }
    }
};
