"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbilityString = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class AbilityString$Type extends runtime_5.MessageType {
    constructor() {
        super("AbilityString", [
            { no: 1, name: "str", kind: "scalar", oneof: "type", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "hash", kind: "scalar", oneof: "type", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { type: { oneofKind: undefined } };
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
                case /* string str */ 1:
                    message.type = {
                        oneofKind: "str",
                        str: reader.string()
                    };
                    break;
                case /* uint32 hash */ 2:
                    message.type = {
                        oneofKind: "hash",
                        hash: reader.uint32()
                    };
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
        /* string str = 1; */
        if (message.type.oneofKind === "str")
            writer.tag(1, runtime_1.WireType.LengthDelimited).string(message.type.str);
        /* uint32 hash = 2; */
        if (message.type.oneofKind === "hash")
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.type.hash);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message AbilityString
 */
exports.AbilityString = new AbilityString$Type();
