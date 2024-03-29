import * as React from "react";

export interface Props {
    name: String,
    enthusiasmLevel?: number;
}

interface State {
    currentEnthusiasm: number;
}

class Hello extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { currentEnthusiasm: props.enthusiasmLevel || 1 };
    }

    updateEnthusiasm(currentEnthusiasm: number) {
        this.setState({ currentEnthusiasm });
    }

    onIncrement = () => this.updateEnthusiasm(this.state.currentEnthusiasm + 1)
    onDecrement = () => this.updateEnthusiasm(this.state.currentEnthusiasm - 1)

    render() {
        const { name } = this.props;

        if (this.state.currentEnthusiasm <= 0) {
            throw new Error('You could be a little more enthusiastic. :D');
        }

        return (
            <div className="hello">
                <div className="greeting">
                    Hello {name + getExclamationMarks(this.state.currentEnthusiasm)}
                </div>

                <button onClick={this.onDecrement}>-</button>
                <button onClick={this.onIncrement}>+</button>
            </div>
        )
    }


}


function getExclamationMarks(numChars: number) {
    return Array(numChars + 1).join('!');
}

export default Hello