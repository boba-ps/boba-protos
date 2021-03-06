// @generated by protobuf-ts 2.4.0 with parameter generate_dependencies,output_typescript,// @generated from protobuf file "Item.proto" (syntax proto3),// tslint:disable
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
import { Furniture } from "./Furniture";
import { Equip } from "./Equip";
import { Material } from "./Material";
/**
 * @generated from protobuf message Item
 */
export interface Item {
    /**
     * @generated from protobuf oneof: Detail
     */
    detail: {
        oneofKind: "material";
        /**
         * @generated from protobuf field: Material material = 5;
         */
        material: Material;
    } | {
        oneofKind: "equip";
        /**
         * @generated from protobuf field: Equip equip = 6;
         */
        equip: Equip;
    } | {
        oneofKind: "furniture";
        /**
         * @generated from protobuf field: Furniture furniture = 7;
         */
        furniture: Furniture;
    } | {
        oneofKind: undefined;
    };
    /**
     * @generated from protobuf field: uint32 item_id = 1;
     */
    itemId: number;
    /**
     * @generated from protobuf field: uint64 guid = 2;
     */
    guid: bigint;
}
// @generated message type with reflection information, may provide speed optimized methods
class Item$Type extends MessageType<Item> {
    constructor() {
        super("Item", [
            { no: 5, name: "material", kind: "message", oneof: "detail", T: () => Material },
            { no: 6, name: "equip", kind: "message", oneof: "detail", T: () => Equip },
            { no: 7, name: "furniture", kind: "message", oneof: "detail", T: () => Furniture },
            { no: 1, name: "item_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "guid", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value?: PartialMessage<Item>): Item {
        const message = { detail: { oneofKind: undefined }, itemId: 0, guid: 0n };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<Item>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Item): Item {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* Material material */ 5:
                    message.detail = {
                        oneofKind: "material",
                        material: Material.internalBinaryRead(reader, reader.uint32(), options, (message.detail as any).material)
                    };
                    break;
                case /* Equip equip */ 6:
                    message.detail = {
                        oneofKind: "equip",
                        equip: Equip.internalBinaryRead(reader, reader.uint32(), options, (message.detail as any).equip)
                    };
                    break;
                case /* Furniture furniture */ 7:
                    message.detail = {
                        oneofKind: "furniture",
                        furniture: Furniture.internalBinaryRead(reader, reader.uint32(), options, (message.detail as any).furniture)
                    };
                    break;
                case /* uint32 item_id */ 1:
                    message.itemId = reader.uint32();
                    break;
                case /* uint64 guid */ 2:
                    message.guid = reader.uint64().toBigInt();
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
    internalBinaryWrite(message: Item, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* Material material = 5; */
        if (message.detail.oneofKind === "material")
            Material.internalBinaryWrite(message.detail.material, writer.tag(5, WireType.LengthDelimited).fork(), options).join();
        /* Equip equip = 6; */
        if (message.detail.oneofKind === "equip")
            Equip.internalBinaryWrite(message.detail.equip, writer.tag(6, WireType.LengthDelimited).fork(), options).join();
        /* Furniture furniture = 7; */
        if (message.detail.oneofKind === "furniture")
            Furniture.internalBinaryWrite(message.detail.furniture, writer.tag(7, WireType.LengthDelimited).fork(), options).join();
        /* uint32 item_id = 1; */
        if (message.itemId !== 0)
            writer.tag(1, WireType.Varint).uint32(message.itemId);
        /* uint64 guid = 2; */
        if (message.guid !== 0n)
            writer.tag(2, WireType.Varint).uint64(message.guid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message Item
 */
export const Item = new Item$Type();
