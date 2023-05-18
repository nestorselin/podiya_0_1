"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
exports.default = (0, config_1.registerAs)('db', () => ({
    type: process.env.DB_TYPE || 'postgres',
    url: process.env.DB_URL || 'postgres://user:password@localhost/podiyadb',
}));
//# sourceMappingURL=db.config.js.map