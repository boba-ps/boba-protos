"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlatformInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const Route_1 = require("./Route");
const MovingPlatformType_1 = require("./MovingPlatformType");
const MathQuaternion_1 = require("./MathQuaternion");
const Vector_1 = require("./Vector");
// @generated message type with reflection information, may provide speed optimized methods
class PlatformInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("PlatformInfo", [
            { no: 1, name: "route_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "start_index", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 3, name: "start_route_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "start_scene_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "start_pos", kind: "message", T: () => Vector_1.Vector },
            { no: 8, name: "is_started", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 9, name: "start_rot", kind: "message", T: () => MathQuaternion_1.MathQuaternion },
            { no: 10, name: "stop_scene_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "pos_offset", kind: "message", T: () => Vector_1.Vector },
            { no: 12, name: "rot_offset", kind: "message", T: () => MathQuaternion_1.MathQuaternion },
            { no: 13, name: "moving_platform_type", kind: "enum", T: () => ["MovingPlatformType", MovingPlatformType_1.MovingPlatformType] },
            { no: 14, name: "is_active", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 15, name: "route", kind: "message", T: () => Route_1.Route },
            { no: 16, name: "point_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { routeId: 0, startIndex: 0, startRouteTime: 0, startSceneTime: 0, isStarted: false, stopSceneTime: 0, movingPlatformType: 0, isActive: false, pointId: 0 };
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
                case /* uint32 route_id */ 1:
                    message.routeId = reader.uint32();
                    break;
                case /* int32 start_index */ 2:
                    message.startIndex = reader.int32();
                    break;
                case /* uint32 start_route_time */ 3:
                    message.startRouteTime = reader.uint32();
                    break;
                case /* uint32 start_scene_time */ 4:
                    message.startSceneTime = reader.uint32();
                    break;
                case /* Vector start_pos */ 7:
                    message.startPos = Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.startPos);
                    break;
                case /* bool is_started */ 8:
                    message.isStarted = reader.bool();
                    break;
                case /* MathQuaternion start_rot */ 9:
                    message.startRot = MathQuaternion_1.MathQuaternion.internalBinaryRead(reader, reader.uint32(), options, message.startRot);
                    break;
                case /* uint32 stop_scene_time */ 10:
                    message.stopSceneTime = reader.uint32();
                    break;
                case /* Vector pos_offset */ 11:
                    message.posOffset = Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.posOffset);
                    break;
                case /* MathQuaternion rot_offset */ 12:
                    message.rotOffset = MathQuaternion_1.MathQuaternion.internalBinaryRead(reader, reader.uint32(), options, message.rotOffset);
                    break;
                case /* MovingPlatformType moving_platform_type */ 13:
                    message.movingPlatformType = reader.int32();
                    break;
                case /* bool is_active */ 14:
                    message.isActive = reader.bool();
                    break;
                case /* Route route */ 15:
                    message.route = Route_1.Route.internalBinaryRead(reader, reader.uint32(), options, message.route);
                    break;
                case /* uint32 point_id */ 16:
                    message.pointId = reader.uint32();
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
        /* uint32 route_id = 1; */
        if (message.routeId !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.routeId);
        /* int32 start_index = 2; */
        if (message.startIndex !== 0)
            writer.tag(2, runtime_1.WireType.Varint).int32(message.startIndex);
        /* uint32 start_route_time = 3; */
        if (message.startRouteTime !== 0)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.startRouteTime);
        /* uint32 start_scene_time = 4; */
        if (message.startSceneTime !== 0)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.startSceneTime);
        /* Vector start_pos = 7; */
        if (message.startPos)
            Vector_1.Vector.internalBinaryWrite(message.startPos, writer.tag(7, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* bool is_started = 8; */
        if (message.isStarted !== false)
            writer.tag(8, runtime_1.WireType.Varint).bool(message.isStarted);
        /* MathQuaternion start_rot = 9; */
        if (message.startRot)
            MathQuaternion_1.MathQuaternion.internalBinaryWrite(message.startRot, writer.tag(9, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 stop_scene_time = 10; */
        if (message.stopSceneTime !== 0)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.stopSceneTime);
        /* Vector pos_offset = 11; */
        if (message.posOffset)
            Vector_1.Vector.internalBinaryWrite(message.posOffset, writer.tag(11, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* MathQuaternion rot_offset = 12; */
        if (message.rotOffset)
            MathQuaternion_1.MathQuaternion.internalBinaryWrite(message.rotOffset, writer.tag(12, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* MovingPlatformType moving_platform_type = 13; */
        if (message.movingPlatformType !== 0)
            writer.tag(13, runtime_1.WireType.Varint).int32(message.movingPlatformType);
        /* bool is_active = 14; */
        if (message.isActive !== false)
            writer.tag(14, runtime_1.WireType.Varint).bool(message.isActive);
        /* Route route = 15; */
        if (message.route)
            Route_1.Route.internalBinaryWrite(message.route, writer.tag(15, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 point_id = 16; */
        if (message.pointId !== 0)
            writer.tag(16, runtime_1.WireType.Varint).uint32(message.pointId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message PlatformInfo
 */
exports.PlatformInfo = new PlatformInfo$Type();
