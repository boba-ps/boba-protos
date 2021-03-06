"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HostPlayerNotify = exports.HostPlayerNotify_CmdId = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
/**
 * @generated from protobuf enum HostPlayerNotify.CmdId
 */
var HostPlayerNotify_CmdId;
(function (HostPlayerNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HostPlayerNotify_CmdId[HostPlayerNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HostPlayerNotify_CmdId[HostPlayerNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HostPlayerNotify_CmdId[HostPlayerNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: CMD_ID = 389;
     */
    HostPlayerNotify_CmdId[HostPlayerNotify_CmdId["CMD_ID"] = 389] = "CMD_ID";
})(HostPlayerNotify_CmdId = exports.HostPlayerNotify_CmdId || (exports.HostPlayerNotify_CmdId = {}));
// @generated message type with reflection information, may provide speed optimized methods
class HostPlayerNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("HostPlayerNotify", [
            { no: 1, name: "host_uid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "host_peer_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { hostUid: 0, hostPeerId: 0 };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 host_uid */ 1:
                    message.hostUid = reader.uint32();
                    break;
                case /* uint32 host_peer_id */ 2:
                    message.hostPeerId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* uint32 host_uid = 1; */
        if (message.hostUid !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.hostUid);
        /* uint32 host_peer_id = 2; */
        if (message.hostPeerId !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.hostPeerId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message HostPlayerNotify
 */
exports.HostPlayerNotify = new HostPlayerNotify$Type();
