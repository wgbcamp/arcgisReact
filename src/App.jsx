import React from "react";

import { setAssetPath as setCalciteComponentsAssetPath } from '@esri/calcite-components/dist/components';
setCalciteComponentsAssetPath("https://js.arcgis.com/calcite-components/2.13.2/assets");

import "@arcgis/map-components/dist/components/arcgis-map";
import "@arcgis/map-components/dist/components/arcgis-legend";
import "@arcgis/map-components/dist/components/arcgis-search";
import "@arcgis/map-components/dist/components/arcgis-zoom";

import climateHazard from "../public/climateHazard.svg";
import exposure from "../public/exposure.svg";
import riskIndicator from "../public/riskIndicator.svg";
import live from "../public/live.svg";
import compare from "../public/compare.svg";
import dataSources from "../public/dataSources.svg";

export default function App() {
    return (
        <div>
            <div class="topBanner">
                <div class="logo">IMF &nbsp;</div>
                <div class="title">| Climate Risk Dashboard</div>
            </div>
            <div class="mapContainer">
                <div class="dataMenu">
                    <div class="dataMenuTitle">DATA</div>
                    <div class="dataMenuIcons">
                        <img src={climateHazard} width="26px"></img>
                        <img src={exposure} width="26px"></img>
                        <img src={riskIndicator} width="26px"></img>
                        <img src={live} width="26px"></img>
                        <img src={compare} width="26px"></img>
                        <img src={dataSources} width="26px"></img>
                    </div>
                    

                </div>
                    <arcgis-map
                        itemId="d5dda743788a4b0688fe48f43ae7beb9"
                        onarcgisViewReadyChange={(event) => {
                            console.log("MapView ready", event);
                        }}
                    >
                        <arcgis-search position="top-right"></arcgis-search>
                        <arcgis-legend position="bottom-left"></arcgis-legend>
                        <arcgis-zoom className="test" position="bottom-right"></arcgis-zoom>
                    </arcgis-map>
                
            </div>
        </div>
    )
}