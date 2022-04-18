"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopCardProduct_ResinCard = exports.ShopCardProduct = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const ItemParam_1 = require("./ItemParam");
// @generated message type with reflection information, may provide speed optimized methods
class ShopCardProduct$Type extends runtime_5.MessageType {
    constructor() {
        super("ShopCardProduct", [
            { no: 101, name: "resin_card", kind: "message", oneof: "extraCardData", T: () => exports.ShopCardProduct_ResinCard },
            { no: 1, name: "product_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "price_tier", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "mcoin_base", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "hcoin_per_day", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "days", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "remain_reward_days", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "card_product_type", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { extraCardData: { oneofKind: undefined }, productId: "", priceTier: "", mcoinBase: 0, hcoinPerDay: 0, days: 0, remainRewardDays: 0, cardProductType: 0 };
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
                case /* ShopCardProduct.ResinCard resin_card */ 101:
                    message.extraCardData = {
                        oneofKind: "resinCard",
                        resinCard: exports.ShopCardProduct_ResinCard.internalBinaryRead(reader, reader.uint32(), options, message.extraCardData.resinCard)
                    };
                    break;
                case /* string product_id */ 1:
                    message.productId = reader.string();
                    break;
                case /* string price_tier */ 2:
                    message.priceTier = reader.string();
                    break;
                case /* uint32 mcoin_base */ 3:
                    message.mcoinBase = reader.uint32();
                    break;
                case /* uint32 hcoin_per_day */ 4:
                    message.hcoinPerDay = reader.uint32();
                    break;
                case /* uint32 days */ 5:
                    message.days = reader.uint32();
                    break;
                case /* uint32 remain_reward_days */ 6:
                    message.remainRewardDays = reader.uint32();
                    break;
                case /* uint32 card_product_type */ 7:
                    message.cardProductType = reader.uint32();
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
        /* ShopCardProduct.ResinCard resin_card = 101; */
        if (message.extraCardData.oneofKind === "resinCard")
            exports.ShopCardProduct_ResinCard.internalBinaryWrite(message.extraCardData.resinCard, writer.tag(101, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* string product_id = 1; */
        if (message.productId !== "")
            writer.tag(1, runtime_1.WireType.LengthDelimited).string(message.productId);
        /* string price_tier = 2; */
        if (message.priceTier !== "")
            writer.tag(2, runtime_1.WireType.LengthDelimited).string(message.priceTier);
        /* uint32 mcoin_base = 3; */
        if (message.mcoinBase !== 0)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.mcoinBase);
        /* uint32 hcoin_per_day = 4; */
        if (message.hcoinPerDay !== 0)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.hcoinPerDay);
        /* uint32 days = 5; */
        if (message.days !== 0)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.days);
        /* uint32 remain_reward_days = 6; */
        if (message.remainRewardDays !== 0)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.remainRewardDays);
        /* uint32 card_product_type = 7; */
        if (message.cardProductType !== 0)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.cardProductType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ShopCardProduct
 */
exports.ShopCardProduct = new ShopCardProduct$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ShopCardProduct_ResinCard$Type extends runtime_5.MessageType {
    constructor() {
        super("ShopCardProduct.ResinCard", [
            { no: 1, name: "base_item_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ItemParam_1.ItemParam },
            { no: 2, name: "per_day_item_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ItemParam_1.ItemParam }
        ]);
    }
    create(value) {
        const message = { baseItemList: [], perDayItemList: [] };
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
                case /* repeated ItemParam base_item_list */ 1:
                    message.baseItemList.push(ItemParam_1.ItemParam.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated ItemParam per_day_item_list */ 2:
                    message.perDayItemList.push(ItemParam_1.ItemParam.internalBinaryRead(reader, reader.uint32(), options));
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
        /* repeated ItemParam base_item_list = 1; */
        for (let i = 0; i < message.baseItemList.length; i++)
            ItemParam_1.ItemParam.internalBinaryWrite(message.baseItemList[i], writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* repeated ItemParam per_day_item_list = 2; */
        for (let i = 0; i < message.perDayItemList.length; i++)
            ItemParam_1.ItemParam.internalBinaryWrite(message.perDayItemList[i], writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ShopCardProduct.ResinCard
 */
exports.ShopCardProduct_ResinCard = new ShopCardProduct_ResinCard$Type();
