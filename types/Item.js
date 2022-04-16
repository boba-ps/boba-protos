"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Item = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const Furniture_1 = require("./Furniture");
const Equip_1 = require("./Equip");
const Material_1 = require("./Material");
// @generated message type with reflection information, may provide speed optimized methods
class Item$Type extends runtime_5.MessageType {
    constructor() {
        super("Item", [
            { no: 5, name: "material", kind: "message", oneof: "detail", T: () => Material_1.Material },
            { no: 6, name: "equip", kind: "message", oneof: "detail", T: () => Equip_1.Equip },
            { no: 7, name: "furniture", kind: "message", oneof: "detail", T: () => Furniture_1.Furniture },
            { no: 1, name: "item_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "guid", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value) {
        const message = { detail: { oneofKind: undefined }, itemId: 0, guid: 0n };
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
                case /* Material material */ 5:
                    message.detail = {
                        oneofKind: "material",
                        material: Material_1.Material.internalBinaryRead(reader, reader.uint32(), options, message.detail.material)
                    };
                    break;
                case /* Equip equip */ 6:
                    message.detail = {
                        oneofKind: "equip",
                        equip: Equip_1.Equip.internalBinaryRead(reader, reader.uint32(), options, message.detail.equip)
                    };
                    break;
                case /* Furniture furniture */ 7:
                    message.detail = {
                        oneofKind: "furniture",
                        furniture: Furniture_1.Furniture.internalBinaryRead(reader, reader.uint32(), options, message.detail.furniture)
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
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* Material material = 5; */
        if (message.detail.oneofKind === "material")
            Material_1.Material.internalBinaryWrite(message.detail.material, writer.tag(5, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* Equip equip = 6; */
        if (message.detail.oneofKind === "equip")
            Equip_1.Equip.internalBinaryWrite(message.detail.equip, writer.tag(6, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* Furniture furniture = 7; */
        if (message.detail.oneofKind === "furniture")
            Furniture_1.Furniture.internalBinaryWrite(message.detail.furniture, writer.tag(7, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 item_id = 1; */
        if (message.itemId !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.itemId);
        /* uint64 guid = 2; */
        if (message.guid !== 0n)
            writer.tag(2, runtime_1.WireType.Varint).uint64(message.guid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message Item
 */
exports.Item = new Item$Type();
