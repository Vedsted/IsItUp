import React, {Component, ReactNode} from "react";
import {Observer, Status} from "./Observer";
import { View, StyleSheet} from "react-native";

export class Front extends Component{

    private observerList: Array<Array<any>> = [
        ["Google", "https://google.com"],
        ["SDU SSO", "https://sso.sdu.dk/"],
        ["Slagelse MC", "https://slagelse-mc.dk/"],
        ["Slagelse MC", "https://slagelse-mc.dk/"],
        ["Failing Website", "https://dwewefewf-mc.dk/"],

    ];

    updateAll() {

    }

    render(): ReactNode {
        return (
            <View style={style.root}>
                {this.observerList.map(e => {
                    return (<Observer name={e[0]} url={e[1]} status={Status.OFFLINE}></Observer>);
                })}
            </View>
        );
    };
}

const style = StyleSheet.create({
    root: {
        alignSelf: "stretch"
    }
});