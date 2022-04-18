"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetPlayerBlacklistReq = exports.GetPlayerBlacklistReq_CmdId = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
/**
 * @generated from protobuf enum GetPlayerBlacklistReq.CmdId
 */
var GetPlayerBlacklistReq_CmdId;
(function (GetPlayerBlacklistReq_CmdId) {
    /**
     * @generated from protobuf enum value: ENET_CHANNEL_ID = 0;
     */
    GetPlayerBlacklistReq_CmdId[GetPlayerBlacklistReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_CHANNEL_ID = 0;
     */
    GetPlayerBlacklistReq_CmdId[GetPlayerBlacklistReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetPlayerBlacklistReq_CmdId[GetPlayerBlacklistReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetPlayerBlacklistReq_CmdId[GetPlayerBlacklistReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
    /**
     * @generated from protobuf enum value: CMD_ID = 4081;
     */
    GetPlayerBlacklistReq_CmdId[GetPlayerBlacklistReq_CmdId["CMD_ID"] = 4081] = "CMD_ID";
})(GetPlayerBlacklistReq_CmdId = exports.GetPlayerBlacklistReq_CmdId || (exports.GetPlayerBlacklistReq_CmdId = {}));
// @generated message type with reflection information, may provide speed optimized methods
class GetPlayerBlacklistReq$Type extends runtime_4.MessageType {
    constructor() {
        super("GetPlayerBlacklistReq", []);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_3.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_2.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        return target ?? this.create();
    }
    internalBinaryWrite(message, writer, options) {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GetPlayerBlacklistReq
 */
exports.GetPlayerBlacklistReq = new GetPlayerBlacklistReq$Type();
