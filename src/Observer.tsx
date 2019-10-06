import React, {Component, ReactNode} from "react";
import { View, Text, StyleSheet } from "react-native";

export enum Status {
    ONLINE = "Online", 
    OFFLINE = "Offline",
}

export interface Props {
    name: string;
    url: string;
    status?: Status;
}
  
interface State {
    status: Status;
}

export class Observer extends Component<Props, State>{

    constructor(props: Props) {
        super(props);

        this.state = {
            status: props.status || Status.OFFLINE
        }

        this.checkStatus();
    };

    checkStatus(): void {
            fetch(this.props.url)
            .then(response => { 
                if (!response.ok) {
                    console.log("State not ok for: " + this.props.url);
                    this.setState({status: Status.OFFLINE});
                } else {
                    console.log("State online for: " + this.props.url);
                    this.setState({status: Status.ONLINE});
                    //style.container.backgroundColor = 
                }
            }).catch( e => {
                this.setState({status: Status.OFFLINE});
                console.log("Fetch fucked up for: " + this.props.url);
            });
    }

    render(): ReactNode {
        return (
            <View style={[style.container, this.state.status == Status.ONLINE ? style.online : style.offline]}>
                <Text style={style.name}>
                    {this.props.name}
                </Text>
                <Text style={style.state}>
                    {this.state.status}
                </Text>
            </View>
        );
    };
}
 
let style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 10,
        paddingTop: 10,
    },
    online: {
        backgroundColor: '#65a53e',
    },
    offline: {
        backgroundColor: '#f53030',
    },
    name: {
        flex: 1,
        fontWeight: "bold",
        fontSize: 20,
        marginLeft: 10,
    },
    state: {
        flex: 1,
        fontSize: 20,
        textAlign: "right",
        marginRight: 10,
    }
});