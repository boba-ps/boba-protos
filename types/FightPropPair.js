"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FightPropPair = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class FightPropPair$Type extends runtime_5.MessageType {
    constructor() {
        super("FightPropPair", [
            { no: 1, name: "prop_type", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "prop_value", kind: "scalar", T: 2 /*ScalarType.FLOAT*/ }
        ]);
    }
    create(value) {
        const message = { propType: 0, propValue: 0 };
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
                case /* uint32 prop_type */ 1:
                    message.propType = reader.uint32();
                    break;
                case /* float prop_value */ 2:
                    message.propValue = reader.float();
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
        /* uint32 prop_type = 1; */
        if (message.propType !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.propType);
        /* float prop_value = 2; */
        if (message.propValue !== 0)
            writer.tag(2, runtime_1.WireType.Bit32).float(message.propValue);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message FightPropPair
 */
exports.FightPropPair = new FightPropPair$Type();
