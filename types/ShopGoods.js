"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopGoods = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const ItemParam_1 = require("./ItemParam");
// @generated message type with reflection information, may provide speed optimized methods
class ShopGoods$Type extends runtime_5.MessageType {
    constructor() {
        super("ShopGoods", [
            { no: 1, name: "goods_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "goods_item", kind: "message", T: () => ItemParam_1.ItemParam },
            { no: 3, name: "scoin", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "hcoin", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "cost_item_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ItemParam_1.ItemParam },
            { no: 6, name: "bought_num", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "buy_limit", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "begin_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "end_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "next_refresh_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "min_level", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "max_level", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "pre_goods_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "mcoin", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "disable_type", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 16, name: "secondary_sheet_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 17, name: "discount_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 18, name: "discount_begin_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 19, name: "discount_end_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 20, name: "single_limit", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { goodsId: 0, scoin: 0, hcoin: 0, costItemList: [], boughtNum: 0, buyLimit: 0, beginTime: 0, endTime: 0, nextRefreshTime: 0, minLevel: 0, maxLevel: 0, preGoodsIdList: [], mcoin: 0, disableType: 0, secondarySheetId: 0, discountId: 0, discountBeginTime: 0, discountEndTime: 0, singleLimit: 0 };
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
                case /* uint32 goods_id */ 1:
                    message.goodsId = reader.uint32();
                    break;
                case /* ItemParam goods_item */ 2:
                    message.goodsItem = ItemParam_1.ItemParam.internalBinaryRead(reader, reader.uint32(), options, message.goodsItem);
                    break;
                case /* uint32 scoin */ 3:
                    message.scoin = reader.uint32();
                    break;
                case /* uint32 hcoin */ 4:
                    message.hcoin = reader.uint32();
                    break;
                case /* repeated ItemParam cost_item_list */ 5:
                    message.costItemList.push(ItemParam_1.ItemParam.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 bought_num */ 6:
                    message.boughtNum = reader.uint32();
                    break;
                case /* uint32 buy_limit */ 7:
                    message.buyLimit = reader.uint32();
                    break;
                case /* uint32 begin_time */ 8:
                    message.beginTime = reader.uint32();
                    break;
                case /* uint32 end_time */ 9:
                    message.endTime = reader.uint32();
                    break;
                case /* uint32 next_refresh_time */ 10:
                    message.nextRefreshTime = reader.uint32();
                    break;
                case /* uint32 min_level */ 11:
                    message.minLevel = reader.uint32();
                    break;
                case /* uint32 max_level */ 12:
                    message.maxLevel = reader.uint32();
                    break;
                case /* repeated uint32 pre_goods_id_list */ 13:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.preGoodsIdList.push(reader.uint32());
                    else
                        message.preGoodsIdList.push(reader.uint32());
                    break;
                case /* uint32 mcoin */ 14:
                    message.mcoin = reader.uint32();
                    break;
                case /* uint32 disable_type */ 15:
                    message.disableType = reader.uint32();
                    break;
                case /* uint32 secondary_sheet_id */ 16:
                    message.secondarySheetId = reader.uint32();
                    break;
                case /* uint32 discount_id */ 17:
                    message.discountId = reader.uint32();
                    break;
                case /* uint32 discount_begin_time */ 18:
                    message.discountBeginTime = reader.uint32();
                    break;
                case /* uint32 discount_end_time */ 19:
                    message.discountEndTime = reader.uint32();
                    break;
                case /* uint32 single_limit */ 20:
                    message.singleLimit = reader.uint32();
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
        /* uint32 goods_id = 1; */
        if (message.goodsId !== 0)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.goodsId);
        /* ItemParam goods_item = 2; */
        if (message.goodsItem)
            ItemParam_1.ItemParam.internalBinaryWrite(message.goodsItem, writer.tag(2, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* uint32 scoin = 3; */
        if (message.scoin !== 0)
            writer.tag(3, runtime_2.WireType.Varint).uint32(message.scoin);
        /* uint32 hcoin = 4; */
        if (message.hcoin !== 0)
            writer.tag(4, runtime_2.WireType.Varint).uint32(message.hcoin);
        /* repeated ItemParam cost_item_list = 5; */
        for (let i = 0; i < message.costItemList.length; i++)
            ItemParam_1.ItemParam.internalBinaryWrite(message.costItemList[i], writer.tag(5, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* uint32 bought_num = 6; */
        if (message.boughtNum !== 0)
            writer.tag(6, runtime_2.WireType.Varint).uint32(message.boughtNum);
        /* uint32 buy_limit = 7; */
        if (message.buyLimit !== 0)
            writer.tag(7, runtime_2.WireType.Varint).uint32(message.buyLimit);
        /* uint32 begin_time = 8; */
        if (message.beginTime !== 0)
            writer.tag(8, runtime_2.WireType.Varint).uint32(message.beginTime);
        /* uint32 end_time = 9; */
        if (message.endTime !== 0)
            writer.tag(9, runtime_2.WireType.Varint).uint32(message.endTime);
        /* uint32 next_refresh_time = 10; */
        if (message.nextRefreshTime !== 0)
            writer.tag(10, runtime_2.WireType.Varint).uint32(message.nextRefreshTime);
        /* uint32 min_level = 11; */
        if (message.minLevel !== 0)
            writer.tag(11, runtime_2.WireType.Varint).uint32(message.minLevel);
        /* uint32 max_level = 12; */
        if (message.maxLevel !== 0)
            writer.tag(12, runtime_2.WireType.Varint).uint32(message.maxLevel);
        /* repeated uint32 pre_goods_id_list = 13; */
        if (message.preGoodsIdList.length) {
            writer.tag(13, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.preGoodsIdList.length; i++)
                writer.uint32(message.preGoodsIdList[i]);
            writer.join();
        }
        /* uint32 mcoin = 14; */
        if (message.mcoin !== 0)
            writer.tag(14, runtime_2.WireType.Varint).uint32(message.mcoin);
        /* uint32 disable_type = 15; */
        if (message.disableType !== 0)
            writer.tag(15, runtime_2.WireType.Varint).uint32(message.disableType);
        /* uint32 secondary_sheet_id = 16; */
        if (message.secondarySheetId !== 0)
            writer.tag(16, runtime_2.WireType.Varint).uint32(message.secondarySheetId);
        /* uint32 discount_id = 17; */
        if (message.discountId !== 0)
            writer.tag(17, runtime_2.WireType.Varint).uint32(message.discountId);
        /* uint32 discount_begin_time = 18; */
        if (message.discountBeginTime !== 0)
            writer.tag(18, runtime_2.WireType.Varint).uint32(message.discountBeginTime);
        /* uint32 discount_end_time = 19; */
        if (message.discountEndTime !== 0)
            writer.tag(19, runtime_2.WireType.Varint).uint32(message.discountEndTime);
        /* uint32 single_limit = 20; */
        if (message.singleLimit !== 0)
            writer.tag(20, runtime_2.WireType.Varint).uint32(message.singleLimit);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ShopGoods
 */
exports.ShopGoods = new ShopGoods$Type();
