"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShortAbilityHashPair = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class ShortAbilityHashPair$Type extends runtime_5.MessageType {
    constructor() {
        super("ShortAbilityHashPair", [
            { no: 1, name: "ability_name_hash", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 2, name: "ability_config_hash", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = { abilityNameHash: 0, abilityConfigHash: 0 };
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
                case /* int32 ability_name_hash */ 1:
                    message.abilityNameHash = reader.int32();
                    break;
                case /* int32 ability_config_hash */ 2:
                    message.abilityConfigHash = reader.int32();
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
        /* int32 ability_name_hash = 1; */
        if (message.abilityNameHash !== 0)
            writer.tag(1, runtime_1.WireType.Varint).int32(message.abilityNameHash);
        /* int32 ability_config_hash = 2; */
        if (message.abilityConfigHash !== 0)
            writer.tag(2, runtime_1.WireType.Varint).int32(message.abilityConfigHash);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ShortAbilityHashPair
 */
exports.ShortAbilityHashPair = new ShortAbilityHashPair$Type();
