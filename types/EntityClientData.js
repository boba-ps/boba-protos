"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityClientData = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class EntityClientData$Type extends runtime_5.MessageType {
    constructor() {
        super("EntityClientData", [
            { no: 1, name: "wind_change_scene_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "windmill_sync_angle", kind: "scalar", T: 2 /*ScalarType.FLOAT*/ },
            { no: 3, name: "wind_change_target_level", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = { windChangeSceneTime: 0, windmillSyncAngle: 0, windChangeTargetLevel: 0 };
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
                case /* uint32 wind_change_scene_time */ 1:
                    message.windChangeSceneTime = reader.uint32();
                    break;
                case /* float windmill_sync_angle */ 2:
                    message.windmillSyncAngle = reader.float();
                    break;
                case /* int32 wind_change_target_level */ 3:
                    message.windChangeTargetLevel = reader.int32();
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
        /* uint32 wind_change_scene_time = 1; */
        if (message.windChangeSceneTime !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.windChangeSceneTime);
        /* float windmill_sync_angle = 2; */
        if (message.windmillSyncAngle !== 0)
            writer.tag(2, runtime_1.WireType.Bit32).float(message.windmillSyncAngle);
        /* int32 wind_change_target_level = 3; */
        if (message.windChangeTargetLevel !== 0)
            writer.tag(3, runtime_1.WireType.Varint).int32(message.windChangeTargetLevel);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message EntityClientData
 */
exports.EntityClientData = new EntityClientData$Type();
