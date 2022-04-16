// @generated by protobuf-ts 2.4.0 with parameter generate_dependencies,output_typescript,// @generated from protobuf file "StoreWeightLimitNotify.proto" (syntax proto3),// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { StoreType } from "./StoreType";
/**
 * @generated from protobuf message StoreWeightLimitNotify
 */
export interface StoreWeightLimitNotify {
    /**
     * @generated from protobuf field: StoreType store_type = 1;
     */
    storeType: StoreType;
    /**
     * @generated from protobuf field: uint32 weight_limit = 3;
     */
    weightLimit: number;
    /**
     * @generated from protobuf field: uint32 material_count_limit = 4;
     */
    materialCountLimit: number;
    /**
     * @generated from protobuf field: uint32 weapon_count_limit = 5;
     */
    weaponCountLimit: number;
    /**
     * @generated from protobuf field: uint32 reliquary_count_limit = 6;
     */
    reliquaryCountLimit: number;
    /**
     * @generated from protobuf field: uint32 furniture_count_limit = 7;
     */
    furnitureCountLimit: number;
}
/**
 * @generated from protobuf enum StoreWeightLimitNotify.CmdId
 */
export enum StoreWeightLimitNotify_CmdId {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    NONE = 0,
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ENET_CHANNEL_ID = 0,
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ENET_IS_RELIABLE = 1,
    /**
     * @generated from protobuf enum value: CMD_ID = 618;
     */
    CMD_ID = 618
}
// @generated message type with reflection information, may provide speed optimized methods
class StoreWeightLimitNotify$Type extends MessageType<StoreWeightLimitNotify> {
    constructor() {
        super("StoreWeightLimitNotify", [
            { no: 1, name: "store_type", kind: "enum", T: () => ["StoreType", StoreType] },
            { no: 3, name: "weight_limit", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "material_count_limit", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "weapon_count_limit", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "reliquary_count_limit", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "furniture_count_limit", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<StoreWeightLimitNotify>): StoreWeightLimitNotify {
        const message = { storeType: 0, weightLimit: 0, materialCountLimit: 0, weaponCountLimit: 0, reliquaryCountLimit: 0, furnitureCountLimit: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<StoreWeightLimitNotify>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: StoreWeightLimitNotify): StoreWeightLimitNotify {
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
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: StoreWeightLimitNotify, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* StoreType store_type = 1; */
        if (message.storeType !== 0)
            writer.tag(1, WireType.Varint).int32(message.storeType);
        /* uint32 weight_limit = 3; */
        if (message.weightLimit !== 0)
            writer.tag(3, WireType.Varint).uint32(message.weightLimit);
        /* uint32 material_count_limit = 4; */
        if (message.materialCountLimit !== 0)
            writer.tag(4, WireType.Varint).uint32(message.materialCountLimit);
        /* uint32 weapon_count_limit = 5; */
        if (message.weaponCountLimit !== 0)
            writer.tag(5, WireType.Varint).uint32(message.weaponCountLimit);
        /* uint32 reliquary_count_limit = 6; */
        if (message.reliquaryCountLimit !== 0)
            writer.tag(6, WireType.Varint).uint32(message.reliquaryCountLimit);
        /* uint32 furniture_count_limit = 7; */
        if (message.furnitureCountLimit !== 0)
            writer.tag(7, WireType.Varint).uint32(message.furnitureCountLimit);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message StoreWeightLimitNotify
 */
export const StoreWeightLimitNotify = new StoreWeightLimitNotify$Type();
