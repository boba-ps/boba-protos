"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnterSceneReadyRsp = exports.EnterSceneReadyRsp_CmdId = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
/**
 * @generated from protobuf enum EnterSceneReadyRsp.CmdId
 */
var EnterSceneReadyRsp_CmdId;
(function (EnterSceneReadyRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    EnterSceneReadyRsp_CmdId[EnterSceneReadyRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    EnterSceneReadyRsp_CmdId[EnterSceneReadyRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    EnterSceneReadyRsp_CmdId[EnterSceneReadyRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: CMD_ID = 245;
     */
    EnterSceneReadyRsp_CmdId[EnterSceneReadyRsp_CmdId["CMD_ID"] = 245] = "CMD_ID";
})(EnterSceneReadyRsp_CmdId = exports.EnterSceneReadyRsp_CmdId || (exports.EnterSceneReadyRsp_CmdId = {}));
// @generated message type with reflection information, may provide speed optimized methods
class EnterSceneReadyRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("EnterSceneReadyRsp", [
            { no: 1, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 2, name: "enter_scene_token", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { retcode: 0, enterSceneToken: 0 };
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
                case /* int32 retcode */ 1:
                    message.retcode = reader.int32();
                    break;
                case /* uint32 enter_scene_token */ 2:
                    message.enterSceneToken = reader.uint32();
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
        /* int32 retcode = 1; */
        if (message.retcode !== 0)
            writer.tag(1, runtime_1.WireType.Varint).int32(message.retcode);
        /* uint32 enter_scene_token = 2; */
        if (message.enterSceneToken !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.enterSceneToken);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message EnterSceneReadyRsp
 */
exports.EnterSceneReadyRsp = new EnterSceneReadyRsp$Type();
