"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoutePoint = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const MathQuaternion_1 = require("./MathQuaternion");
const Vector_1 = require("./Vector");
// @generated message type with reflection information, may provide speed optimized methods
class RoutePoint$Type extends runtime_5.MessageType {
    constructor() {
        super("RoutePoint", [
            { no: 11, name: "velocity", kind: "scalar", oneof: "moveParams", T: 2 /*ScalarType.FLOAT*/ },
            { no: 12, name: "time", kind: "scalar", oneof: "moveParams", T: 2 /*ScalarType.FLOAT*/ },
            { no: 21, name: "rotation", kind: "message", oneof: "rotateParams", T: () => Vector_1.Vector },
            { no: 22, name: "rotation_speed", kind: "message", oneof: "rotateParams", T: () => MathQuaternion_1.MathQuaternion },
            { no: 23, name: "axis_speed", kind: "message", oneof: "rotateParams", T: () => MathQuaternion_1.MathQuaternion },
            { no: 1, name: "position", kind: "message", T: () => Vector_1.Vector },
            { no: 2, name: "arrive_range", kind: "scalar", T: 2 /*ScalarType.FLOAT*/ }
        ]);
    }
    create(value) {
        const message = { moveParams: { oneofKind: undefined }, rotateParams: { oneofKind: undefined }, arriveRange: 0 };
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
                case /* float velocity */ 11:
                    message.moveParams = {
                        oneofKind: "velocity",
                        velocity: reader.float()
                    };
                    break;
                case /* float time */ 12:
                    message.moveParams = {
                        oneofKind: "time",
                        time: reader.float()
                    };
                    break;
                case /* Vector rotation */ 21:
                    message.rotateParams = {
                        oneofKind: "rotation",
                        rotation: Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.rotateParams.rotation)
                    };
                    break;
                case /* MathQuaternion rotation_speed */ 22:
                    message.rotateParams = {
                        oneofKind: "rotationSpeed",
                        rotationSpeed: MathQuaternion_1.MathQuaternion.internalBinaryRead(reader, reader.uint32(), options, message.rotateParams.rotationSpeed)
                    };
                    break;
                case /* MathQuaternion axis_speed */ 23:
                    message.rotateParams = {
                        oneofKind: "axisSpeed",
                        axisSpeed: MathQuaternion_1.MathQuaternion.internalBinaryRead(reader, reader.uint32(), options, message.rotateParams.axisSpeed)
                    };
                    break;
                case /* Vector position */ 1:
                    message.position = Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.position);
                    break;
                case /* float arrive_range */ 2:
                    message.arriveRange = reader.float();
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
        /* float velocity = 11; */
        if (message.moveParams.oneofKind === "velocity")
            writer.tag(11, runtime_1.WireType.Bit32).float(message.moveParams.velocity);
        /* float time = 12; */
        if (message.moveParams.oneofKind === "time")
            writer.tag(12, runtime_1.WireType.Bit32).float(message.moveParams.time);
        /* Vector rotation = 21; */
        if (message.rotateParams.oneofKind === "rotation")
            Vector_1.Vector.internalBinaryWrite(message.rotateParams.rotation, writer.tag(21, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* MathQuaternion rotation_speed = 22; */
        if (message.rotateParams.oneofKind === "rotationSpeed")
            MathQuaternion_1.MathQuaternion.internalBinaryWrite(message.rotateParams.rotationSpeed, writer.tag(22, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* MathQuaternion axis_speed = 23; */
        if (message.rotateParams.oneofKind === "axisSpeed")
            MathQuaternion_1.MathQuaternion.internalBinaryWrite(message.rotateParams.axisSpeed, writer.tag(23, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* Vector position = 1; */
        if (message.position)
            Vector_1.Vector.internalBinaryWrite(message.position, writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* float arrive_range = 2; */
        if (message.arriveRange !== 0)
            writer.tag(2, runtime_1.WireType.Bit32).float(message.arriveRange);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message RoutePoint
 */
exports.RoutePoint = new RoutePoint$Type();
