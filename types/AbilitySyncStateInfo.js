"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbilitySyncStateInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const AbilityMixinRecoverInfo_1 = require("./AbilityMixinRecoverInfo");
const AbilityAppliedModifier_1 = require("./AbilityAppliedModifier");
const AbilityAppliedAbility_1 = require("./AbilityAppliedAbility");
const AbilityScalarValueEntry_1 = require("./AbilityScalarValueEntry");
// @generated message type with reflection information, may provide speed optimized methods
class AbilitySyncStateInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("AbilitySyncStateInfo", [
            { no: 1, name: "is_inited", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 2, name: "dynamic_value_map", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => AbilityScalarValueEntry_1.AbilityScalarValueEntry },
            { no: 3, name: "applied_abilities", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => AbilityAppliedAbility_1.AbilityAppliedAbility },
            { no: 4, name: "applied_modifiers", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => AbilityAppliedModifier_1.AbilityAppliedModifier },
            { no: 5, name: "mixin_recover_infos", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => AbilityMixinRecoverInfo_1.AbilityMixinRecoverInfo },
            { no: 6, name: "sgv_dynamic_value_map", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => AbilityScalarValueEntry_1.AbilityScalarValueEntry }
        ]);
    }
    create(value) {
        const message = { isInited: false, dynamicValueMap: [], appliedAbilities: [], appliedModifiers: [], mixinRecoverInfos: [], sgvDynamicValueMap: [] };
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
                case /* bool is_inited */ 1:
                    message.isInited = reader.bool();
                    break;
                case /* repeated AbilityScalarValueEntry dynamic_value_map */ 2:
                    message.dynamicValueMap.push(AbilityScalarValueEntry_1.AbilityScalarValueEntry.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated AbilityAppliedAbility applied_abilities */ 3:
                    message.appliedAbilities.push(AbilityAppliedAbility_1.AbilityAppliedAbility.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated AbilityAppliedModifier applied_modifiers */ 4:
                    message.appliedModifiers.push(AbilityAppliedModifier_1.AbilityAppliedModifier.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated AbilityMixinRecoverInfo mixin_recover_infos */ 5:
                    message.mixinRecoverInfos.push(AbilityMixinRecoverInfo_1.AbilityMixinRecoverInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated AbilityScalarValueEntry sgv_dynamic_value_map */ 6:
                    message.sgvDynamicValueMap.push(AbilityScalarValueEntry_1.AbilityScalarValueEntry.internalBinaryRead(reader, reader.uint32(), options));
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
        /* bool is_inited = 1; */
        if (message.isInited !== false)
            writer.tag(1, runtime_1.WireType.Varint).bool(message.isInited);
        /* repeated AbilityScalarValueEntry dynamic_value_map = 2; */
        for (let i = 0; i < message.dynamicValueMap.length; i++)
            AbilityScalarValueEntry_1.AbilityScalarValueEntry.internalBinaryWrite(message.dynamicValueMap[i], writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* repeated AbilityAppliedAbility applied_abilities = 3; */
        for (let i = 0; i < message.appliedAbilities.length; i++)
            AbilityAppliedAbility_1.AbilityAppliedAbility.internalBinaryWrite(message.appliedAbilities[i], writer.tag(3, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* repeated AbilityAppliedModifier applied_modifiers = 4; */
        for (let i = 0; i < message.appliedModifiers.length; i++)
            AbilityAppliedModifier_1.AbilityAppliedModifier.internalBinaryWrite(message.appliedModifiers[i], writer.tag(4, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* repeated AbilityMixinRecoverInfo mixin_recover_infos = 5; */
        for (let i = 0; i < message.mixinRecoverInfos.length; i++)
            AbilityMixinRecoverInfo_1.AbilityMixinRecoverInfo.internalBinaryWrite(message.mixinRecoverInfos[i], writer.tag(5, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* repeated AbilityScalarValueEntry sgv_dynamic_value_map = 6; */
        for (let i = 0; i < message.sgvDynamicValueMap.length; i++)
            AbilityScalarValueEntry_1.AbilityScalarValueEntry.internalBinaryWrite(message.sgvDynamicValueMap[i], writer.tag(6, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message AbilitySyncStateInfo
 */
exports.AbilitySyncStateInfo = new AbilitySyncStateInfo$Type();
