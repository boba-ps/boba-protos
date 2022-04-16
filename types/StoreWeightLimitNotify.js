"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreWeightLimitNotify = exports.StoreWeightLimitNotify_CmdId = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const StoreType_1 = require("./StoreType");
/**
 * @generated from protobuf enum StoreWeightLimitNotify.CmdId
 */
var StoreWeightLimitNotify_CmdId;
(function (StoreWeightLimitNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    StoreWeightLimitNotify_CmdId[StoreWeightLimitNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    StoreWeightLimitNotify_CmdId[StoreWeightLimitNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    StoreWeightLimitNotify_CmdId[StoreWeightLimitNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: CMD_ID = 618;
     */
    StoreWeightLimitNotify_CmdId[StoreWeightLimitNotify_CmdId["CMD_ID"] = 618] = "CMD_ID";
})(StoreWeightLimitNotify_CmdId = exports.StoreWeightLimitNotify_CmdId || (exports.StoreWeightLimitNotify_CmdId = {}));
// @generated message type with reflection information, may provide speed optimized methods
class StoreWeightLimitNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("StoreWeightLimitNotify", [
            { no: 1, name: "store_type", kind: "enum", T: () => ["StoreType", StoreType_1.StoreType] },
            { no: 3, name: "weight_limit", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "material_count_limit", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "weapon_count_limit", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "reliquary_count_limit", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "furniture_count_limit", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { storeType: 0, weightLimit: 0, materialCountLimit: 0, weaponCountLimit: 0, reliquaryCountLimit: 0, furnitureCountLimit: 0 };
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
                case /* StoreType store_type */ 1:
                    message.storeType = reader.int32();
                    break;
                case /* uint32 weight_limit */ 3:
                    message.weightLimit = reader.uint32();
                    break;
                case /* uint32 material_count_limit */ 4:
                    message.materialCountLimit = reader.uint32();
                    break;
                case /* uint32 weapon_count_limit */ 5:
                    message.weaponCountLimit = reader.uint32();
                    break;
                case /* uint32 reliquary_count_limit */ 6:
                    message.reliquaryCountLimit = reader.uint32();
                    break;
                case /* uint32 furniture_count_limit */ 7:
                    message.furnitureCountLimit = reader.uint32();
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
        /* StoreType store_type = 1; */
        if (message.storeType !== 0)
            writer.tag(1, runtime_1.WireType.Varint).int32(message.storeType);
        /* uint32 weight_limit = 3; */
        if (message.weightLimit !== 0)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.weightLimit);
        /* uint32 material_count_limit = 4; */
        if (message.materialCountLimit !== 0)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.materialCountLimit);
        /* uint32 weapon_count_limit = 5; */
        if (message.weaponCountLimit !== 0)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.weaponCountLimit);
        /* uint32 reliquary_count_limit = 6; */
        if (message.reliquaryCountLimit !== 0)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.reliquaryCountLimit);
        /* uint32 furniture_count_limit = 7; */
        if (message.furnitureCountLimit !== 0)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.furnitureCountLimit);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message StoreWeightLimitNotify
 */
exports.StoreWeightLimitNotify = new StoreWeightLimitNotify$Type();
