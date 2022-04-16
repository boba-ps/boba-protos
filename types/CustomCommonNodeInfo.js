"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomCommonNodeInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class CustomCommonNodeInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("CustomCommonNodeInfo", [
            { no: 1, name: "parent_index", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 2, name: "config_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "slot_identifier", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { parentIndex: 0, configId: 0, slotIdentifier: "" };
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
                case /* int32 parent_index */ 1:
                    message.parentIndex = reader.int32();
                    break;
                case /* uint32 config_id */ 2:
                    message.configId = reader.uint32();
                    break;
                case /* string slot_identifier */ 3:
                    message.slotIdentifier = reader.string();
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
        /* int32 parent_index = 1; */
        if (message.parentIndex !== 0)
            writer.tag(1, runtime_1.WireType.Varint).int32(message.parentIndex);
        /* uint32 config_id = 2; */
        if (message.configId !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.configId);
        /* string slot_identifier = 3; */
        if (message.slotIdentifier !== "")
            writer.tag(3, runtime_1.WireType.LengthDelimited).string(message.slotIdentifier);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message CustomCommonNodeInfo
 */
exports.CustomCommonNodeInfo = new CustomCommonNodeInfo$Type();
