"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopConcertProduct = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class ShopConcertProduct$Type extends runtime_5.MessageType {
    constructor() {
        super("ShopConcertProduct", [
            { no: 1, name: "product_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "price_tier", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "obtain_count", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "obtain_limit", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "begin_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "end_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "buy_times", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { productId: "", priceTier: "", obtainCount: 0, obtainLimit: 0, beginTime: 0, endTime: 0, buyTimes: 0 };
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
                case /* uint32 obtain_count */ 3:
                    message.obtainCount = reader.uint32();
                    break;
                case /* uint32 obtain_limit */ 4:
                    message.obtainLimit = reader.uint32();
                    break;
                case /* uint32 begin_time */ 5:
                    message.beginTime = reader.uint32();
                    break;
                case /* uint32 end_time */ 6:
                    message.endTime = reader.uint32();
                    break;
                case /* uint32 buy_times */ 7:
                    message.buyTimes = reader.uint32();
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
        /* uint32 obtain_count = 3; */
        if (message.obtainCount !== 0)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.obtainCount);
        /* uint32 obtain_limit = 4; */
        if (message.obtainLimit !== 0)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.obtainLimit);
        /* uint32 begin_time = 5; */
        if (message.beginTime !== 0)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.beginTime);
        /* uint32 end_time = 6; */
        if (message.endTime !== 0)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.endTime);
        /* uint32 buy_times = 7; */
        if (message.buyTimes !== 0)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.buyTimes);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ShopConcertProduct
 */
exports.ShopConcertProduct = new ShopConcertProduct$Type();
