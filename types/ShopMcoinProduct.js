"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopMcoinProduct = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class ShopMcoinProduct$Type extends runtime_5.MessageType {
    constructor() {
        super("ShopMcoinProduct", [
            { no: 1, name: "product_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "price_tier", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "mcoin_base", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "mcoin_non_first", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "mcoin_first", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "bought_num", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "is_audit", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { productId: "", priceTier: "", mcoinBase: 0, mcoinNonFirst: 0, mcoinFirst: 0, boughtNum: 0, isAudit: false };
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
                case /* string product_id */ 1:
                    message.productId = reader.string();
                    break;
                case /* string price_tier */ 2:
                    message.priceTier = reader.string();
                    break;
                case /* uint32 mcoin_base */ 3:
                    message.mcoinBase = reader.uint32();
                    break;
                case /* uint32 mcoin_non_first */ 4:
                    message.mcoinNonFirst = reader.uint32();
                    break;
                case /* uint32 mcoin_first */ 5:
                    message.mcoinFirst = reader.uint32();
                    break;
                case /* uint32 bought_num */ 6:
                    message.boughtNum = reader.uint32();
                    break;
                case /* bool is_audit */ 7:
                    message.isAudit = reader.bool();
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
        /* string product_id = 1; */
        if (message.productId !== "")
            writer.tag(1, runtime_1.WireType.LengthDelimited).string(message.productId);
        /* string price_tier = 2; */
        if (message.priceTier !== "")
            writer.tag(2, runtime_1.WireType.LengthDelimited).string(message.priceTier);
        /* uint32 mcoin_base = 3; */
        if (message.mcoinBase !== 0)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.mcoinBase);
        /* uint32 mcoin_non_first = 4; */
        if (message.mcoinNonFirst !== 0)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.mcoinNonFirst);
        /* uint32 mcoin_first = 5; */
        if (message.mcoinFirst !== 0)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.mcoinFirst);
        /* uint32 bought_num = 6; */
        if (message.boughtNum !== 0)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.boughtNum);
        /* bool is_audit = 7; */
        if (message.isAudit !== false)
            writer.tag(7, runtime_1.WireType.Varint).bool(message.isAudit);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ShopMcoinProduct
 */
exports.ShopMcoinProduct = new ShopMcoinProduct$Type();
