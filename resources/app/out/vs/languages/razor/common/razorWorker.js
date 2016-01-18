/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", 'vs/languages/html/common/htmlWorker'], function (require, exports, htmlWorker) {
    function getRazorTagProvider() {
        var customTags = {
            a: ['asp-action', 'asp-controller', 'asp-fragment', 'asp-host', 'asp-protocol', 'asp-route'],
            div: ['asp-validation-summary'],
            form: ['asp-action', 'asp-controller', 'asp-anti-forgery'],
            input: ['asp-for', 'asp-format'],
            label: ['asp-for'],
            select: ['asp-for', 'asp-items'],
            span: ['asp-validation-for']
        };
        return {
            collectTags: function (collector) {
                // no extra tags
            },
            collectAttributes: function (tag, collector) {
                if (tag) {
                    var attributes = customTags[tag];
                    if (attributes) {
                        attributes.forEach(function (a) { return collector(a, null); });
                    }
                }
            },
            collectValues: function (tag, attribute, collector) {
                // no values
            }
        };
    }
    exports.getRazorTagProvider = getRazorTagProvider;
    var RAZORWorker = (function (_super) {
        __extends(RAZORWorker, _super);
        function RAZORWorker() {
            _super.apply(this, arguments);
        }
        RAZORWorker.prototype.addCustomTagProviders = function (providers) {
            // don't call super and don't add the angular provider for now
            providers.push(getRazorTagProvider());
        };
        return RAZORWorker;
    })(htmlWorker.HTMLWorker);
    exports.RAZORWorker = RAZORWorker;
});
//# sourceMappingURL=razorWorker.js.map