import React from "react";

import { Layout } from '../../components'
import FirstScreen from './compnents/FirstScreen'
import SecondScreen from "./compnents/SecondScreen";
import ThirdScreen from "./compnents/ThirdScreen";

const HomePage = () => {
    return (
        <Layout>
            <FirstScreen />
            <SecondScreen />
            <ThirdScreen />
        </Layout>
    )
}

export default HomePage