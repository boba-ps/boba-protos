"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerStoreNotify = exports.PlayerStoreNotify_CmdId = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const Item_1 = require("./Item");
const StoreType_1 = require("./StoreType");
/**
 * @generated from protobuf enum PlayerStoreNotify.CmdId
 */
var PlayerStoreNotify_CmdId;
(function (PlayerStoreNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerStoreNotify_CmdId[PlayerStoreNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerStoreNotify_CmdId[PlayerStoreNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PlayerStoreNotify_CmdId[PlayerStoreNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: CMD_ID = 649;
     */
    PlayerStoreNotify_CmdId[PlayerStoreNotify_CmdId["CMD_ID"] = 649] = "CMD_ID";
})(PlayerStoreNotify_CmdId = exports.PlayerStoreNotify_CmdId || (exports.PlayerStoreNotify_CmdId = {}));
// @generated message type with reflection information, may provide speed optimized methods
class PlayerStoreNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("PlayerStoreNotify", [
            { no: 1, name: "store_type", kind: "enum", T: () => ["StoreType", StoreType_1.StoreType] },
            { no: 2, name: "item_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Item_1.Item },
            { no: 3, name: "weight_limit", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { storeType: 0, itemList: [], weightLimit: 0 };
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
                case /* repeated Item item_list */ 2:
                    message.itemList.push(Item_1.Item.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 weight_limit */ 3:
                    message.weightLimit = reader.uint32();
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
        /* repeated Item item_list = 2; */
        for (let i = 0; i < message.itemList.length; i++)
            Item_1.Item.internalBinaryWrite(message.itemList[i], writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 weight_limit = 3; */
        if (message.weightLimit !== 0)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.weightLimit);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message PlayerStoreNotify
 */
exports.PlayerStoreNotify = new PlayerStoreNotify$Type();
