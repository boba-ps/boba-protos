"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerDataNotify = exports.PlayerDataNotify_CmdId = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const PropValue_1 = require("./PropValue");
/**
 * @generated from protobuf enum PlayerDataNotify.CmdId
 */
var PlayerDataNotify_CmdId;
(function (PlayerDataNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerDataNotify_CmdId[PlayerDataNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerDataNotify_CmdId[PlayerDataNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PlayerDataNotify_CmdId[PlayerDataNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: CMD_ID = 142;
     */
    PlayerDataNotify_CmdId[PlayerDataNotify_CmdId["CMD_ID"] = 142] = "CMD_ID";
})(PlayerDataNotify_CmdId = exports.PlayerDataNotify_CmdId || (exports.PlayerDataNotify_CmdId = {}));
// @generated message type with reflection information, may provide speed optimized methods
class PlayerDataNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("PlayerDataNotify", [
            { no: 1, name: "nick_name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "server_time", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 3, name: "is_first_login_today", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 4, name: "region_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "prop_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "message", T: () => PropValue_1.PropValue } }
        ]);
    }
    create(value) {
        const message = { nickName: "", serverTime: 0n, isFirstLoginToday: false, regionId: 0, propMap: {} };
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
                case /* string nick_name */ 1:
                    message.nickName = reader.string();
                    break;
                case /* uint64 server_time */ 2:
                    message.serverTime = reader.uint64().toBigInt();
                    break;
                case /* bool is_first_login_today */ 3:
                    message.isFirstLoginToday = reader.bool();
                    break;
                case /* uint32 region_id */ 4:
                    message.regionId = reader.uint32();
                    break;
                case /* map<uint32, PropValue> prop_map */ 6:
                    this.binaryReadMap6(message.propMap, reader, options);
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
    binaryReadMap6(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = PropValue_1.PropValue.internalBinaryRead(reader, reader.uint32(), options);
                    break;
                default: throw new globalThis.Error("unknown map entry field for field PlayerDataNotify.prop_map");
            }
        }
        map[key ?? 0] = val ?? PropValue_1.PropValue.create();
    }
    internalBinaryWrite(message, writer, options) {
        /* string nick_name = 1; */
        if (message.nickName !== "")
            writer.tag(1, runtime_1.WireType.LengthDelimited).string(message.nickName);
        /* uint64 server_time = 2; */
        if (message.serverTime !== 0n)
            writer.tag(2, runtime_1.WireType.Varint).uint64(message.serverTime);
        /* bool is_first_login_today = 3; */
        if (message.isFirstLoginToday !== false)
            writer.tag(3, runtime_1.WireType.Varint).bool(message.isFirstLoginToday);
        /* uint32 region_id = 4; */
        if (message.regionId !== 0)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.regionId);
        /* map<uint32, PropValue> prop_map = 6; */
        for (let k of Object.keys(message.propMap)) {
            writer.tag(6, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k));
            writer.tag(2, runtime_1.WireType.LengthDelimited).fork();
            PropValue_1.PropValue.internalBinaryWrite(message.propMap[k], writer, options);
            writer.join().join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message PlayerDataNotify
 */
exports.PlayerDataNotify = new PlayerDataNotify$Type();
