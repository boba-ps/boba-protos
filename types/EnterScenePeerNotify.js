"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnterScenePeerNotify = exports.EnterScenePeerNotify_CmdId = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
/**
 * @generated from protobuf enum EnterScenePeerNotify.CmdId
 */
var EnterScenePeerNotify_CmdId;
(function (EnterScenePeerNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    EnterScenePeerNotify_CmdId[EnterScenePeerNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    EnterScenePeerNotify_CmdId[EnterScenePeerNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    EnterScenePeerNotify_CmdId[EnterScenePeerNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: CMD_ID = 223;
     */
    EnterScenePeerNotify_CmdId[EnterScenePeerNotify_CmdId["CMD_ID"] = 223] = "CMD_ID";
})(EnterScenePeerNotify_CmdId = exports.EnterScenePeerNotify_CmdId || (exports.EnterScenePeerNotify_CmdId = {}));
// @generated message type with reflection information, may provide speed optimized methods
class EnterScenePeerNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("EnterScenePeerNotify", [
            { no: 1, name: "dest_scene_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "peer_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "host_peer_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "enter_scene_token", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { destSceneId: 0, peerId: 0, hostPeerId: 0, enterSceneToken: 0 };
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
                case /* uint32 dest_scene_id */ 1:
                    message.destSceneId = reader.uint32();
                    break;
                case /* uint32 peer_id */ 2:
                    message.peerId = reader.uint32();
                    break;
                case /* uint32 host_peer_id */ 3:
                    message.hostPeerId = reader.uint32();
                    break;
                case /* uint32 enter_scene_token */ 4:
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
        /* uint32 dest_scene_id = 1; */
        if (message.destSceneId !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.destSceneId);
        /* uint32 peer_id = 2; */
        if (message.peerId !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.peerId);
        /* uint32 host_peer_id = 3; */
        if (message.hostPeerId !== 0)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.hostPeerId);
        /* uint32 enter_scene_token = 4; */
        if (message.enterSceneToken !== 0)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.enterSceneToken);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message EnterScenePeerNotify
 */
exports.EnterScenePeerNotify = new EnterScenePeerNotify$Type();
