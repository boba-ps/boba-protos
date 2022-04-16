"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbilityScalarValueEntry = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const AbilityScalarType_1 = require("./AbilityScalarType");
const AbilityString_1 = require("./AbilityString");
// @generated message type with reflection information, may provide speed optimized methods
class AbilityScalarValueEntry$Type extends runtime_5.MessageType {
    constructor() {
        super("AbilityScalarValueEntry", [
            { no: 3, name: "float_value", kind: "scalar", oneof: "value", T: 2 /*ScalarType.FLOAT*/ },
            { no: 4, name: "string_value", kind: "scalar", oneof: "value", T: 9 /*ScalarType.STRING*/ },
            { no: 5, name: "int_value", kind: "scalar", oneof: "value", T: 5 /*ScalarType.INT32*/ },
            { no: 6, name: "uint_value", kind: "scalar", oneof: "value", T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "key", kind: "message", T: () => AbilityString_1.AbilityString },
            { no: 2, name: "value_type", kind: "enum", T: () => ["AbilityScalarType", AbilityScalarType_1.AbilityScalarType] }
        ]);
    }
    create(value) {
        const message = { value: { oneofKind: undefined }, valueType: 0 };
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
                case /* float float_value */ 3:
                    message.value = {
                        oneofKind: "floatValue",
                        floatValue: reader.float()
                    };
                    break;
                case /* string string_value */ 4:
                    message.value = {
                        oneofKind: "stringValue",
                        stringValue: reader.string()
                    };
                    break;
                case /* int32 int_value */ 5:
                    message.value = {
                        oneofKind: "intValue",
                        intValue: reader.int32()
                    };
                    break;
                case /* uint32 uint_value */ 6:
                    message.value = {
                        oneofKind: "uintValue",
                        uintValue: reader.uint32()
                    };
                    break;
                case /* AbilityString key */ 1:
                    message.key = AbilityString_1.AbilityString.internalBinaryRead(reader, reader.uint32(), options, message.key);
                    break;
                case /* AbilityScalarType value_type */ 2:
                    message.valueType = reader.int32();
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
        /* float float_value = 3; */
        if (message.value.oneofKind === "floatValue")
            writer.tag(3, runtime_1.WireType.Bit32).float(message.value.floatValue);
        /* string string_value = 4; */
        if (message.value.oneofKind === "stringValue")
            writer.tag(4, runtime_1.WireType.LengthDelimited).string(message.value.stringValue);
        /* int32 int_value = 5; */
        if (message.value.oneofKind === "intValue")
            writer.tag(5, runtime_1.WireType.Varint).int32(message.value.intValue);
        /* uint32 uint_value = 6; */
        if (message.value.oneofKind === "uintValue")
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.value.uintValue);
        /* AbilityString key = 1; */
        if (message.key)
            AbilityString_1.AbilityString.internalBinaryWrite(message.key, writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* AbilityScalarType value_type = 2; */
        if (message.valueType !== 0)
            writer.tag(2, runtime_1.WireType.Varint).int32(message.valueType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message AbilityScalarValueEntry
 */
exports.AbilityScalarValueEntry = new AbilityScalarValueEntry$Type();
