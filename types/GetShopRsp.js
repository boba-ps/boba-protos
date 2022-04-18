"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetShopRsp = exports.GetShopRsp_CmdId = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const Shop_1 = require("./Shop");
/**
 * @generated from protobuf enum GetShopRsp.CmdId
 */
var GetShopRsp_CmdId;
(function (GetShopRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetShopRsp_CmdId[GetShopRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetShopRsp_CmdId[GetShopRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetShopRsp_CmdId[GetShopRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: CMD_ID = 718;
     */
    GetShopRsp_CmdId[GetShopRsp_CmdId["CMD_ID"] = 718] = "CMD_ID";
})(GetShopRsp_CmdId = exports.GetShopRsp_CmdId || (exports.GetShopRsp_CmdId = {}));
// @generated message type with reflection information, may provide speed optimized methods
class GetShopRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("GetShopRsp", [
            { no: 1, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 2, name: "shop", kind: "message", T: () => Shop_1.Shop }
        ]);
    }
    create(value) {
        const message = { retcode: 0 };
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
                case /* int32 retcode */ 1:
                    message.retcode = reader.int32();
                    break;
                case /* Shop shop */ 2:
                    message.shop = Shop_1.Shop.internalBinaryRead(reader, reader.uint32(), options, message.shop);
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
        /* int32 retcode = 1; */
        if (message.retcode !== 0)
            writer.tag(1, runtime_1.WireType.Varint).int32(message.retcode);
        /* Shop shop = 2; */
        if (message.shop)
            Shop_1.Shop.internalBinaryWrite(message.shop, writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GetShopRsp
 */
exports.GetShopRsp = new GetShopRsp$Type();
