"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SceneTimeNotify = exports.SceneTimeNotify_CmdId = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
/**
 * @generated from protobuf enum SceneTimeNotify.CmdId
 */
var SceneTimeNotify_CmdId;
(function (SceneTimeNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SceneTimeNotify_CmdId[SceneTimeNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SceneTimeNotify_CmdId[SceneTimeNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    SceneTimeNotify_CmdId[SceneTimeNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: CMD_ID = 230;
     */
    SceneTimeNotify_CmdId[SceneTimeNotify_CmdId["CMD_ID"] = 230] = "CMD_ID";
})(SceneTimeNotify_CmdId = exports.SceneTimeNotify_CmdId || (exports.SceneTimeNotify_CmdId = {}));
// @generated message type with reflection information, may provide speed optimized methods
class SceneTimeNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("SceneTimeNotify", [
            { no: 1, name: "scene_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "is_paused", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 3, name: "scene_time", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value) {
        const message = { sceneId: 0, isPaused: false, sceneTime: 0n };
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
                case /* uint32 scene_id */ 1:
                    message.sceneId = reader.uint32();
                    break;
                case /* bool is_paused */ 2:
                    message.isPaused = reader.bool();
                    break;
                case /* uint64 scene_time */ 3:
                    message.sceneTime = reader.uint64().toBigInt();
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
        /* uint32 scene_id = 1; */
        if (message.sceneId !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.sceneId);
        /* bool is_paused = 2; */
        if (message.isPaused !== false)
            writer.tag(2, runtime_1.WireType.Varint).bool(message.isPaused);
        /* uint64 scene_time = 3; */
        if (message.sceneTime !== 0n)
            writer.tag(3, runtime_1.WireType.Varint).uint64(message.sceneTime);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SceneTimeNotify
 */
exports.SceneTimeNotify = new SceneTimeNotify$Type();
