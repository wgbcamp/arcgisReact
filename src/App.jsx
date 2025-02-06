import React from "react";

import { setAssetPath as setCalciteComponentsAssetPath } from '@esri/calcite-components/dist/components';
setCalciteComponentsAssetPath("https://js.arcgis.com/calcite-components/2.13.2/assets");

import "@arcgis/map-components/dist/components/arcgis-map";
import "@arcgis/map-components/dist/components/arcgis-legend";
import "@arcgis/map-components/dist/components/arcgis-search";
import "@arcgis/map-components/dist/components/arcgis-zoom";

export default function App() {
    return (
        <div>
            <div class="topBanner"></div>
            <div class="mapContainer">
                <div class="dataMenu"></div>
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