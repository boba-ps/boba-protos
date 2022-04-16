"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbilityMixinRecoverInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const MassivePropSyncInfo_1 = require("./MassivePropSyncInfo");
// @generated message type with reflection information, may provide speed optimized methods
class AbilityMixinRecoverInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("AbilityMixinRecoverInfo", [
            { no: 1, name: "instanced_ability_id", kind: "scalar", oneof: "source", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "instanced_modifier_id", kind: "scalar", oneof: "source", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "local_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "data_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "is_serverbuff_modifier", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 6, name: "massive_prop_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => MassivePropSyncInfo_1.MassivePropSyncInfo }
        ]);
    }
    create(value) {
        const message = { source: { oneofKind: undefined }, localId: 0, dataList: [], isServerbuffModifier: false, massivePropList: [] };
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
                case /* uint32 instanced_ability_id */ 1:
                    message.source = {
                        oneofKind: "instancedAbilityId",
                        instancedAbilityId: reader.uint32()
                    };
                    break;
                case /* uint32 instanced_modifier_id */ 2:
                    message.source = {
                        oneofKind: "instancedModifierId",
                        instancedModifierId: reader.uint32()
                    };
                    break;
                case /* uint32 local_id */ 3:
                    message.localId = reader.uint32();
                    break;
                case /* repeated uint32 data_list */ 4:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.dataList.push(reader.uint32());
                    else
                        message.dataList.push(reader.uint32());
                    break;
                case /* bool is_serverbuff_modifier */ 5:
                    message.isServerbuffModifier = reader.bool();
                    break;
                case /* repeated MassivePropSyncInfo massive_prop_list */ 6:
                    message.massivePropList.push(MassivePropSyncInfo_1.MassivePropSyncInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* uint32 instanced_ability_id = 1; */
        if (message.source.oneofKind === "instancedAbilityId")
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.source.instancedAbilityId);
        /* uint32 instanced_modifier_id = 2; */
        if (message.source.oneofKind === "instancedModifierId")
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.source.instancedModifierId);
        /* uint32 local_id = 3; */
        if (message.localId !== 0)
            writer.tag(3, runtime_2.WireType.Varint).uint32(message.localId);
        /* repeated uint32 data_list = 4; */
        if (message.dataList.length) {
            writer.tag(4, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.dataList.length; i++)
                writer.uint32(message.dataList[i]);
            writer.join();
        }
        /* bool is_serverbuff_modifier = 5; */
        if (message.isServerbuffModifier !== false)
            writer.tag(5, runtime_2.WireType.Varint).bool(message.isServerbuffModifier);
        /* repeated MassivePropSyncInfo massive_prop_list = 6; */
        for (let i = 0; i < message.massivePropList.length; i++)
            MassivePropSyncInfo_1.MassivePropSyncInfo.internalBinaryWrite(message.massivePropList[i], writer.tag(6, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message AbilityMixinRecoverInfo
 */
exports.AbilityMixinRecoverInfo = new AbilityMixinRecoverInfo$Type();
