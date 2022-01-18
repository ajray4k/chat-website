"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountGraphql = void 0;
const type_graphql_1 = require("type-graphql");
const BaseGraphql_1 = require("../../objects/BaseGraphql");
let AccountGraphql = class AccountGraphql extends BaseGraphql_1.BaseGraphql {
    username;
    password;
};
__decorate([
    (0, type_graphql_1.Field)(() => String)
], AccountGraphql.prototype, "username", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String)
], AccountGraphql.prototype, "password", void 0);
AccountGraphql = __decorate([
    (0, type_graphql_1.ObjectType)()
], AccountGraphql);
exports.AccountGraphql = AccountGraphql;
