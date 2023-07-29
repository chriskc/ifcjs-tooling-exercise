// import * as THREE from 'three'

import { Color } from 'three';
import { IfcViewerAPI } from 'web-ifc-viewer';
// import { IfcViewerAPI } from 'ifc-viewer-api';

const container = document.getElementById('viewer-container');
const viewer = new IfcViewerAPI({ container, backgroundColor: new Color(0xffffff) });
viewer.grid.setGrid();
viewer.axes.setAxes();

async function loadIfc(url) {
    await viewer.IFC.setWasmPath("../../../");
    const model = await viewer.IFC.loadIfcUrl(url);
    viewer.shadowDropper.renderShadow(model.modelID);
}

loadIfc('.../models/model-house.ifc');