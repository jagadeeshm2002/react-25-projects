
import React, { useContext } from 'react';
import LightDark from '../light-dark-mode';
import TicTocToe from '../tic-toc-toe';
import ColorGenerator from '../random-color';
import Accordion from '../accordion';
import NavMenu from '../navbar-treeview'
import { FeatureFlagsContext } from './context';
import menus from '../navbar-treeview/data.js'
import QRCode from 'react-qr-code';
import ScrollIndicator from '../scroll-indicator/index.jsx';



export default function FeatureFlags() {

    const {loading,enabledFlags} = useContext(FeatureFlagsContext)

    const componentsToRender =[
        {
            key:"showLightAndDarkMode",
            component : <LightDark/>
        },
        {
            key:"showTicTacToeBoard",
            component : <TicTocToe/>
        },
        {
            key:"showRandomColorGenerator",
            component : <ColorGenerator/>
        },
        {
            key:"showAccordian",
            component : <Accordion/>
        },
        // {
        //     key:"showTreeView",
        //     component : <NavMenu menus={menus}/>
        // },
        // {
        //     key:"showQrCodeGen",
        //     component : <QRCode />
        // },
        // {
        //     key:"showScrollIndicator",
        //     component : <ScrollIndicator />
        // },
        
    ]
    function checkEnabledFlags(getCurrentKey){
        return enabledFlags[getCurrentKey]
    }


    if(loading) return<h1>loading data..</h1>
  return (
    <div><h1>feature flag</h1>
    {componentsToRender.map(componentItem=>checkEnabledFlags(componentItem.key)?componentItem.component:null)}
    </div>
  )
}
