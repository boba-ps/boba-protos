"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SceneDataNotify = exports.SceneDataNotify_CmdId = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
/**
 * @generated from protobuf enum SceneDataNotify.CmdId
 */
var SceneDataNotify_CmdId;
(function (SceneDataNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SceneDataNotify_CmdId[SceneDataNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SceneDataNotify_CmdId[SceneDataNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    SceneDataNotify_CmdId[SceneDataNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: CMD_ID = 3333;
     */
    SceneDataNotify_CmdId[SceneDataNotify_CmdId["CMD_ID"] = 3333] = "CMD_ID";
})(SceneDataNotify_CmdId = exports.SceneDataNotify_CmdId || (exports.SceneDataNotify_CmdId = {}));
// @generated message type with reflection information, may provide speed optimized methods
class SceneDataNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("SceneDataNotify", [
            { no: 1, name: "level_config_name_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { levelConfigNameList: [] };
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
                case /* repeated string level_config_name_list */ 1:
                    message.levelConfigNameList.push(reader.string());
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
        /* repeated string level_config_name_list = 1; */
        for (let i = 0; i < message.levelConfigNameList.length; i++)
            writer.tag(1, runtime_1.WireType.LengthDelimited).string(message.levelConfigNameList[i]);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SceneDataNotify
 */
exports.SceneDataNotify = new SceneDataNotify$Type();
