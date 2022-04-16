"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbilityAppliedAbility = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const AbilityScalarValueEntry_1 = require("./AbilityScalarValueEntry");
const AbilityString_1 = require("./AbilityString");
// @generated message type with reflection information, may provide speed optimized methods
class AbilityAppliedAbility$Type extends runtime_5.MessageType {
    constructor() {
        super("AbilityAppliedAbility", [
            { no: 1, name: "ability_name", kind: "message", T: () => AbilityString_1.AbilityString },
            { no: 2, name: "ability_override", kind: "message", T: () => AbilityString_1.AbilityString },
            { no: 3, name: "override_map", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => AbilityScalarValueEntry_1.AbilityScalarValueEntry },
            { no: 4, name: "instanced_ability_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { overrideMap: [], instancedAbilityId: 0 };
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
                case /* AbilityString ability_name */ 1:
                    message.abilityName = AbilityString_1.AbilityString.internalBinaryRead(reader, reader.uint32(), options, message.abilityName);
                    break;
                case /* AbilityString ability_override */ 2:
                    message.abilityOverride = AbilityString_1.AbilityString.internalBinaryRead(reader, reader.uint32(), options, message.abilityOverride);
                    break;
                case /* repeated AbilityScalarValueEntry override_map */ 3:
                    message.overrideMap.push(AbilityScalarValueEntry_1.AbilityScalarValueEntry.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 instanced_ability_id */ 4:
                    message.instancedAbilityId = reader.uint32();
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
        /* AbilityString ability_name = 1; */
        if (message.abilityName)
            AbilityString_1.AbilityString.internalBinaryWrite(message.abilityName, writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* AbilityString ability_override = 2; */
        if (message.abilityOverride)
            AbilityString_1.AbilityString.internalBinaryWrite(message.abilityOverride, writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* repeated AbilityScalarValueEntry override_map = 3; */
        for (let i = 0; i < message.overrideMap.length; i++)
            AbilityScalarValueEntry_1.AbilityScalarValueEntry.internalBinaryWrite(message.overrideMap[i], writer.tag(3, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 instanced_ability_id = 4; */
        if (message.instancedAbilityId !== 0)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.instancedAbilityId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message AbilityAppliedAbility
 */
exports.AbilityAppliedAbility = new AbilityAppliedAbility$Type();
