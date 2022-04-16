"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeatureBlockInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class FeatureBlockInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("FeatureBlockInfo", [
            { no: 1, name: "feature_type", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "end_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { featureType: 0, endTime: 0 };
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
                case /* uint32 feature_type */ 1:
                    message.featureType = reader.uint32();
                    break;
                case /* uint32 end_time */ 2:
                    message.endTime = reader.uint32();
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
        /* uint32 feature_type = 1; */
        if (message.featureType !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.featureType);
        /* uint32 end_time = 2; */
        if (message.endTime !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.endTime);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message FeatureBlockInfo
 */
exports.FeatureBlockInfo = new FeatureBlockInfo$Type();
