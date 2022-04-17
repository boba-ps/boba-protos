"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PingReq = exports.PingReq_CmdId = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
/**
 * @generated from protobuf enum PingReq.CmdId
 */
var PingReq_CmdId;
(function (PingReq_CmdId) {
    /**
     * @generated from protobuf enum value: ENET_CHANNEL_ID = 0;
     */
    PingReq_CmdId[PingReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_CHANNEL_ID = 0;
     */
    PingReq_CmdId[PingReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PingReq_CmdId[PingReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PingReq_CmdId[PingReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
    /**
     * @generated from protobuf enum value: CMD_ID = 100;
     */
    PingReq_CmdId[PingReq_CmdId["CMD_ID"] = 100] = "CMD_ID";
})(PingReq_CmdId = exports.PingReq_CmdId || (exports.PingReq_CmdId = {}));
// @generated message type with reflection information, may provide speed optimized methods
class PingReq$Type extends runtime_5.MessageType {
    constructor() {
        super("PingReq", [
            { no: 1, name: "seq", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "client_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "sc_data", kind: "scalar", T: 12 /*ScalarType.BYTES*/ },
            { no: 4, name: "ue_time", kind: "scalar", T: 2 /*ScalarType.FLOAT*/ },
            { no: 5, name: "total_tick_time", kind: "scalar", T: 1 /*ScalarType.DOUBLE*/ }
        ]);
    }
    create(value) {
        const message = { seq: 0, clientTime: 0, scData: new Uint8Array(0), ueTime: 0, totalTickTime: 0 };
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
                case /* uint32 seq */ 1:
                    message.seq = reader.uint32();
                    break;
                case /* uint32 client_time */ 2:
                    message.clientTime = reader.uint32();
                    break;
                case /* bytes sc_data */ 3:
                    message.scData = reader.bytes();
                    break;
                case /* float ue_time */ 4:
                    message.ueTime = reader.float();
                    break;
                case /* double total_tick_time */ 5:
                    message.totalTickTime = reader.double();
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
        /* uint32 seq = 1; */
        if (message.seq !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.seq);
        /* uint32 client_time = 2; */
        if (message.clientTime !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.clientTime);
        /* bytes sc_data = 3; */
        if (message.scData.length)
            writer.tag(3, runtime_1.WireType.LengthDelimited).bytes(message.scData);
        /* float ue_time = 4; */
        if (message.ueTime !== 0)
            writer.tag(4, runtime_1.WireType.Bit32).float(message.ueTime);
        /* double total_tick_time = 5; */
        if (message.totalTickTime !== 0)
            writer.tag(5, runtime_1.WireType.Bit64).double(message.totalTickTime);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message PingReq
 */
exports.PingReq = new PingReq$Type();
