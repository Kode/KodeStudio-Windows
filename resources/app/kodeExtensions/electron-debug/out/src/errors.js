"use strict";
/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
const errors_1 = require("vscode-chrome-debug-core/out/src/errors");
const nls = require("vscode-nls");
const localize = nls.loadMessageBundle();
/**
 * 'Path does not exist' error
 */
function getNotExistErrorResponse(attribute, path) {
    return Promise.reject(new errors_1.ErrorWithMessage({
        id: 2007,
        format: localize('attribute.path.not.exist', "Attribute '{0}' does not exist ('{1}').", attribute, '{path}'),
        variables: { path }
    }));
}
exports.getNotExistErrorResponse = getNotExistErrorResponse;

//# sourceMappingURL=errors.js.map
