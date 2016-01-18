/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
'use strict';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
define(["require", "exports", 'vs/workbench/common/editor/textEditorModel', 'vs/editor/common/services/modeService', 'vs/editor/common/services/modelService'], function (require, exports, textEditorModel_1, modeService_1, modelService_1) {
    /**
     * An editor model whith an in-memory, readonly content that is backed by an existing editor model.
     */
    var ResourceEditorModel = (function (_super) {
        __extends(ResourceEditorModel, _super);
        function ResourceEditorModel(resource, modeService, modelService) {
            _super.call(this, modelService, modeService, resource);
        }
        ResourceEditorModel = __decorate([
            __param(1, modeService_1.IModeService),
            __param(2, modelService_1.IModelService)
        ], ResourceEditorModel);
        return ResourceEditorModel;
    })(textEditorModel_1.BaseTextEditorModel);
    exports.ResourceEditorModel = ResourceEditorModel;
});
//# sourceMappingURL=resourceEditorModel.js.map