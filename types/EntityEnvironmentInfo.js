"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityEnvironmentInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class EntityEnvironmentInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("EntityEnvironmentInfo", [
            { no: 1, name: "json_climate_type", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "climate_area_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { jsonClimateType: 0, climateAreaId: 0 };
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
                case /* uint32 json_climate_type */ 1:
                    message.jsonClimateType = reader.uint32();
                    break;
                case /* uint32 climate_area_id */ 2:
                    message.climateAreaId = reader.uint32();
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
        /* uint32 json_climate_type = 1; */
        if (message.jsonClimateType !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.jsonClimateType);
        /* uint32 climate_area_id = 2; */
        if (message.climateAreaId !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.climateAreaId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message EntityEnvironmentInfo
 */
exports.EntityEnvironmentInfo = new EntityEnvironmentInfo$Type();
