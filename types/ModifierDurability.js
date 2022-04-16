"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModifierDurability = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class ModifierDurability$Type extends runtime_5.MessageType {
    constructor() {
        super("ModifierDurability", [
            { no: 1, name: "reduce_ratio", kind: "scalar", T: 2 /*ScalarType.FLOAT*/ },
            { no: 2, name: "remaining_durability", kind: "scalar", T: 2 /*ScalarType.FLOAT*/ }
        ]);
    }
    create(value) {
        const message = { reduceRatio: 0, remainingDurability: 0 };
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
                case /* float reduce_ratio */ 1:
                    message.reduceRatio = reader.float();
                    break;
                case /* float remaining_durability */ 2:
                    message.remainingDurability = reader.float();
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
        /* float reduce_ratio = 1; */
        if (message.reduceRatio !== 0)
            writer.tag(1, runtime_1.WireType.Bit32).float(message.reduceRatio);
        /* float remaining_durability = 2; */
        if (message.remainingDurability !== 0)
            writer.tag(2, runtime_1.WireType.Bit32).float(message.remainingDurability);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ModifierDurability
 */
exports.ModifierDurability = new ModifierDurability$Type();
